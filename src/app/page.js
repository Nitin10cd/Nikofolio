"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layers,
  Terminal,
  GitBranch,
  Star,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  Zap,
} from "lucide-react";
import ChakraSkills from "./components/Skills";
import App from "./components/Projects";
import SkillsSection from "./components/Skill";
import LinksSection from "./components/ProfileLinks";
import Navbar from "./components/Navbar";

// NikhilPortfolio.tsx (or .jsx)
// Next.js App Router compatible component

const tabs = ["Home", "Projects", "Skills", "Links"];

const projects = [
  {
    title: "LuminaSocial",
    desc: "Scalable MERN social app with real-time messaging & JWT auth.",
    tags: ["MERN", "Socket.IO", "JWT"],
    link: "https://github.com/Nikhil2253/LuminaSocial",
    icon: "💬",
  },
  {
    title: "Campus Connect",
    desc: "College platform with AI MCQs, role-based dashboards and live announcements.",
    tags: ["MERN", "Gemini API", "Realtime"],
    link: "https://github.com/Nitin10cd/hackthon-project-clg",
    icon: "🏫",
  },
  {
    title: "World Idle Game",
    desc: "Simulates real-time world economy and country interactions.",
    tags: ["MERN", "Game Logic"],
    link: "https://github.com/Nikhil2253/WorldGame",
    icon: "🌍",
  },
  {
    title: "Hospital Management System",
    desc: "Role-based dashboards, secure authentication and appointment flows.",
    tags: ["MERN", "JWT"],
    link: "https://github.com/Nikhil2253/Hospital-Management-System---HMS",
    icon: "🏥",
  },
];

const skills = [
  { name: "React", icon: <Code className="w-6 h-6" /> },
  { name: "Next.js", icon: <Star className="w-6 h-6" /> },
  { name: "Node.js", icon: <Terminal className="w-6 h-6" /> },
  { name: "Express", icon: <Rocket className="w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
  { name: "Prisma", icon: <Layers className="w-6 h-6" /> },
  { name: "DSA", icon: <GitBranch className="w-6 h-6" /> },
  { name: "Git", icon: <Github className="w-6 h-6" /> },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nikhil2253",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-saxena-76901a2a5/",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Nikhil_Saxena__",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "X",
    href: "https://x.com/NikhilSaxe38017",
    icon: <Twitter className="w-6 h-6" />,
  },
];

export default function NikhilPortfolio() {
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fef9e6] to-white text-gray-900 overflow-hidden">
      {/* Particle background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#eaf6ff] via-transparent to-transparent opacity-50" />
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#EAEA00" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EAEA00" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle
            cx="10%"
            cy="20%"
            r="120"
            fill="url(#g1)"
            className="animate-blob"
          />
          <circle
            cx="80%"
            cy="80%"
            r="160"
            fill="#09a"
            opacity="0.08"
            className="animate-blob delay-2000"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
      <Navbar tabs={["Home","Projects","Skills","Socials"]} active={active} setActive={setActive}/>

        <main className="mt-5 w-full">
          {/* HOME */}
          {active === "Home" && (
            <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-6 w-full items-center justify-between min-h-[calc(100vh-12rem)]">
                     <motion.div
                       initial={{ x: -30, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.5 }}
                       className="space-y-6 md:space-y-8 w-full md:w-3/5"
                     >
                       <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100">
                         <span className="text-rose-600  font-semibold">Hello </span>
                         <span className="hidden sm:inline text-sm text-gray-600 ">
                           I build scalable web apps & real-time systems
                         </span>
                       </div>
           
                       <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                         Nikhil Saxena
                         <span className="block text-2xl md:text-3xl font-medium text-gray-600  mt-2">
                           Aspiring Software Engineer & Problem Solver
                         </span>
                       </h2>
           
                       <p className="text-gray-700  leading-relaxed">
                         I am a Full Stack Software Developer who knows Javascript and its Frameworks, i have strong foundation in Software Engineering Concepts like DSA and System Design , also Having good Academic Career, My Key skills is Analytical thinking .
                       </p>
           
                       <div className="flex flex-wrap gap-4 mt-6">
                         <a
                           href="#projects"
                           onClick={() => setActive("Projects")}
                           className="flex-1 sm:flex-none text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                         >
                           See Projects
                         </a>
                         <a
                           href="#links"
                           onClick={() => setActive("Socials")}
                           className="flex-1 sm:flex-none text-center px-6 py-3 rounded-full border-2 border-red-400 text-red-600 font-semibold transition-colors duration-300 hover:bg-red-50 hover:text-red-700"
                         >
                           Profile Links
                         </a>
                       </div>
           
                       <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                         <strong className="font-semibold">Fun facts:</strong> Chess player ♟️ · DSA enthusiast · Loves anime & maths
                       </div>
                     </motion.div>
           
                     <ChakraSkills />
                   </section>
          )}

          {/* PROJECTS */}
          {active === "Projects" && (
            <App/>
          )}

          {/* SKILLS */}
          {active === "Skills" && (
          <SkillsSection/>
          )}

          {/* LINKS */}
          {active === "Socials" && (
      <LinksSection/>
          )}
        </main>

      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin_reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-blob {
          animation: spin 40s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.45;
          }
        }
      `}</style>
    </div>
  );
}
