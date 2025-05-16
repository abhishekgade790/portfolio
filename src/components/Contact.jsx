"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    IconBrandTwitter,
    IconPhone,
} from "@tabler/icons-react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Contact = () => {
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
        <div ref={contactRef} id="contact" className="flex flex-col bg-neutral-900 items-center justify-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-8 text-center"
            >
                Let's Connect!
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-4 max-w-4xl w-full md:grid md:grid-cols-8 md:grid-rows-9">
                {/* Gmail */}
                <motion.a href="mailto:abhishekgade790@gmail.com" target="_blank"
                    className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 border text-2xl border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-red-500 hover:bg-opacity-80 transition md:col-span-4 md:row-span-3 md:w-auto w-full"
                >
                    <SiGmail size={24} /> Mail Me
                </motion.a>

                {/* GitHub */}
                <motion.a href="https://github.com/abhishekgade790" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 text-2xl border border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-gray-500 hover:bg-opacity-80 transition md:col-span-2 md:row-span-6 md:col-start-1 md:row-start-4 w-full"
                >
                    <SiGithub size={24} /> GitHub
                </motion.a>

                {/* LinkedIn */}
                <motion.a href="https://linkedin.com/in/abhishekgade790" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 text-2xl border border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-blue-500 hover:bg-opacity-80 transition md:col-span-4 md:row-span-3 md:col-start-3 md:row-start-4 w-full"
                >
                    <SiLinkedin size={24} /> LinkedIn
                </motion.a>

                {/* Phone */}
                <motion.a href="tel:+917972824910" className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 border text-2xl border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-green-500 hover:bg-opacity-80 transition md:col-span-4 md:row-span-3 md:col-start-5 md:row-start-1 w-full"
                >
                    <IconPhone size={24} /> Call Me
                </motion.a>

                {/* Twitter */}
                <motion.a href="https://twitter.com/abhigade79" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 border text-2xl border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-blue-400 hover:bg-opacity-80 transition md:col-span-4 md:row-span-3 md:col-start-3 md:row-start-7 w-full"

                >
                    <IconBrandTwitter size={24} /> Twitter
                </motion.a>

                {/* Instagram */}
                <motion.a href="https://instagram.com/abhishekgade790" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 md:p-12 bg-zinc-800 border text-2xl border-neutral-400/50 rounded-lg text-white gap-2 hover:bg-pink-500 hover:bg-opacity-80 transition md:col-span-2 md:row-span-6 md:col-start-7 md:row-start-4 w-full"

                >
                    <SiInstagram size={24} /> Instagram
                </motion.a>
            </div>

            <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="text-gray-400 m-4 text-md text-center max-w-4xl mt-12 md:mt-15 mb-16 md:mb-24"
            >
                You’re welcome to connect with me on any of these platforms. I’m always excited to collaborate on innovative projects, brainstorm fresh ideas, or explore new opportunities that align with your vision.
            </motion.p>

        </div>
    );
};

export default Contact;