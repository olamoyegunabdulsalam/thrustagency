import { Quote, Star } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const testimonials = [
  {
    quote:
      "Working with Thrust Agency gave us much more than marketing support. They helped us refine our business structure, strengthen our service positioning, and establish a clear digital growth strategy. Their research-driven approach laid a solid foundation for our long-term expansion.",
    name: "—DVG Consults",
  },
  {
    quote:
      "Thrust understood our vision from the very beginning. They transformed our ideas into a cohesive brand identity that reflects confidence, elegance, and intentional design. The outcome exceeded our expectations.",
    name: "—TIANORA",
  },
  {
    quote:
      "Thrust helped bring clarity to my personal brand. They created a direction that perfectly balances technical expertise with creativity, making my brand feel authentic, memorable, and future-ready.",
    name: "—Jay's Code",
  },
    {
    quote:
      "The team took the time to understand our mission before proposing solutions. Their strategic thinking helped us shape a framework that communicates our vision clearly while positioning the brand for long-term growth.",
    name: "—The Lawrence Method",
  },
];

export default function Testimonials() {
  return (
    <Section
      className="bg-ink-50/50"
      eyebrow="Testimonials"
      title="Businesses that grew with us."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={t.name} delay={i * 0.1} className="p-7 bg-white" hover>
            <Quote className="text-orange-200 mb-4" size={28} fill="currentColor" strokeWidth={0} />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={13} className="text-orange-400" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-ink-600 leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-display font-bold text-sm text-ink-900">{t.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
