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
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        {
            href: "mailto:abhishekgade790@gmail.com",
            label: "Mail Me",
            icon: <SiGmail size={24} />,
            bg: "hover:bg-red-500",
        },
        {
            href: "https://github.com/abhishekgade790",
            label: "GitHub",
            icon: <SiGithub size={24} />,
            bg: "hover:bg-gray-500",
        },
        {
            href: "https://linkedin.com/in/abhishekgade790",
            label: "LinkedIn",
            icon: <SiLinkedin size={24} />,
            bg: "hover:bg-blue-500",
        },
        {
            href: "tel:+917972824910",
            label: "Call Me",
            icon: <IconPhone size={24} />,
            bg: "hover:bg-green-500",
        },
        {
            href: "https://twitter.com/abhigade79",
            label: "Twitter",
            icon: <IconBrandTwitter size={24} />,
            bg: "hover:bg-blue-400",
        },
        {
            href: "https://instagram.com/abhishekgade790",
            label: "Instagram",
            icon: <SiInstagram size={24} />,
            bg: "hover:bg-pink-500",
        },
    ];

    return (
        <div
            ref={contactRef}
            id="contact"
            className="min-h-screen flex flex-col bg-neutral-900 items-center justify-center px-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 ,scale:0.7}}
                animate={isVisible ? { opacity: 1, y: 0 ,scale:1} : {}}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-12 text-center"
            >
                Let's Connect!
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className={`flex items-center justify-center p-6 md:p-10 bg-zinc-800 border border-neutral-400/50 rounded-lg text-white gap-2 text-lg md:text-2xl transition ${link.bg} hover:bg-opacity-80 hover:scale-102`}
                    >
                        {link.icon}
                        {link.label}
                    </motion.a>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-gray-400 text-center mt-12 mb-24 max-w-3xl px-4"
            >
                You’re welcome to connect with me on any of these platforms. I’m always
                excited to collaborate on innovative projects, brainstorm fresh ideas,
                or explore new opportunities that align with your vision.
            </motion.p>
        </div>
    );
};

export default Contact;
