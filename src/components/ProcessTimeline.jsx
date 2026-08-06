import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers3, SearchCheck } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";

const packages = [
  {
    title: "Brand Growth Campaign",
    shortDesc:
      "Established businesses ready to grow their audience and dominate search.",
    badge: "Most Popular",
    featured: true,
    serviceCount: 12,
    services: [
      "Web Development (Optional)",
      "Rebranding (Optional)",
      "Brand Content Campaigns",
      "Market Research & Positioning",
      "SEO",
      "GEO",
      "AEO",
      "AIO",
      "AISO",
      "SGE Optimization",
      "Google Business Profile Setup & Optimization",
    ],
    cta: "Get Started",
  },
  {
    title: "Product Development Package",
    shortDesc: "Founders and businesses launching a new product or service.",
    serviceCount: 14,
    services: [
      "Web Development (Optional)",
      "Mobile App Development",
      "Branding",
      "Brand Content Campaigns",
      "Brand Growth Campaigns",
      "Market Research & Positioning",
      "Product Launch Campaigns",
      "SEO",
      "GEO",
      "AEO",
      "AIO",
      "AISO",
      "SGE",
      "Google Business Profile Setup & Optimization",
    ],
    cta: "Launch My Product",
  },
  {
    title: "Brand Visibility Package",
    shortDesc: "Businesses that exist but are not being discovered online.",
    serviceCount: 10,
    services: [
      "Web Development (Optional)",
      "Brand Content Campaigns",
      "Market Research & Positioning",
      "SEO",
      "GEO",
      "AEO",
      "AIO",
      "AISO",
      "SGE",
      "Google Business Profile Setup & Optimization",
    ],
    cta: "Increase My Visibility",
  },
  {
    title: "Branding & Rebranding Package",
    shortDesc: "For businesses building or rebuilding their identity.",
    serviceCount: 10,
    services: [
      "Market Research & Positioning",
      "Brand Strategy",
      "Brand Identity",
      "Brand Assets",
      "Brand Audit",
      "Market Research",
      "Brand Positioning Strategy",
      "Brand Rollout",
      "Brand Identity",
      "Brand Assets",
    ],
    cta: "Build My Brand",
  },
  {
    title: "Stand-Alone Services",
    shortDesc: "Choose individual services tailored to your business needs.",
    serviceCount: 6,
    services: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "Branding",
      "Rebranding",
      "Google Business Profile Setup & Optimization",
    ],
    cta: "Request a Service",
  },
];

export default function ProcessTimeline() {
  const [expanded, setExpanded] = useState(null);

  const togglePackage = (index) => {
    setExpanded((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="process"
      eyebrow="OUR PACKAGES"
      title="Solutions tailored to every stage of your business growth."
      className="bg-ink-50/40"
    >
      <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-ink-600">
        Whether you're launching a new business, growing an established brand,
        or increasing your online visibility, our packages are designed to
        accelerate measurable growth.
      </p>

      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {packages.map((pkg, index) => {
          const isExpanded = expanded === index;
          return (
            <Card
              key={pkg.title}
              delay={index * 0.06}
              className={`p-8 bg-white ${pkg.featured ? "border-orange-500 shadow-[0_20px_50px_-24px_rgba(241,89,42,0.35)]" : "border-ink-200"} ${pkg.featured ? "scale-[1.01]" : ""}`}
              hover
            >
              {pkg.featured && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-xl text-ink-900">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500">
                    {pkg.shortDesc}
                  </p>
                </div>
                <span className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
                  {pkg.serviceCount} services
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-ink-600">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  {pkg.featured ? (
                    <Layers3 size={18} />
                  ) : (
                    <SearchCheck size={18} />
                  )}
                </span>
                <span>Flexible scope for your growth goals</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  variant={pkg.featured ? "primary" : "secondary"}
                  className="px-5 py-2.5"
                  onClick={() =>
                    window.__scrollTo && window.__scrollTo("contact")
                  }
                >
                  {pkg.cta}
                </Button>
                <motion.button
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
                  onClick={() => togglePackage(index)}
                >
                  {isExpanded ? "Hide Details" : "View Details"}
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
                    {pkg.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-sm text-ink-600"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                        <span>{service}</span>
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
