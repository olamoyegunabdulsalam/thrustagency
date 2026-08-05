import { motion } from "framer-motion";
import Button from "./ui/Button";
import DashboardMockup from "./DashboardMockup";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      {/* ambient decorative arc */}
      <div className="pointer-events-none absolute -top-20 right-0 w-[600px] h-[600px] rounded-full border border-orange-100 opacity-60 hidden lg:block" />
      <div className="pointer-events-none absolute top-40 right-40 w-2 h-2 rounded-full bg-orange-300 hidden lg:block" />

      <div className="container-page relative grid lg:grid-cols-2 gap-20 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-orange-500 uppercase mb-6"
          >
            Development <Dot /> Strategy <Dot /> Growth
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-tight text-ink-900"
          >
            Build products.
            <br />
            Get found.
            <br />
            <span className="text-orange-500">Grow faster.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-ink-600 text-base max-w-md leading-relaxed"
          >
            Thrust is a development agency that builds digital products,
            optimizes visibility, and drives measurable growth for ambitious
            businesses.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              onClick={() => window.__scrollTo && window.__scrollTo("contact")}
            >
              Let's Build Growth
            </Button>
            <Button
              variant="secondary"
              icon="play"
              onClick={() => window.__scrollTo && window.__scrollTo("work")}
            >
              See Our Work
            </Button>
          </motion.div>
        </motion.div>

        <div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-orange-300" />;
}
