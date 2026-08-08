// Alloy Homes wordmark logo.
// Defaults to the white version for dark backgrounds (header + footer).
// Pass variant="black" to use the dark version on light surfaces.
export function AlloyLogo({ className = "", variant = "white" }) {
  const src =
    variant === "black"
      ? "/images/logos/alloy-homes-black.png"
      : "/images/logos/alloy-homes-white.png";

  return (
    <img
      src={src}
      alt="Alloy Homes"
      className={`wordmark__logo ${className}`.trim()}
      width={1501}
      height={748}
      draggable={false}
    />
  );
}

export default AlloyLogo;
