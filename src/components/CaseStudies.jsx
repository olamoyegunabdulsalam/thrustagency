import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const projects = [
  {
    title: "DVG Consults",
    industry: "Recruitment • Study Abroad • Consulting & Training",
    image:
      "assets/DVG-Consults.jpg",
    description:
      "Helping DVG Consults build a stronger business foundation through business development, market research, digital growth strategy, SEO, and operational planning to support sustainable growth and international expansion.",
    services: [
      "Business Development",
      "Market Research",
      "SEO",
      "Content Strategy",
    ],
    overview:
      "DVG Consults needed a premium digital growth platform that communicated trust, support, and international ambition. We helped them align market research, growth strategy, and operations for measurable growth.",
    challenge:
      "The brand lacked a cohesive digital foundation and clear positioning for international markets, which limited candidate acquisition and client trust.",
    approach:
      "We designed and launched a polished service experience with strategic messaging, SEO-ready content, and a conversion-focused digital product.",
    outcome:
      "A stronger business foundation with improved online discovery, increased leads, and a scalable content strategy for future expansion.",
  },
  {
    title: "TIANORA",
    industry: "Fashion Brand",
    image:
      "assets/Tianora.jpg",
    description:
      "A premium fashion brand built around intentional form, blending architectural structure with organic movement to create a timeless visual language for femininity, confidence, and elegance.",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Creative Direction",
      "Visual Systems",
    ],
    overview:
      "TIANORA needed a refined digital expression that felt luxurious, modern, and wearable. We created a visual system that balanced structure with softness.",
    challenge:
      "The brand’s previous digital presence lacked consistency and failed to reflect the premium craftsmanship of its collections.",
    approach:
      "We developed a high-end brand experience with elegant typography, polished imagery, and a seamless product storytelling flow.",
    outcome:
      "A premium positioning that elevated the brand and created a stronger emotional connection with customers.",
  },
  {
    title: "Jay's Code",
    industry: "Personal Brand",
    image:
      "assets/Jay's-Code.jpg",
    description:
      "A personal brand positioned at the intersection of software engineering, product design, creativity, and intentional living, transforming technical expertise into a memorable digital identity.",
    services: [
      "Brand Positioning",
      "Creative Strategy",
      "Personal Branding",
      "Visual Identity",
    ],
    overview:
      "Jay’s brand needed clarity and distinction in a crowded market. We crafted a bold digital identity that reflected both technical rigor and creative direction.",
    challenge:
      "The previous identity felt generic and did not communicate the depth of Jay's multidisciplinary expertise.",
    approach:
      "We built a standout personal brand with refined messaging, structural visuals, and a premium digital showcase.",
    outcome:
      "A memorable digital platform that clearly positions Jay as a creative technologist and trusted product partner.",
  },
  {
    title: "The Lawrence Method",
    industry: "Education • Personal Development",
    image:
      "assets/The-Lawrence-Method.jpg",
    description:
      "A strategic personal development framework designed to help individuals grow their brands, skills, businesses, and careers through structured guidance and practical digital strategies.",
    services: [
      "Brand Strategy",
      "Content Framework",
      "Growth Strategy",
      "Positioning",
    ],
    overview:
      "The Lawrence Method needed a digital presence that reflected its strategic clarity and high-value coaching.",
    challenge:
      "The previous experience lacked a sense of premium structure and failed to clearly communicate the methodology’s value.",
    approach:
      "We created a polished digital platform with clear messaging, signature visuals, and a premium, trust-building layout.",
    outcome:
      "A refined brand experience that better supports lead generation and positions the framework as high-impact and strategic.",
  },
];

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">
              SELECTED WORK
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-ink-900 mb-4">
              Helping ambitious brands become impossible to ignore.
            </h2>
            <p className="text-base text-ink-600 leading-relaxed">
              Every engagement combines strategy, branding, development, and
              growth to create measurable business impact.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              hover={false}
              delay={index * 0.05}
              className="group overflow-hidden rounded-[24px] border border-ink-100 bg-white shadow-[0_22px_55px_-35px_rgba(20,23,31,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_28px_65px_-35px_rgba(241,89,42,0.18)]"
            >
              <div className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 transition-transform duration-300 group-hover:scale-[1.03]">
                  <img
                    src={project.image}
                    alt={`${project.title} project thumbnail`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,89,42,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]" />
                </div>
              </div>
              <div className="p-6 md:p-7">
                <p className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700 mb-4">
                  {project.industry}
                </p>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600 mb-6 min-h-[4.5rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-transform duration-300"
                >
                  <span className="relative after:absolute after:-bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    View Story
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-auto px-4 py-4 sm:px-6"
          >
            <div
              className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[calc(100vh-56px)] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-ink-100 bg-white shadow-[0_40px_80px_-30px_rgba(20,23,31,0.25)]"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-700 transition-colors hover:bg-ink-100"
              >
                <X size={20} />
              </button>
              <div className="relative h-64 overflow-hidden bg-slate-100">
                                  <img
                    src={activeProject.image}
                    alt={`${activeProject.title} project thumbnail`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,89,42,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 sm:px-8 sm:pb-8">
                  <div className="mb-6 max-w-2xl">
                    <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">
                      {activeProject.industry}
                    </p>
                    <h3 className="font-display text-3xl font-bold text-ink-900 mb-4">
                      {activeProject.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-600">
                      {activeProject.overview}
                    </p>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
                    <div className="space-y-6">
                      <section>
                        <p className="text-sm font-semibold text-ink-900 uppercase tracking-[0.16em] mb-3">
                          Challenge
                        </p>
                        <p className="text-sm leading-relaxed text-ink-600">
                          {activeProject.challenge}
                        </p>
                      </section>
                      <section>
                        <p className="text-sm font-semibold text-ink-900 uppercase tracking-[0.16em] mb-3">
                          Our Approach
                        </p>
                        <p className="text-sm leading-relaxed text-ink-600">
                          {activeProject.approach}
                        </p>
                      </section>
                      <section>
                        <p className="text-sm font-semibold text-ink-900 uppercase tracking-[0.16em] mb-3">
                          Outcome
                        </p>
                        <p className="text-sm leading-relaxed text-ink-600">
                          {activeProject.outcome}
                        </p>
                      </section>
                    </div>
                    <aside className="rounded-[20px] border border-ink-100 bg-ink-50 p-5">
                      <p className="text-sm font-semibold text-ink-900 mb-4">
                        Services delivered
                      </p>
                      <div className="flex flex-col gap-3">
                        {activeProject.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-700"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


