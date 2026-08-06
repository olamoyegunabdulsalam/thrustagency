import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(20,23,31,0.12)]"
          : "bg-white/0"
      }`}
    >
      <div className="container-page">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="assets/thrust-logo.png"
              alt="Thrust Agency logo"
              className="w-10 h-10 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-display font-extrabold text-lg tracking-tight text-ink-900">
                THRUST
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.2em] text-ink-400 -mt-1">
                AGENCY
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.__scrollTo?.(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              onClick={() => window.__scrollTo && window.__scrollTo("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-ink-900"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-ink-100"
          >
            <ul className="container-page py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);

                      setTimeout(() => {
                        window.__scrollTo?.(link.id);
                      }, 200);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileOpen(false);
                    window.__scrollTo && window.__scrollTo("contact");
                  }}
                >
                  Let's Talk
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
