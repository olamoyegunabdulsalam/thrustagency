import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    id: "google",
    name: "Google",
    tip: "Search Engine Optimization",
    img: "/assets/Ai-icons/Google-icon.png",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    tip: "AI Search Optimization",
    img: "/assets/Ai-icons/Chatgpt-icon.png",
  },
  {
    id: "gemini",
    name: "Gemini",
    tip: "Generative Search Visibility",
    img: "/assets/Ai-icons/Gemini-icon.png",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tip: "AI Discovery",
    img: "/assets/Ai-icons/Perplexity-icon.png",
  },
  {
    id: "claude",
    name: "Claude",
    tip: "Answer Engine Readiness",
    img: "/assets/Ai-icons/Claude-icon.png",
  },
  {
    id: "copilot",
    name: "Copilot",
    tip: "Enterprise AI Search",
    img: "/assets/Ai-icons/Copilot-icon.png",
  },
];

export default function AISearchSection() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const nodeRefs = useRef({});
  const svgRef = useRef(null);
  const [paths, setPaths] = useState({});
  const [hovered, setHovered] = useState(null);

  // compute positions and build curved paths from center to each node
  useEffect(() => {
    function update() {
      const container = containerRef.current;
      const center = centerRef.current;
      const svg = svgRef.current;
      if (!container || !center || !svg) return;

      const rect = container.getBoundingClientRect();
      const cx = center.offsetLeft + center.offsetWidth / 2;
      const cy = center.offsetTop + center.offsetHeight / 2;

      const newPaths = {};
      platforms.forEach((p) => {
        const node = nodeRefs.current[p.id];
        if (!node) return;
        const nx = node.offsetLeft + node.offsetWidth / 2;
        const ny = node.offsetTop + node.offsetHeight / 2;

        // control point for a smooth curve: midpoint plus perpendicular offset
        const mx = (cx + nx) / 2;
        const my = (cy + ny) / 2;
        const dx = nx - cx;
        const dy = ny - cy;
        const norm = Math.sqrt(dx * dx + dy * dy) || 1;
        const ox = (-dy / norm) * 40; // perpendicular offset
        const oy = (dx / norm) * 40;

        const cx1 = mx + ox;
        const cy1 = my + oy;

        const d = `M ${cx} ${cy} Q ${cx1} ${cy1} ${nx} ${ny}`;
        newPaths[p.id] = d;
      });

      setPaths(newPaths);

      // animate strokes after DOM update
      setTimeout(() => {
        const svgEl = svgRef.current;
        if (!svgEl) return;
        platforms.forEach((p, i) => {
          const pathEl = svgEl.querySelector(`#path-${p.id}`);
          if (!pathEl) return;
          try {
            const len = pathEl.getTotalLength();
            pathEl.style.strokeDasharray = len;
            pathEl.style.strokeDashoffset = len;
            pathEl.style.transition = `stroke-dashoffset 700ms ease ${200 + i * 120}ms, opacity 300ms ease ${200 + i * 120}ms`;
            // trigger
            setTimeout(() => (pathEl.style.strokeDashoffset = "0"), 50);
          } catch (e) {}
        });
      }, 60);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white ai-visibility-section">
      <div className="container-page">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-wider text-[#FF6B35] uppercase mb-3">
              AI SEARCH VISIBILITY
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 leading-tight mb-4">
              Be found where customers search today and where they'll search
              tomorrow.
            </h2>
            <p className="text-ink-600 max-w-2xl mx-auto">
              We optimize your business for traditional search engines and the
              next generation of AI-powered search platforms, helping your brand
              become more discoverable, trustworthy, and visible.
            </p>
          </div>

          <div className="ai-visual-wrap" ref={containerRef}>
            <svg className="ai-visual-svg" ref={svgRef} aria-hidden>
              {platforms.map((p) => (
                <path
                  key={p.id}
                  id={`path-${p.id}`}
                  d={paths[p.id] || ""}
                  className={`ai-conn ${hovered === p.id ? "ai-conn--active" : ""}`}
                />
              ))}
            </svg>

            <div className="ai-center" ref={centerRef}>
              <div className="ai-center-card">
                <div className="ai-center-icon" aria-hidden>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="#FF6B35" />
                    <path
                      d="M8 12h8"
                      stroke="#fff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="ai-center-label">YOUR BUSINESS</div>
              </div>
            </div>

            {platforms.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => (nodeRefs.current[p.id] = el)}
                className={`ai-node ai-node--${p.id}`}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <div className="ai-node-card">
                  <div className="ai-node-logo" aria-hidden>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`ai-node-label`}>{p.name}</div>
                <div
                  className={`ai-node-tip ${hovered === p.id ? "ai-node-tip--visible" : ""}`}
                >
                  {p.tip}
                </div>
              </div>
            ))}
          </div>

          {/* feature cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon="1"
              title="SEO"
              desc="Improve your visibility across traditional search engines."
            />
            <Feature
              icon="2"
              title="GEO"
              desc="Optimize your content for generative AI responses."
            />
            <Feature
              icon="3"
              title="AEO"
              desc="Structure information for answer engines."
            />
            <Feature
              icon="4"
              title="AIO"
              desc="Increase discoverability across AI assistants."
            />
            <Feature
              icon="5"
              title="AISO"
              desc="Prepare your brand for AI-powered search experiences."
            />
            <Feature
              icon="6"
              title="Google Business Profile"
              desc="Improve local search visibility and trust."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl bg-ink-50 p-6 border border-ink-100">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-ink-800 font-bold shadow-sm">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-ink-900">{title}</h4>
          <p className="text-sm text-ink-600 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}
