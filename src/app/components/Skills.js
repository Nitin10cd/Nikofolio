import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500 text-2xl hover:text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-2xl hover:text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700 text-2xl hover:text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl hover:text-3xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-600 text-2xl hover:text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl hover:text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl hover:text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 bg-black text-2xl hover:text-3xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-600 text-2xl hover:text-3xl" /> },
];

export default function JugglingSkills() {
  const radius = 130;
  const numSkills = skills.length;
  const animationDuration = 10; // Unified duration for both parent and children

  return (
    <div className="flex justify-center items-center h-[400px] w-full md:w-2/5">
      <motion.div
        className="relative w-72 h-72 flex items-center justify-center"
        animate={{ rotate: 360 }} // Rotate the entire container 360 degrees
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: "linear",
        }}
      >
       
        <motion.div
          className="absolute font-bold text-gray-800"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: animationDuration,
            ease: "linear",
          }}
        >
          Top Skills
        </motion.div>

        {skills.map((skill, i) => {
          const angle = (i / numSkills) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={skill.name}
              className="absolute w-13 h-13 flex items-center justify-center rounded-full bg-white border border-amber-400 cursor-pointer "
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }} // Counter-rotation
                transition={{
                  repeat: Infinity,
                  duration: animationDuration,
                  ease: "linear",
                }}
              >
                {skill.icon}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}