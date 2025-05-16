"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} id="about" className="min-h-[60vh] flex items-center justify-center bg-neutral-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center"
      >
        {/* Gradient Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 via-indigo-200 to-blue-800 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 mt-4 text-lg"
        >
          I'm Abhishek, a passionate web developer specializing in modern front-end technologies.
          I focus on building interactive and scalable web applications with **React, Tailwind CSS, and Node.js**.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 mt-2 text-lg"
        >
          When I'm not coding, I explore UI/UX trends, work on open-source projects, and play video games.
        </motion.p>

        {/* Contact Links with hover animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/abhishekgade790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/abhishekgade790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:abhishekgade790@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;