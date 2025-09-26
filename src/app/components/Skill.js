import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaInfinity,
  FaServer,
  FaProjectDiagram,
  FaObjectGroup,
  FaJava,
  FaNetworkWired,
} from 'react-icons/fa';
import { GiAtom } from 'react-icons/gi';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiPassport,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiTypescript,
  SiJsonwebtokens,
  SiFastify,
  SiPrisma,
  SiSocketdotio,
} from 'react-icons/si';
import { FaC } from 'react-icons/fa6';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'Java', icon: <FaJava className="text-red-900" /> },
      { name: 'C', icon: <FaC className="text-blue-400" /> },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'Zustand', icon: <GiAtom className="text-green-500" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-black" /> },
      { name: 'Passport.js', icon: <SiPassport className="text-purple-700" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-black" /> },
      { name: 'Fastify', icon: <SiFastify className="text-black" /> },
      { name: 'Socket.IO', icon: <SiSocketdotio className="text-black" /> },
      { name: 'REST APIs', icon: <FaServer className="text-blue-500" /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
      { name: 'SQL', icon: <FaDatabase className="text-yellow-500" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-indigo-500" /> },
    ],
  },
  {
    category: 'CS Concepts',
    items: [
      { name: 'DSA', icon: <FaInfinity className="text-purple-500" /> },
      { name: 'DBMS', icon: <FaDatabase className="text-fuchsia-500" /> },
      { name: 'System Design', icon: <FaProjectDiagram className="text-blue-400" /> },
      { name: 'OOPS', icon: <FaObjectGroup className="text-black" /> },
      { name: 'Networking', icon: <FaNetworkWired className="text-green-500" /> },
      { name: 'Operating Systems', icon: <FaServer className="text-indigo-500" /> },
      { name: 'Algorithms', icon: <GiAtom className="text-pink-500" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="space-y-16 py-16 bg-gray-50">
      {skills.map((skillCategory, categoryIdx) => (
        <React.Fragment key={skillCategory.category}>
          {/* Category Header */}
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIdx * 0.1, duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-800 mb-10 relative inline-block"
          >
            {skillCategory.category}
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </motion.h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skillCategory.items.map((s, itemIdx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIdx * 0.2 + itemIdx * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  {/* Gradient Glow */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 blur-xl opacity-30"></div>
                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 3 + itemIdx * 0.2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100 relative z-10"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/95">
                      <div className="text-4xl">{s.icon}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Skill Name */}
                <div className="text-sm sm:text-base font-semibold text-gray-700 text-center">
                  {s.name}
                </div>
              </motion.div>
            ))}
          </div>

          {categoryIdx < skills.length - 1 && (
            <hr className="my-16 border-t-2 border-gray-200" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SkillsSection;
