import { useEffect, useState, useRef } from "react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href =
    "https://wa.me/2348130864392?text=Hi%20Thrust%20Agency,%20I'm%20interested%20in%20working%20with%20you.%20I'd%20like%20to%20discuss%20my%20project.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`floating-whatsapp ${visible ? "floating-whatsapp--visible" : ""}`}
    >
      <span className="floating-whatsapp__icon" aria-hidden>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .021 5.35 0 12c0 2.112.55 4.182 1.593 6.02L0 24l6.201-1.61A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12 0-3.213-1.253-6.213-3.48-8.52z"
            fill="#fff"
          />
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.966-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.131-.607.134-.133.297-.347.446-.52.149-.173.198-.298.297-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.612-.922-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0 0 .24.103.432.153.192.05.372.025.512-.025.14-.05 1.758-.718 2.006-.998.248-.28.248-.52.174-.597-.074-.074-.272-.123-.57-.272z"
            fill="#25D366"
          />
        </svg>
      </span>
      <span className="floating-whatsapp__label">💬 Chat with us</span>
    </a>
  );
}
