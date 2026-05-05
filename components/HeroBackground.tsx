"use client";

import { useEffect, useState } from "react";

const ALL_FLAKES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 3.4 + 4) % 96}%`,
  delay: `${(i * 0.65) % 11}s`,
  duration: `${9 + (i * 1.1) % 10}s`,
  size: 1.4 + (i * 0.18) % 2.6,
  opacity: 0.15 + (i * 0.05) % 0.35,
  anim: `snowfall-${i % 5}`,
}));

export function HeroBackground() {
  const [flakeCount, setFlakeCount] = useState(28);
  useEffect(() => {
    setFlakeCount(window.innerWidth < 768 ? 12 : 28);
  }, []);
  const FLAKES = ALL_FLAKES.slice(0, flakeCount);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Sky — light blue fading to pale at bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,#dbeafe,transparent_38%),radial-gradient(circle_at_78%_8%,#ede9fe,transparent_34%),linear-gradient(180deg,#eef6ff_0%,#f5f9ff_30%,#ffffff_55%,#fdf8f0_80%,#faf0e0_100%)]" />

      {/* Sun — soft warm disc in the upper-right sky */}
      <div className="sun-orb absolute hidden md:block" style={{ top: "14%", left: "68%" }} />
      <div className="sun-orb absolute md:hidden" style={{ top: "6%", left: "80%" }} />

      {/* Aurora shimmer */}
      <div className="aurora-band absolute inset-x-0 top-0 h-72" />

      {/* Snowflakes */}
      {FLAKES.map((f) => (
        <div
          key={f.id}
          className="pointer-events-none absolute top-[-6px] rounded-full bg-white"
          style={{
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationName: f.anim,
            animationDelay: f.delay,
            animationDuration: f.duration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* ── Far mountains — tallest layer, pushed high ── */}
      <svg
        className="mountain-far absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mfg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(172,208,244,0.42)" />
            <stop offset="100%" stopColor="rgba(172,208,244,0.05)" />
          </linearGradient>
        </defs>
        <path
          d="M0,500 L130,270 L195,315 L285,190 L360,248 L440,140 L520,206 L600,105 L682,168 L762,82 L840,148 L920,90 L1000,158 L1080,98 L1160,162 L1240,106 L1320,160 L1400,112 L1440,136 L1440,600 L0,600 Z"
          fill="url(#mfg)"
        />
        {/* Snow caps */}
        <path d="M600,105 L632,150 L568,150 Z" fill="rgba(255,255,255,0.62)" />
        <path d="M762,82 L796,130 L728,130 Z" fill="rgba(255,255,255,0.68)" />
        <path d="M920,90 L952,136 L888,136 Z" fill="rgba(255,255,255,0.62)" />
        <path d="M1080,98 L1110,140 L1050,140 Z" fill="rgba(255,255,255,0.58)" />
        <path d="M440,140 L466,176 L414,176 Z" fill="rgba(255,255,255,0.52)" />
        {/* Glacier */}
        <path d="M762,82 L782,118 L777,130 L764,124 L750,130 L744,118 Z" fill="rgba(200,230,255,0.34)" />
      </svg>

      {/* ── Mid mountains ── */}
      <svg
        className="mountain-mid absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mmg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(112,170,226,0.5)" />
            <stop offset="100%" stopColor="rgba(112,170,226,0.08)" />
          </linearGradient>
        </defs>
        <path
          d="M0,480 L90,305 L162,355 L242,235 L320,298 L400,180 L478,252 L558,166 L638,238 L718,158 L798,226 L878,170 L958,234 L1038,178 L1118,236 L1198,180 L1278,234 L1358,182 L1440,218 L1440,480 L0,480 Z"
          fill="url(#mmg)"
        />
        {/* Snow caps */}
        <path d="M558,166 L588,208 L528,208 Z" fill="rgba(255,255,255,0.74)" />
        <path d="M718,158 L750,202 L686,202 Z" fill="rgba(255,255,255,0.78)" />
        <path d="M878,170 L908,213 L848,213 Z" fill="rgba(255,255,255,0.72)" />
        <path d="M400,180 L428,218 L372,218 Z" fill="rgba(255,255,255,0.66)" />
        <path d="M1038,178 L1066,218 L1010,218 Z" fill="rgba(255,255,255,0.66)" />
        {/* Glacier */}
        <path d="M718,158 L738,193 L733,205 L721,200 L708,205 L702,193 Z" fill="rgba(195,228,255,0.38)" />
      </svg>

      {/* ── Desert layer: dunes + pyramids + camels ── */}
      <svg
        className="dune-far absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dfg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(228,192,105,0.5)" />
            <stop offset="100%" stopColor="rgba(228,192,105,0.08)" />
          </linearGradient>
        </defs>

        {/* Dune silhouette */}
        <path
          d="M0,400 C80,368 160,390 255,352 C350,314 415,344 510,324 C605,304 670,336 765,316 C860,296 925,324 1020,308 C1115,292 1180,316 1275,300 C1345,288 1395,305 1440,296 L1440,400 Z"
          fill="url(#dfg)"
        />

        {/* Dune ridge shading */}
        <path d="M80,382 C160,358 240,376 330,348 C400,328 460,344 540,330" stroke="rgba(195,158,72,0.28)" strokeWidth="1.5" fill="none" />
        <path d="M780,322 C860,306 940,320 1030,308 C1110,296 1175,310 1260,300" stroke="rgba(195,158,72,0.25)" strokeWidth="1.5" fill="none" />

        {/* Pyramids — elevated above dune base */}
        <polygon points="285,400 358,292 431,400" fill="rgba(210,172,78,0.5)" />
        <polygon points="442,400 502,320 562,400" fill="rgba(210,172,78,0.42)" />
        <polygon points="572,400 620,348 668,400" fill="rgba(210,172,78,0.35)" />
        {/* Pyramid shadow faces */}
        <polygon points="358,292 431,400 394,400" fill="rgba(165,128,48,0.24)" />
        <polygon points="502,320 562,400 532,400" fill="rgba(165,128,48,0.2)" />
        <polygon points="620,348 668,400 644,400" fill="rgba(165,128,48,0.16)" />

        {/* Cacti */}
        <g stroke="rgba(155,192,115,0.52)" strokeWidth="5" strokeLinecap="round" fill="none">
          <line x1="150" y1="400" x2="150" y2="360" />
          <line x1="150" y1="372" x2="137" y2="372" />
          <line x1="137" y1="372" x2="137" y2="363" />
          <line x1="150" y1="368" x2="163" y2="368" />
          <line x1="163" y1="368" x2="163" y2="360" />

          <line x1="1180" y1="400" x2="1180" y2="362" />
          <line x1="1180" y1="374" x2="1168" y2="374" />
          <line x1="1168" y1="374" x2="1168" y2="366" />
          <line x1="1180" y1="370" x2="1192" y2="370" />
          <line x1="1192" y1="370" x2="1192" y2="362" />

          <line x1="1360" y1="400" x2="1360" y2="370" />
          <line x1="1360" y1="380" x2="1350" y2="380" />
          <line x1="1350" y1="380" x2="1350" y2="373" />
        </g>
      </svg>

      {/* ── Near dune — foreground strip ── */}
      <svg
        className="dune-near absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dng" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(212,174,82,0.52)" />
            <stop offset="100%" stopColor="rgba(212,174,82,0.1)" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 C90,166 180,188 280,158 C380,128 450,160 560,140 C670,120 740,153 850,136 C960,119 1030,148 1140,133 C1230,120 1310,144 1440,130 L1440,200 Z"
          fill="url(#dng)"
        />
        {/* Wind ripples */}
        <path d="M40,183 C110,170 190,180 270,166" stroke="rgba(182,145,58,0.3)" strokeWidth="1.2" fill="none" />
        <path d="M500,153 C580,142 660,150 745,140"  stroke="rgba(182,145,58,0.26)" strokeWidth="1.2" fill="none" />
        <path d="M980,146 C1060,136 1145,144 1230,134" stroke="rgba(182,145,58,0.26)" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Ground fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5e8c8]/45 to-transparent" />

      {/* Center content overlay — keeps text readable over mountains */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.3)_55%,transparent_100%)]" />
    </div>
  );
}
