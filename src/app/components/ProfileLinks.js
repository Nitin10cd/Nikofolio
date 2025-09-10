import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

// It's a good practice to define your data outside the component for clarity
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Nikhil2253', icon: <FaGithub className="text-gray-700 text-2xl" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhil-saxena-76901a2a5/', icon: <FaLinkedin className="text-blue-600 text-2xl" /> },
  { name: 'Twitter', href: 'https://x.com/NikhilSaxe38017', icon: <FaXTwitter className="text-black text-2xl" /> },
  { name: 'Email', href: 'mailto:nikhilsaxenacse@gmail.com', icon: <FaEnvelope className="text-red-500 text-2xl" /> },
  { name: 'Leetcode', href: 'https://leetcode.com/u/Nikhil_Saxena__/', icon: <SiLeetcode className="text-red-500 text-2xl" /> },
];

const LinksSection = () => {
  return (
    <section id="links" className="space-y-8 py-12">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800"
      >
        Connect with Me
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {socialLinks.map((s, idx) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-4 px-6 py-4 rounded-full bg-white shadow-xl transition-all duration-300 transform hover:shadow-2xl"
            title={`Connect on ${s.name}`}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              {s.icon}
            </div>
            <div className="font-semibold text-lg text-gray-700">
              {s.name}
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-8 text-center text-base text-gray-600 dark:text-gray-400">
        Feel free to reach out, Im always open to new connections!
      </div>
    </section>
  );
};

export default LinksSection;