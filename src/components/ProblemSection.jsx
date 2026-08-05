import { motion } from "framer-motion";
import { Monitor, Users, Gift, Rocket, ArrowRight } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const problems = [
  {
    num: "01",
    icon: Monitor,
    title: "Beautiful Website",
    bold: "But no traffic.",
    desc: "Your site looks good, but nobody sees it.",
  },
  {
    num: "02",
    icon: Users,
    title: "Traffic",
    bold: "But no conversions.",
    desc: "People visit, but very few take action.",
  },
  {
    num: "03",
    icon: Gift,
    title: "Great Product",
    bold: "But hard to discover.",
    desc: "You have something valuable, but the right people can't find it.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Thrust",
    bold: "Builds. Optimizes. Grows.",
    desc: "We build digital growth systems that make you impossible to ignore.",
    highlight: true,
  },
];

export default function ProblemSection() {
  return (
    <Section
      eyebrow="The Challenge"
      title="Most businesses have the pieces, but not the growth."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {problems.map((p, i) => (
          <div key={p.num} className="relative">
            <Card
              delay={i * 0.1}
              className={`p-8 h-full ${
                p.highlight
                  ? "border-orange-500 bg-orange-50/40 border-2"
                  : "bg-ink-50/40"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                    p.highlight
                      ? "bg-orange-500 text-white"
                      : "bg-white border border-ink-100 text-orange-500"
                  }`}
                >
                  <p.icon size={22} />
                </span>
                <span className="text-sm font-bold text-ink-300">{p.num}</span>
              </div>
              <h3 className="font-display font-bold text-ink-900 mb-1">
                {p.title}
              </h3>
              <p
                className={`font-display font-bold mb-2 ${
                  p.highlight ? "text-orange-500" : "text-ink-900"
                }`}
              >
                {p.bold}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
            </Card>
            {i < problems.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 text-orange-400"
              >
                <ArrowRight size={18} />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
