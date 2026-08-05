import { motion } from "framer-motion";

export default function Section({
  children,
  className = "",
  id,
  eyebrow,
  title,
  align = "center",
  ...props
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} {...props}>
      <div className="container-page">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl ${
              align === "center" ? "" : ""
            }`}
          >
            {eyebrow && (
              <span className="inline-block text-xs font-bold tracking-wider text-orange-500 uppercase mb-3">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-ink-900 leading-tight">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
