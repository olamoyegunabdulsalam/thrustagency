import { Code2, SearchCheck, LineChart, Palette } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const services = [
  {
    icon: Code2,
    title: "Product Development",
    desc: "High-performance websites, apps and platforms built to convert.",
  },
  {
    icon: SearchCheck,
    title: "SEO & AI Search",
    desc: "Visibility across Google and AI answer engines like ChatGPT and Gemini.",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    desc: "Distinct visual identity and UX that builds trust at first glance.",
  },
  {
    icon: LineChart,
    title: "Growth & Optimization",
    desc: "Ongoing CRO, analytics and iteration to compound your results.",
  },
];

export default function ServicesEcosystem() {
  return (
    <Section
      id="services"
      className="bg-ink-50/50"
      eyebrow="What We Do"
      title="One ecosystem. Every part of your growth."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <Card key={s.title} delay={i * 0.08} className="p-8 bg-white" hover>
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-6">
              <s.icon size={22} />
            </span>
            <h3 className="font-display font-bold text-ink-900 mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
            <div className="mt-6">
              <button
                className="text-sm font-semibold text-orange-500"
                onClick={() =>
                  window.__scrollTo && window.__scrollTo("contact", s.title)
                }
              >
                Learn More
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
