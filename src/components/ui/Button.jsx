import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const variants = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_8px_20px_-6px_rgba(241,89,42,0.55)]",
  secondary:
    "bg-white text-ink-900 border border-ink-200 hover:border-orange-500 hover:text-orange-500",
  outline:
    "bg-transparent text-ink-900 border border-white/40 hover:bg-white/10",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
};

export default function Button({
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
  as = "button",
  ...props
}) {
  const Comp = motion[as] || motion.button;
  const IconComp =
    icon === "play" ? Play : icon === "arrow" ? ArrowRight : null;

  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {IconComp && (
        <span
          className={`inline-flex items-center justify-center rounded-full ${
            variant === "secondary" ? "" : ""
          }`}
        >
          <IconComp size={18} strokeWidth={2.5} />
        </span>
      )}
    </Comp>
  );
}
