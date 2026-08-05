import {
  Search,
  Target,
  Code2,
  Rocket,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    desc: "We understand your business, audience and goals.",
  },
  {
    num: "02",
    icon: Target,
    title: "Position",
    desc: "We research, analyze and position your brand for growth.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build",
    desc: "We design and develop high-performance digital products.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    desc: "We launch with precision and prepare for scale.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Optimize",
    desc: "We optimize for visibility, UX and conversions.",
  },
  {
    num: "06",
    icon: ArrowUpRight,
    title: "Scale",
    desc: "We grow, refine and scale what works.",
  },
];

export default function ProcessTimeline() {
  return (
    <Section
      id="process"
      eyebrow="Our Process"
      title="A proven process that drives real growth."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {steps.map((s, i) => (
          <Card key={s.num} delay={i * 0.08} className="p-6" hover>
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-orange-50 text-orange-500 mb-8">
              <s.icon size={20} />
            </span>
            <span className="block text-xs font-bold text-ink-300 mb-2">
              {s.num}
            </span>
            <h3 className="font-display font-bold text-ink-900 mb-1.5">
              {s.title}
            </h3>
            <p className="text-xs text-ink-500 leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
