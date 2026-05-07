"use client";

import Image from "next/image";
import coordTexture from "@/coord2.jpg";
import mountainArt from "@/moun.jpg";
import oakBoard from "@/oak2.jpg";
import sketchSheet from "@/oak.jpg";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#ffffff]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.11)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:160px_160px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(0,0,0,0.12),transparent_36%),radial-gradient(circle_at_84%_78%,rgba(0,0,0,0.1),transparent_34%)]" />

      <div className="absolute left-[6%] top-[8%] hidden w-[170px] border border-black/35 bg-white/95 p-1 md:block">
        <Image
          src={coordTexture}
          alt="Topographic reference"
          className="h-auto w-full grayscale contrast-150 brightness-105"
          priority
        />
      </div>

      <div className="absolute right-[6%] top-[14%] hidden w-[150px] border border-black/35 bg-white/95 p-1 lg:block">
        <Image
          src={sketchSheet}
          alt="Sketchboard reference"
          className="h-auto w-full grayscale contrast-145 brightness-105"
        />
      </div>

      <div className="absolute bottom-[8%] left-[8%] hidden w-[200px] border border-black/35 bg-white/95 p-1 md:block">
        <Image
          src={oakBoard}
          alt="Technical board reference"
          className="h-auto w-full grayscale contrast-135 brightness-105"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[58vw] max-w-[520px] opacity-80 grayscale">
        <Image
          src={mountainArt}
          alt="Mountain silhouette"
          className="h-auto w-full mix-blend-multiply"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_56%_at_52%_42%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_44%,transparent_100%)]" />
    </div>
  );
}
