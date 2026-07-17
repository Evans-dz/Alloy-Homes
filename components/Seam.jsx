// The "seam" — the weld line where an alloy fuses. Used between
// sections as the site's signature motif. Draws in on scroll via CSS.
export default function Seam({ label }) {
  return (
    <div className="seam" role="separator" aria-label={label || "section divider"}>
      <span className="seam__line" aria-hidden="true" />
      <span className="seam__node" aria-hidden="true" />
      <span className="seam__line" aria-hidden="true" />
    </div>
  );
}
