/**
 * A reusable CTA button component.
 * - If href starts with "#", it smoothly scrolls to that section.
 * - If href is a link (like a PDF or page), it navigates normally.
 */

const Button = ({ text, className, href }) => {
  const handleClick = (e) => {
    if (!href) return;

    // Handle smooth scroll for section links
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    // Otherwise (PDF, external page), do nothing → normal link behavior
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      target={href.endsWith(".pdf") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
