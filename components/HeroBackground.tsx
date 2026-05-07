"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import coordTexture from "@/public/hero/coord2.jpg";
import oakBoard from "@/public/hero/oak2.jpg";
import postOne from "@/public/hero/post1.jpg";
import postThree from "@/public/hero/post3.jpg";
import postTwo from "@/public/hero/post2.jpg";
import sketchSheet from "@/public/hero/oak.jpg";

const collageCards = [
  {
    src: coordTexture,
    alt: "Topographic reference",
    wrapper: "absolute left-[6%] top-[8%] hidden w-[170px] md:block",
    imageClass: "h-auto w-full grayscale contrast-150 brightness-105",
    drift: [0, -7, 0, 7, 0],
    tilt: [-1.6, 1.4, -1.6],
    duration: 20,
  },
  {
    src: sketchSheet,
    alt: "Sketchboard reference",
    wrapper: "absolute right-[6%] top-[14%] hidden w-[150px] lg:block",
    imageClass: "h-auto w-full grayscale contrast-145 brightness-105",
    drift: [0, 5, 0, -5, 0],
    tilt: [1.4, -1.2, 1.4],
    duration: 19,
  },
  {
    src: oakBoard,
    alt: "Technical board reference",
    wrapper: "absolute bottom-[8%] left-[8%] hidden w-[200px] md:block",
    imageClass: "h-auto w-full grayscale contrast-135 brightness-105",
    drift: [0, -6, 0, 6, 0],
    tilt: [-1.8, 1.5, -1.8],
    duration: 22,
  },
  {
    src: postOne,
    alt: "Adventure inspiration post one",
    wrapper: "absolute left-[18%] top-[30%] hidden w-[130px] lg:block",
    imageClass: "h-auto w-full grayscale contrast-135 brightness-105",
    drift: [0, 7, 0, -7, 0],
    tilt: [2, -1.5, 2],
    duration: 18,
  },
  {
    src: postTwo,
    alt: "Adventure inspiration post two",
    wrapper: "absolute right-[18%] top-[40%] hidden w-[135px] xl:block",
    imageClass: "h-auto w-full grayscale contrast-135 brightness-105",
    drift: [0, -5, 0, 5, 0],
    tilt: [-2.2, 1.6, -2.2],
    duration: 21,
  },
  {
    src: postThree,
    alt: "Adventure inspiration post three",
    wrapper: "absolute left-[32%] bottom-[12%] hidden w-[120px] xl:block",
    imageClass: "h-auto w-full grayscale contrast-135 brightness-105",
    drift: [0, 6, 0, -6, 0],
    tilt: [1.8, -1.2, 1.8],
    duration: 23,
  },
] as const;

const SHOW_GRID_OVERLAY = false;

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#ffffff]" />

      <video
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.55] brightness-[1.14]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero/nomaback2.mp4" type="video/mp4" />
      </video>

      {SHOW_GRID_OVERLAY && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.11)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:160px_160px]" />
        </>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(0,0,0,0.12),transparent_36%),radial-gradient(circle_at_84%_78%,rgba(0,0,0,0.1),transparent_34%)]" />

      {collageCards.map((card, idx) => (
        <motion.div
          key={card.alt}
          className={card.wrapper}
          initial={{ opacity: 0, y: 12, rotate: card.tilt[0] }}
          animate={{ opacity: 1, y: [...card.drift], rotate: [...card.tilt] }}
          transition={{
            opacity: { duration: 0.5, delay: idx * 0.08 + 0.1 },
            y: { duration: card.duration, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: card.duration * 1.1, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="border border-black/35 bg-white/95 p-1">
            <Image
              src={card.src}
              alt={card.alt}
              className={card.imageClass}
              priority={idx === 0}
            />
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_56%_at_52%_42%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_44%,transparent_100%)]" />
    </div>
  );
}
