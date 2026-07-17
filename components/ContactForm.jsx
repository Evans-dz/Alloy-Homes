"use client";

import { useState } from "react";

const initial = {
  name: "",
  email: "",
  phone: "",
  location: "",
  timeline: "",
  message: "",
  company: "", // honeypot — real people leave this blank
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form form--done" role="status">
        <span className="form__mark" aria-hidden="true">
          A
        </span>
        <h3 className="form__done-title">Thanks — we've got it.</h3>
        <p className="form__done-body">
          Justin will be in touch soon. If you'd rather talk now, call{" "}
          <a href="tel:4357701232">(435) 770-1232</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="form">
      {/* Honeypot: visually hidden, ignored by humans */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update}
        className="form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form__row">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="field">
          <span className="field__label">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form__row">
        <label className="field">
          <span className="field__label">Phone</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            placeholder="(435) 000-0000"
            autoComplete="tel"
          />
        </label>
        <label className="field">
          <span className="field__label">Desired build location</span>
          <input
            name="location"
            value={form.location}
            onChange={update}
            placeholder="e.g. Ivins, UT"
          />
        </label>
      </div>

      <label className="field">
        <span className="field__label">Timeline</span>
        <select name="timeline" value={form.timeline} onChange={update}>
          <option value="">When would you like to build?</option>
          <option>Within 3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>1+ year</option>
          <option>Just exploring</option>
        </select>
      </label>

      <label className="field">
        <span className="field__label">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={5}
          placeholder="Tell us about the home you'd like to build — lot, style, size, must-haves."
        />
      </label>

      {status === "error" ? (
        <p className="form__error" role="alert">
          Please add at least your name and email, then try again — or call{" "}
          <a href="tel:4357701232">(435) 770-1232</a>.
        </p>
      ) : null}

      <button className="btn btn--primary btn--block" onClick={submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
    </div>
  );
}
