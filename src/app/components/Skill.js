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
} from 'react-icons/fa';
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
      { name: 'Next.js', icon: <SiNextdotjs className="text-black " /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" /> },
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
      { name: 'REST APIs', icon: <FaServer className="text-blue-500" /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
      { name: 'SQL', icon: <FaDatabase className="text-yellow-500" /> },
    ],
  },
  {
    category: 'CS Concepts',
    items: [
      { name: 'DSA', icon: <FaInfinity className="text-purple-500" /> },
      { name: 'DBMS', icon: <FaDatabase className="text-fuchsia-500" /> },
      { name: 'System Design', icon: <FaProjectDiagram className="text-blue-400" /> },
      { name: 'OOPS', icon: <FaObjectGroup className="text-black" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="space-y-10 py-12">
      
      {skills.map((skillCategory, categoryIdx) => (
        <React.Fragment key={skillCategory.category}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIdx * 0.1, duration: 0.5 }}
            className="text-2xl font-bold text-gray-700 pb-2 mb-6"
          >
            {skillCategory.category}
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillCategory.items.map((s, itemIdx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (categoryIdx * 0.2) + (itemIdx * 0.05) }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: [1, 1.03, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3 + itemIdx * 0.2,
                      repeat: Infinity,
                    }}
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/90">
                      <div className="text-4xl">{s.icon}</div>
                    </div>
                  </motion.div>
                  <svg
                    className="absolute -inset-2 w-24 h-24 opacity-30"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(138, 180, 248, 0.09)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="28"
                      stroke="rgba(255, 210, 100, 0.06)"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div className="text-sm sm:text-base font-medium text-center mt-2 text-gray-600">
                  {s.name}
                </div>
              </motion.div>
            ))}
          </div>
          {categoryIdx < skills.length - 1 && <hr className="my-10 border-gray-200" />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SkillsSection;