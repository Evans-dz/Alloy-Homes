"use client";

import { useState } from "react";

// Shows the image when the file exists. If it's missing (e.g. photos
// not uploaded yet), it degrades to a branded placeholder instead of a
// broken image — so the owner preview always looks intentional.
export default function SmartImage({ src, alt = "", label, className = "" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`smart-image smart-image--placeholder ${className}`}>
        <span className="smart-image__mark" aria-hidden="true">
          A
        </span>
        {label ? <span className="smart-image__label">{label}</span> : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`smart-image ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
