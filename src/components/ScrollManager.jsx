import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    const header = () =>
      document.querySelector("header") || document.querySelector("nav") || null;
    const getOffset = () => {
      const h = header();
      return h ? h.getBoundingClientRect().height + 8 : 80;
    };

    window.__scrollTo = (id, prefill) => {
      if (prefill) sessionStorage.setItem("prefillService", prefill);
      const el = document.querySelector(`#${id}`);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top, behavior: "smooth" });
    };

    // intercept anchor links
    function onClick(e) {
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      // allow legal placeholders (privacy/terms)
      if (href === "#") return;
      e.preventDefault();
      const id = href.replace("#", "");
      window.__scrollTo(id);
    }

    document.addEventListener("click", onClick);

    // active nav highlighting
    const sections = Array.from(
      document.querySelectorAll("section[id], [id]"),
    ).filter((s) => s.id);
    const navLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target.id) return;
          const id = entry.target.id;
          const link = navLinks.find(
            (l) => l.getAttribute("href") === `#${id}`,
          );
          if (entry.isIntersecting) {
            if (link) {
              navLinks.forEach((l) => l.classList.remove("text-orange-500"));
              link.classList.add("text-orange-500");
            }
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));

    return () => {
      document.removeEventListener("click", onClick);
      io.disconnect();
      delete window.__scrollTo;
    };
  }, []);

  return null;
}
