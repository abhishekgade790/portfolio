"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";
import { IconFileText } from "@tabler/icons-react";
import { IconCode } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
import { Contact2Icon } from "lucide-react";
import { User2 } from "lucide-react";
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
    icon: <User2 className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconTool className="h-4 w-4" />,
  },
  {
    name: "Resume",
    link: "https://abhishek-drab.vercel.app/abhishek-gade.pdf",
    icon: <IconFileText className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Contact2Icon className="h-4 w-4" />,
  },
];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
