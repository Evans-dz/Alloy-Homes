"use client";

import { useEffect, useState } from "react";
import { site } from "../data/site";

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
        <a href="#top" className="wordmark" onClick={close} aria-label="Alloy Homes — home">
          <span className="wordmark__mark" aria-hidden="true">
            A
          </span>
          <span className="wordmark__text">
            ALLOY <span className="wordmark__thin">HOMES</span>
          </span>
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
          <a href="#contact" className="btn btn--primary btn--sm">
            Start your build
          </a>
        </div>

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
          <a href="#contact" className="btn btn--primary" onClick={close}>
            Start your build
          </a>
        </div>
      </div>
    </header>
  );
}
