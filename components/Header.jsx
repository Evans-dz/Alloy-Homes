"use client";
import { useEffect, useState } from "react";
import { site } from "../data/site";
import { AlloyLogo } from "./AlloyLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""} ${open ? "header--open" : ""}`}>
      <div className="header__inner">
        <a href="/#top" className="wordmark" onClick={close} aria-label="Alloy Homes home page">
          <AlloyLogo className="wordmark__logo" />
        </a>
        <nav className="header__nav" aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href={site.phoneHref} className="header__phone">
            {site.phone}
          </a>
          <a href="/#contact" className="btn btn--primary btn--sm">
            Start your build
          </a>
        </div>
        {/* Phones only: the desktop bar shows the number in full. */}
        <a
          href={site.phoneHref}
          className="header__call"
          aria-label={`Call ${site.name} at ${site.phone}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"
            />
          </svg>
        </a>
        <button
          className="header__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="mobile-menu__link" onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href={site.phoneHref} className="mobile-menu__phone" onClick={close}>
            {site.phone}
          </a>
          <a href="/#contact" className="btn btn--primary" onClick={close}>
            Start your build
          </a>
        </div>
      </div>
    </header>
  );
}
