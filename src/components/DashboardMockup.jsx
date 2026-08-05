import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search as SearchIcon,
} from "lucide-react";
import useCountUp from "../hooks/useCountUp";

const stats = [
  {
    label: "Total Visitors",
    value: 24.6,
    decimals: 1,
    suffix: "K",
    change: "+18.3%",
  },
  {
    label: "Leads Generated",
    value: 1429,
    decimals: 0,
    suffix: "",
    change: "+16.2%",
  },
  {
    label: "Conversions",
    value: 892,
    decimals: 0,
    suffix: "",
    change: "+15.2%",
  },
  {
    label: "Revenue",
    value: 24.6,
    decimals: 1,
    prefix: "\u20A6",
    suffix: "M",
    change: "+15.7%",
  },
];

const channels = [
  { name: "Google Search", value: 42, color: "#F1592A" },
  { name: "AI Search", value: 20, color: "#14171F" },
  { name: "Direct", value: 18, color: "#F6B99A" },
  { name: "Social Media", value: 14, color: "#E7E8ED" },
];

// Simple smooth line-chart path drawn from a fixed dataset
const chartPoints = [12, 22, 16, 30, 24, 40, 34, 52, 44, 60, 54, 70];

function buildPath(points, w, h) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const stepX = w / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = h - ((p - min) / (max - min)) * h;
    return [x, y];
  });
  let d = `M ${coords[0][0]},${coords[0][1]}`;
  for (let i = 1; i < coords.length; i++) {
    const [x0, y0] = coords[i - 1];
    const [x1, y1] = coords[i];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return { d, coords };
}

function StatCard({ stat, i }) {
  const [ref, display] = useCountUp(stat.value, {
    decimals: stat.decimals,
    prefix: stat.prefix || "",
    suffix: stat.suffix || "",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
      className="rounded-xl border border-ink-100 bg-white p-3"
    >
      <p className="text-[10px] text-ink-400 font-medium mb-1.5">
        {stat.label}
      </p>
      <p className="font-display text-base font-bold text-ink-900">{display}</p>
      <p className="text-[10px] font-semibold text-emerald-500 mt-1">
        {stat.change}
      </p>
    </motion.div>
  );
}

export default function DashboardMockup() {
  const w = 260;
  const h = 70;
  const { d, coords } = buildPath(chartPoints, w, h);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[560px] mx-auto"
    >
      {/* Main dashboard card */}
      <div className="rounded-2xl border border-ink-100 bg-white shadow-[0_30px_60px_-25px_rgba(20,23,31,0.25)] overflow-hidden">
        {/* window bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden sm:flex flex-col items-center gap-4 w-12 py-5 border-r border-ink-100">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500 text-white">
              <LayoutDashboard size={14} />
            </span>
            <Users size={16} className="text-ink-300" />
            <BarChart3 size={16} className="text-ink-300" />
            <Bell size={16} className="text-ink-300" />
            <Settings size={16} className="text-ink-300 mt-auto" />
          </div>

          {/* main content */}
          <div className="flex-1 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-display text-sm font-bold text-ink-900">
                  Welcome back, David 👋
                </p>
                <p className="text-[11px] text-ink-400">
                  Here's what's happening with your business today.
                </p>
              </div>
              <span className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-ink-50 border border-ink-100">
                <SearchIcon size={12} className="text-ink-400" />
              </span>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {stats.map((s, i) => (
                <StatCard stat={s} i={i} key={s.label} />
              ))}
            </div>

            {/* chart + channels */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-xl border border-ink-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-semibold text-ink-900">
                    Growth Overview
                  </p>
                  <span className="text-[9px] text-ink-400 flex items-center gap-0.5">
                    This Month <ChevronDownIcon />
                  </span>
                </div>
                <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#F1592A"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#F1592A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`${d} L ${w},${h} L 0,${h} Z`}
                    fill="url(#areaFill)"
                    stroke="none"
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="#F1592A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                  />
                  {coords.map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={i === coords.length - 1 ? 3 : 0}
                      fill="#F1592A"
                    />
                  ))}
                </svg>
              </div>

              <div className="rounded-xl border border-ink-100 p-4">
                <p className="text-[11px] font-semibold text-ink-900 mb-2">
                  Top Channels
                </p>
                <div className="flex flex-col gap-1.5">
                  {channels.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1 text-[9px] text-ink-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: c.color }}
                        />
                        {c.name}
                      </span>
                      <span className="text-[9px] font-semibold text-ink-900">
                        {c.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating phone widget */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-10 -right-4 sm:-right-10 w-40 sm:w-48 rounded-2xl border border-ink-100 bg-white shadow-[0_25px_50px_-20px_rgba(20,23,31,0.3)] p-3.5 max-sm:right-2"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-semibold text-ink-400 tracking-wide">
            9:41
          </span>
          <span className="text-[8px] text-ink-300">●●●</span>
        </div>
        <p className="text-[10px] font-semibold text-ink-900 mb-2">
          Performance
        </p>
        <div className="flex items-center justify-center py-1">
          <Donut
            value={892}
            percent={68}
            label="Total Conversions"
            change="+25.1%"
          />
        </div>
        <div className="mt-3 pt-3 border-t border-ink-100">
          <p className="text-[8px] text-ink-400 mb-1">Top Performing Page</p>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-ink-700">/services/seo</span>
            <span className="text-[9px] font-semibold text-emerald-500">
              712
            </span>
          </div>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[9px] text-ink-400">312</span>
            <span className="text-[8px] font-semibold text-emerald-500">
              +18.2%
            </span>
          </div>
        </div>
        <div className="mt-3 rounded-full bg-ink-900 text-white text-[9px] font-semibold text-center py-1.5">
          View Full Report
        </div>
      </motion.div>
    </motion.div>
  );
}

function Donut({ percent, value, label, change }) {
  const size = 76;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#F1F2F5"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#F1592A"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (percent / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs font-bold text-ink-900">{value}</span>
      </div>
      <div className="absolute -bottom-4 inset-x-0 text-center">
        <span className="text-[8px] text-emerald-500 font-semibold">
          {change}
        </span>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
