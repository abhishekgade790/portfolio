export const projects = [
  {
    name: "Quick Bite",
    description:
      "Dual-mode food & grocery delivery web app with dynamic filtering, theme switching, and cart management using Redux Toolkit.",
    href: "https://quike-bite.web.app/",
    github: "https://github.com/abhishekgade790/quick-bite",
    image: "../assets/images/quick-bite-demo.png",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Render (Proxy Server)"
    ],
    features: [
      "Dual-mode app: Separate slices for Food and Grocery items.",
      "Dynamic cart rendering based on item types.",
      "Theme switcher (white+orange & gray+orange themes).",
      "Filter dropdowns with checkboxes and count display synced via URL params.",
      "Toast notifications and floating action buttons for cart interaction.",
      "Responsive design with mobile-first UX.",
      "Proxy server hosted on Render to bypass CORS errors."
    ],
  },
  {
    name: "Cinenest GPT",
    description:
      "AI-powered movie recommender with Firebase auth, Framer Motion animations, and Gemini API integration.",
    href: "https://cinenestgpt.web.app/browse",
    github: "https://github.com/abhishekgade790/netflix-gpt",
    image: "../assets/images/cinenest-gpt-demo.png",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
      "Google Gemini API"
    ],
    features: [
      "Movie suggestions powered by Gemini API based on user input.",
      "Smooth trailer/info toggle using URL query parameters.",
      "Firebase Authentication with responsive profile update UI.",
      "Real-time Redux sync of Firebase user profile and image validation.",
      "Mobile-friendly scrollable layout with animated transitions.",
      "Dark-themed UI inspired by Netflix, using Framer Motion for smooth animations."
    ]
  },
  {
    name: "Abhi's Portfolio",
    description:
      "A modern portfolio website showcasing my work, tech stack, and resume with floating navigation and section transitions.",
    href: "https://abhishekgade790.github.io/portfolio/",
    github: "https://github.com/abhishekgade790/portfolio",
    image: "../assets/images/portfolio-demo.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons"
    ],
    features: [
      "Single-page layout with floating navigation and active section highlighting.",
      "Animated transitions using Framer Motion.",
      "Projects section with glowing grid layout and detailed descriptions.",
      "Responsive design optimized for all screen sizes.",
      "Dark theme with purple/blue gradient accents and backdrop blur effects."
    ]
  },
  {
    name: "More Coming Soon",
    description:
      "Exciting projects are in the works—stay tuned for more!",
    href: "#",
    github: "#",
    image: "../assets/images/coming-soon.png",
    technologies: ["React", "Tailwind CSS"],
    features: ["Upcoming innovative full-stack projects and open source tools."]
  }
];
