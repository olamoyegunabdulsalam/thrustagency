import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "./ui/Section";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We partner with ambitious founders and teams fintechs, ecommerce brands, healthcare providers and SaaS companies who want a website, product and growth strategy that work together instead of in silos.",
  },
  {
    q: "How is Thrust different from a typical web agency?",
    a: "Traditional agencies hand over a website and move on. We build growth systems: strategy, design, development, SEO and AI search optimization, then stay on to optimize, scale and grow with you.",
  },
  {
    q: "Do you handle AI search optimization (GEO/AEO)?",
    a: "Yes. Alongside traditional Google SEO, we optimize your brand to be visible across AI search and answer engines like ChatGPT, Gemini, Perplexity and Claude.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most builds move from discovery to launch in 4–8 weeks, depending on scope. Optimization and growth work continues on an ongoing basis after launch.",
  },
  {
    q: "How do we get started?",
    a: "Tell us about your project using the form below and we'll get back to you within 24 hours to schedule a discovery call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-ink-200 overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-semibold text-ink-900 text-sm sm:text-base">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-orange-50 text-orange-500"
                >
                  <Plus size={14} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-ink-500 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
