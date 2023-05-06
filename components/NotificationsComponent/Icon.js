export default function Icon({ isMenuOpen, setIsMenuOpen, iconRef }) {
  return (
    <div
      ref={iconRef}
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className={
        isMenuOpen
          ? `icon icon__square_lines icon_selected `
          : `icon icon__square_lines`
      }
      style={{ cursor: "pointer" }}
    />
  );
}
