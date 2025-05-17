"use client";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "../utils/projectsData";
import { Code, Play, InfoIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {


  const [openProjectIndex, setOpenProjectIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-neutral-900 py-16 px-4 flex items-center justify-center relative"
    >
      <div className="w-full max-w-4xl z-10">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
            className="p-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-indigo-200 to-blue-800"
          >
            Projects
          </motion.h1>
          <p className="text-gray-400 text-lg">A glimpse into what I've built.</p>
        </div>
        <GlowingEffectGrid setOpen={setOpenProjectIndex} />
      </div>

      {/* Full Info Modal */}
      <AnimatePresence>
        {openProjectIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-2"
            onClick={() => setOpenProjectIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${openProjectIndex}`}
            >
              {/* Back Button */}
              <button
                className="mb-2 top-4 left-4 text-white border border-neutral-700 bg-gradient-to-r from-neutral-800/40 to-neutral-700/40 shadow-md hover:shadow-lg backdrop-blur-lg cursor-pointer flex items-center gap-2 rounded-xl px-4 py-2 transition duration-200 hover:bg-neutral-700/50 active:scale-95"
                onClick={() => setOpenProjectIndex(null)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline text-sm font-medium">Back</span>
              </button>

              {/* Content */}
              <motion.img
                src={projects[openProjectIndex].image}
                alt={projects[openProjectIndex].name}
                className="w-full aspect-[2/1] object-cover rounded-xl mb-4"
                layoutId={`image-${openProjectIndex}`}
              />
              <motion.h2
                className="text-2xl font-bold text-white mb-2"
                layoutId={`title-${openProjectIndex}`}
              >
                {projects[openProjectIndex].name}
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-4"
                layoutId={`desc-${openProjectIndex}`}
              >
                {projects[openProjectIndex].description}
              </motion.p>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-1">Technologies:</h4>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-400">
                  {projects[openProjectIndex].technologies.map((tech, i) => (
                    <li key={i} className="px-2 py-1 border border-gray-600 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-1">Features:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {projects[openProjectIndex].features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="mt-4 flex justify-end gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={projects[openProjectIndex].href}
                  target="_blank"
                  className="flex items-center text-blue-400 hover:text-blue-200"
                >
                  <Play className="w-5 h-5 mr-1" /> Live
                </a>
                <a
                  href={projects[openProjectIndex].github}
                  target="_blank"
                  className="flex items-center text-gray-400 hover:text-gray-300"
                >
                  <Code className="w-5 h-5 mr-1" /> GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GlowingEffectGrid({ setOpen }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <GridItem
          key={index}
          index={index}
          setOpen={setOpen}
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

const GridItem = ({
  index,
  title,
  description,
  image,
  href,
  github,
  setOpen,
}) => {
  return (
    <motion.li layoutId={`card-${index}`} className="list-none">
      <motion.div
        layoutId={`card-container-${index}`}
        className="relative h-full rounded-2xl border border-neutral-800 p-3 md:rounded-3xl md:p-3 bg-neutral-950 flex flex-col"
      >
        <GlowingEffect spread={40} glow proximity={164} inactiveZone={0.02} disabled={false} />
        <div className="flex flex-col h-full">
          <motion.img
            src={image}
            alt={title}
            className="w-full aspect-[2/1] object-cover rounded-lg mb-4"
            layoutId={`image-${index}`}
          />
          <motion.h3
            className="text-xl font-semibold text-white"
            layoutId={`title-${index}`}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400 mt-2 flex-grow"
            layoutId={`desc-${index}`}
          >
            {description}
          </motion.p>
          <div className="mt-4 m-2 flex justify-end flex-wrap gap-3">
            <button
              onClick={() => setOpen(index)}
              className="flex items-center gap-1.5 md:px-3 md:py-2 px-2 py-1 text-sm rounded-lg bg-neutral-800/60 hover:bg-neutral-700/70 text-neutral-200 hover:text-white border border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 backdrop-blur-md"
            >
              <InfoIcon className="w-4 h-4" />
              Info
            </button>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:px-3 md:py-2 px-2 py-1 text-sm rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 text-white hover:from-blue-600 hover:to-indigo-600 shadow hover:shadow-xl transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Live
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:px-3 md:py-2 px-2 py-1 text-sm rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-neutral-800/50 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Code className="w-4 h-4" />
              Code
            </a>
          </div>

        </div>
      </motion.div>
    </motion.li>
  );
};
