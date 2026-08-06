import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Palette, SearchCheck, ArrowRight } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const services = [
  {
    icon: Code2,
    title: "Product Development",
    desc: "Build modern digital products designed for performance, scalability, and business growth.",
    list: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "Conversion Optimization",
      "UX Optimization",
    ],
  },
  {
    icon: Palette,
    title: "Branding Campaigns",
    desc: "Create memorable brands that connect with the right audience and drive long-term growth.",
    list: [
      "Branding",
      "Rebranding",
      "Brand Content Campaigns",
      "Brand Growth Campaigns",
      "Market Research & Positioning",
      "Product Launch Campaigns",
    ],
  },
  {
    icon: SearchCheck,
    title: "SEO, AI Search & Visibility Optimization",
    desc: "Increase your visibility across Google and next-generation AI-powered search platforms.",
    list: [
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "AI Optimization (AIO)",
      "AI Search Optimization (AISO)",
      "Search Generative Experience (SGE) Optimization",
      "Google Business Profile (GMB) Setup & Optimization",
    ],
  },
];

export default function ServicesEcosystem() {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="services"
      className="bg-ink-50/50"
      eyebrow="OUR SERVICES"
      title="Helping businesses build, grow, and get discovered."
    >
      <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-ink-600">
        We combine development, branding, and AI-powered growth strategies to
        help businesses launch, scale, and stay visible in today's digital
        landscape.
      </p>
      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => {
          const isExpanded = expanded === index;
          return (
            <Card
              key={service.title}
              delay={index * 0.08}
              className={`group p-8 bg-white ${isExpanded ? "border-orange-500" : "border-ink-200"}`}
              hover
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <service.icon size={24} />
              </span>
              <h3 className="font-display font-semibold text-2xl text-ink-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-ink-500">{service.desc}</p>

              <div className="mt-6">
                <motion.button
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
                  onClick={() => toggleCard(index)}
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-6 space-y-2 overflow-hidden"
                  >
                    {service.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-ink-600"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
