import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import Section from "./ui/Section";

const traditional = [
  "Build websites",
  "Focus on design & deliverables",
  "Google SEO only",
  "Work in silos",
  "Hand over and move on",
];

const thrust = [
  "Build growth systems",
  "Focus on outcomes & business impact",
  "Google + AI Search (SEO, GEO, AEO, AIO, AISO, SGE)",
  "Strategy, design, development & growth together",
  "Optimize, scale and grow with you",
];

export default function WhyThrust() {
  return (
    <Section
      eyebrow="Why Choose Thrust"
      title="More than an agency. Your growth partner."
    >
      <div className="relative grid md:grid-cols-2 gap-0 rounded-2xl border border-ink-200 overflow-hidden max-w-4xl mx-auto">
        {/* Traditional agencies */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 bg-white"
        >
          <h3 className="text-center font-display font-bold text-ink-900 mb-6">
            Traditional Agencies
          </h3>
          <ul className="flex flex-col gap-4">
            {traditional.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-sm text-ink-500"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-400 shrink-0 mt-0.5">
                  <X size={12} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Thrust */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 md:p-10 bg-orange-50/40"
        >
          <h3 className="text-center font-display font-bold text-ink-900 mb-6">
            Thrust Agency
          </h3>
          <ul className="flex flex-col gap-4">
            {thrust.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-sm text-ink-800 font-medium"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* VS badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-xs font-extrabold shadow-lg border-4 border-white z-10"
        >
          VS
        </motion.span>
      </div>
    </Section>
  );
}
