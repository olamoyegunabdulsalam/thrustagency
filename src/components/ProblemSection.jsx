import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Layers3, Sparkles } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";

const values = [
  {
    icon: Sparkles,
    title: "Growth Focused",
    desc: "Every solution we build is designed to help businesses grow faster and reach the right audience.",
  },
  {
    icon: BrainCircuit,
    title: "Strategic Thinking",
    desc: "We combine research, planning, and creativity to solve business challenges.",
  },
  {
    icon: Layers3,
    title: "Modern Development",
    desc: "From websites to software platforms, we create scalable digital experiences.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    desc: "Everything we build is focused on delivering measurable business outcomes.",
  },
];

export default function ProblemSection() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT THRUST"
      title="Accelerating business growth through strategy, design, and technology."
      className="bg-white"
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
        <div className="max-w-2xl text-left">
          <p className="text-lg leading-8 text-ink-600">
            Thrust Agency is a development agency dedicated to helping
            businesses grow, strengthen their digital presence, and connect with
            the right audience. We combine development, design, strategy, and
            digital growth solutions to build products and experiences that
            deliver measurable business results.
          </p>
          <p className="mt-6 text-lg leading-8 text-ink-600">
            Whether you're launching a new venture, scaling an existing
            business, or improving your online visibility, we work as your
            growth partner by building purposeful digital solutions that drive
            sustainable growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              onClick={() => window.__scrollTo && window.__scrollTo("contact")}
            >
              Start Your Project
            </Button>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 text-lg font-semibold leading-8 text-ink-900"
          >
            “We don't just build digital products, we build momentum for
            businesses ready to grow.”
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((value, index) => (
            <Card
              key={value.title}
              delay={index * 0.06}
              className="p-6 bg-ink-50/40"
              hover
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-ink-100 text-orange-500 mb-5">
                <value.icon size={20} />
              </span>
              <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm leading-7 text-ink-500">{value.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
