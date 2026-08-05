import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  as = "div",
  delay = 0,
  ...props
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, boxShadow: "0 20px 40px -20px rgba(20,23,31,0.18)" } : undefined}
      className={`rounded-2xl border border-ink-200 bg-white transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
