"use client";
import React, { useState, useEffect, useRef } from "react";
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
} from "react-icons/si";

const skills = {
    frontend: [
        { Icon: SiReact, name: "React.js", color: "#61DAFB" },
        { Icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
        { Icon: SiShadcnui, name: "ShadCN", color: "#1a3b7e" },
        { Icon: SiFramer, name: "Framer Motion", color: "#FE02E6" },
        { Icon: SiDaisyui, name: "DaisyUI", color: "#38BDF8" },
        { Icon: SiJavascript, name: "JavaScript (ES6)", color: "#F7DF1E" },
        { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
        { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    ],
    backend: [
        { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
        { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { Icon: SiRender, name: "Render", color: "#5b5b5b" },
        { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
        { Icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
    ],
    tools: [
        { Icon: SiGit, name: "Git", color: "#F05032" },
        { Icon: SiGithub, name: "GitHub", color: "#616161" },
        { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    ],
};

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={skillsRef} className="flex flex-col items-center py-16 px-4 bg-neutral-900">
            <motion.h1
                initial={{ opacity: 0, y: -10,scale:0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale:1} : {}}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-8 text-center"
            >
                Skills That Power My Work!
            </motion.h1>

            <div className="max-w-4xl w-full">
                {Object.entries(skills).map(([category, skillList]) => (
                    <motion.div
                        key={category}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.9,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    staggerChildren: 3,
                                },
                            },
                        }}
                        className="mt-8 mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-5 md:gap-8">
                            {skillList.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: idx * 0.1, duration: 0.5 ,ease:"easeInOut",staggerChildren:0.5}}
                                    className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg shadow-lg transition-transform bg-zinc-950 border border-gray-300/50 w-32 md:w-36 aspect-square hover:scale-105 hover:bg-zinc-800/20"
                                >
                                    <div
                                        className="flex items-center justify-center w-16 h-16 rounded-full"
                                    >
                                        <tech.Icon size={40} color={tech.color} />
                                    </div>
                                    <span className="text-sm text-neutral-400/60 hover mt-1">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;