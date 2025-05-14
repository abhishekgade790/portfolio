"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "../utils/projectsData";
import { Box, Search, Settings, Sparkles, Code } from "lucide-react";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-neutral-900 py-16 px-4 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 mt-2 text-lg">
            A glimpse into what I've built.
          </p>
         
        </div>
        <GlowingEffectGrid />
        
      </div>
    </div>
  );
}

function GlowingEffectGrid() {

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <GridItem
          key={index}
          title={project.name}
          description={project.description}
          image={project.image}
          href={project.href}
          github={project.github}
        />
      ))}
    </ul>
  );
}

const GridItem = ({ title, description,image,href,github }) => {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3 bg-neutral-950">
        <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
          <div className="mt-4 flex justify-end space-x-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-200 flex items-center gap-0.5"
            >
              <Sparkles className="w-5 h-5" />Live
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition duration-200 flex items-center gap-0.5"
            >
              <Code className="w-5 h-5" />Github
            </a>
        </div>
        </div>
        
      </div>
    </li>
  );
};
