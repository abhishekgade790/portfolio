"use client";
import { Box, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen w-full bg-neutral-900 py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 mt-2 text-lg">A glimpse into what I've built.</p>
        </div>
        <GlowingEffectGrid />
      </div>
    </div>
  );
}

function GlowingEffectGrid() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      <GridItem
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Cinenest GPT"
        description="AI-powered movie recommender using Redux, Framer Motion, and Firebase, with smooth trailer/info toggling." />

      <GridItem
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Quick Bite"
        description="Dual-mode food & grocery delivery app with theme switching, filters, and floating cart using Redux and Tailwind." />

      <GridItem
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="More Coming Soon"
        description="Exciting projects are in the works—stay tuned for more!" />
    </ul>
  );
}

const GridItem = ({ icon, title, description }) => {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3 bg-neutral-950">
        <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
        <div className="flex flex-col justify-between h-full gap-6 rounded-xl p-6 dark:shadow-[0_0_27px_0_#2D2D2D]">
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
              <p className="text-sm md:text-base text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};


