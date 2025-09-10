import React from 'react';
import { motion } from 'framer-motion';


const Header = ({ tabs, active, setActive }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-9 md:gap-4 p-4 md:p-6 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        <div className="w-16 h-16 rounded-full p-2 bg-white shadow-xl flex items-center justify-center border border-gray-100">
          <img src="/Nikhil.png" alt="Nikhil Saxena" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white"/>
            
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Nikhil Saxena
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            Aspiring Software Engineer • MERN • Javascript
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <nav className="flex gap-2 p-1 md:p-2 bg-gray-50 rounded-3xl shadow-inner transition-all duration-300">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`
              relative px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 z-10
              ${
                active === t
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
              }
            `}
          >
            {active === t && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-md z-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;