"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      setVisible(scrollYProgress.get() >= 0 && direction < 0);
    }
  });

  useEffect(() => {
    if (!visible) setMobileOpen(false);
  }, [visible]);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* Floating Nav (Desktop + Mobile Icon) */}
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              className = "fixed top-4 right-4 z-[5000] max-w-[calc(100vw-1rem)] overflow-hidden p-[2px] rounded-full animated-gradient-border shadow-lg",
              className
            )}
          >
            <div className="flex items-center justify-end px-3 py-2 bg-neutral-950 rounded-full space-x-3 backdrop-blur-2xl text-sm text-white">
              {/* Desktop Nav */}
              <div className="hidden sm:flex items-center space-x-4">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className=""
                  >
                    <div className="bg-neutral-950 px-4 py-2 rounded-full text-white hover:text-indigo-300">
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>

              {/* Mobile Toggle Icon */}
              <div className="sm:hidden flex items-center hover:text-indigo-400">
                <button onClick={toggleMobileMenu} className="p-1">
                  {mobileOpen ? <X className="w-5 h-7" /> : <Menu className="w-5 h-7" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 z-[4999] sm:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="mt-4 space-y-2"
            >
              {navItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="p-[2px] block rounded-full animated-gradient-border hover:from-purple-600 hover:to-blue-600 transition-all"
                  >
                    <div className="bg-neutral-950 text-white hover:text-indigo-300 text-center p-4 rounded-full shadow-xl backdrop-blur-lg">
                      {item.icon}
                    </div>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
