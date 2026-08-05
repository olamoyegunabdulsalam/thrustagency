const socials = [ {
  name: "X",
  link: "https://x.com/thrust909",
}, {
  name: "In",
  link: "https://www.linkedin.com/in/thrust-agency-903307258",
}, {
  name: "IG",
  link: "https://www.instagram.com/thrustagency909",
}];

const columns = [
  {
    title: "Services",
    links: [
      "Web Development",
      "SEO & AI Search",
      "Product Strategy",
      "Growth Optimization",
    ],
  },
  {
    title: "Company",
    links: ["About", "Work", "Process", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Guides", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 pt-16 pb-8">
      <div className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img
                src="assets/thrust-logo.png"
                alt="Thrust Agency logo"
                className="w-10 h-10 object-contain"
              />
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-lg tracking-tight text-ink-900">
                  THRUST
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.2em] text-ink-400 -mt-1">
                  AGENCY
                </span>
              </span>
            </a>
            <p className="text-sm text-ink-500 leading-relaxed max-w-xs mb-5">
              We build digital products, optimize visibility, and drive
              measurable growth for ambitious businesses.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((label) => (
                <a
                  key={label.name}
                  href={label.link}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-ink-200 text-ink-500 hover:border-orange-500 hover:text-orange-500 transition-colors text-xs font-semibold"
                >
                  {label.name}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-sm text-ink-900 mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-500 hover:text-orange-500 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-ink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Thrust Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ink-400 hover:text-orange-500">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-ink-400 hover:text-orange-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
