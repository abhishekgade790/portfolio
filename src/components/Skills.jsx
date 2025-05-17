"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiDaisyui,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiShadcnui,
  SiMysql,
  SiRender,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const skills = {
  frontend: [
    { Icon: SiReact, name: "React.js", color: "#61DAFB" },
    { Icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiShadcnui, name: "ShadCN", color: "#1a3b7e" },
    { Icon: SiFramer, name: "Framer Motion", color: "#FE02E6" },
    { Icon: SiDaisyui, name: "DaisyUI", color: "#38BDF8" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
  ],
  backend: [
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { Icon: SiRender, name: "Render", color: "#5b5b5b" },
    {Icon:SiVercel,name:"Vercel",color:"#a8a8a8"},
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  ],
  tools: [
    { Icon: SiGit, name: "Git", color: "#F05032" },
    { Icon: SiGithub, name: "GitHub", color: "#737272" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  ],
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-60px" }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="bg-neutral-900 py-20 px-4 flex flex-col items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-12 text-center"
      >
        Skills That Power My Work!
      </motion.h1>

      <div className="max-w-6xl w-full flex flex-col gap-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            variants={sectionVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text capitalize">
              {category}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
              {skillList.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariant}
                  className="flex flex-col items-center justify-center bg-zinc-800 border border-gray-400/40 rounded-lg shadow-md hover:shadow-xl hover:bg-zinc-800/50 transition-transform transform hover:scale-105 w-28 md:w-32 aspect-square"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full">
                    <tech.Icon size={40} color={tech.color} />
                  </div>
                  <span className="text-sm text-neutral-300 mt-2 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
