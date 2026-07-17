"use client";

import { useEffect, useState, useCallback } from "react";
import SmartImage from "./SmartImage";

export default function Gallery({ images = [], name = "" }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  if (!images.length) return null;

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button
            key={src}
            className={`gallery__item ${i === 0 ? "gallery__item--wide" : ""}`}
            onClick={() => show(i)}
            aria-label={`Open photo ${i + 1} of ${name}`}
          >
            <SmartImage src={src} alt={`${name} — photo ${i + 1}`} label={name} className="gallery__img" />
          </button>
        ))}
      </div>

      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} photos`} onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            &times;
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            &lsaquo;
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={images[index]} alt={`${name} — photo ${index + 1}`} className="lightbox__img" />
            <figcaption className="lightbox__caption">
              {name} · {index + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            &rsaquo;
          </button>
        </div>
      ) : null}
    </>
  );
}
