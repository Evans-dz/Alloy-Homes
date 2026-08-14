"use client";

import { useEffect, useRef, useState } from "react";

// Association logos are full-colour art on white, so each sits on its own
// light tile rather than directly on the dark footer. If a logo file hasn't
// been added yet the short name carries the tile instead of the browser
// showing a broken image.
export default function MemberLogo({ logo, name, short, href }) {
  const [failed, setFailed] = useState(!logo);
  const imgRef = useRef(null);

  // A missing logo 404s while the server-rendered HTML is still parsing —
  // before React attaches onError — so that handler alone would miss it and
  // leave a broken image on screen. Re-check once mounted.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  const tile = (
    <>
      <span className="member__tile">
        {failed ? (
          <span className="member__abbr">{short}</span>
        ) : (
          <img
            ref={imgRef}
            src={logo}
            alt={name}
            className="member__logo"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </span>
      {/* With a logo the caption labels it; without one the tile already
          says the name, so repeating it underneath just reads as a stutter. */}
      {failed ? null : <span className="member__name">{short}</span>}
    </>
  );

  return (
    <li className="member">
      {href ? (
        <a
          className="member__link"
          href={href}
          target="_blank"
          rel="noreferrer"
          title={name}
          aria-label={`${name} (opens in a new tab)`}
        >
          {tile}
        </a>
      ) : (
        <span className="member__link" title={name}>
          {tile}
        </span>
      )}
    </li>
  );
}
