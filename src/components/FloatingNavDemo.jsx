"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { IconFileText } from "@tabler/icons-react";
import { IconCode } from "@tabler/icons-react";
import { IconTools } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
  {
    name: "Home",
    link: "#",
    icon: <IconHome className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconCode className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconTool className="h-4 w-4" />,
  },
  {
    name: "Resume",
    link: "#resume",
    icon: <IconFileText className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4" />,
  },
];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
