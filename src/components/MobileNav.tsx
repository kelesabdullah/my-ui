'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { useState } from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#about', label: 'About', icon: User },
    { href: '/#experience', label: 'Experience', icon: Briefcase },
    { href: '/#skills', label: 'Skills', icon: Code },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/#contact', label: 'Contact', icon: Mail },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden relative z-50 p-2 text-white"
        onClick={() => onClose()}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onClose()}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md border-l border-white/10 z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Profile Section */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold">Abdullah Keleş</h3>
                  <p className="text-purple-300 text-sm">DevOps Engineer & Full Stack Developer</p>
                </motion.div>

                {/* Navigation Links */}
                <motion.nav 
                  className="flex-1"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.ul className="space-y-4" variants={staggerContainer}>
                    {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                      <motion.li
                        key={item}
                        variants={fadeIn}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={onClose}
                          className="block relative group px-6 py-4 font-mono text-lg font-medium transition-all duration-300 overflow-hidden"
                        >
                          {/* Main button background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-cyan-500/20 rounded-lg"></div>
                          
                          {/* Hover effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                          
                          {/* Border glow on hover */}
                          <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/40 rounded-lg transition-all duration-300"></div>
                          
                          {/* Text */}
                          <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                            {item.toUpperCase()}
                          </span>
                          
                          {/* Left accent line */}
                          <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 transform -translate-y-1/2"></div>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.nav>

                {/* Social Links */}
                <motion.div
                  className="mt-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-4">Follow me on</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.linkedin.com/in/kelesabdullah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-full flex items-center justify-center transition-colors"
                      >
                        <span className="text-blue-400 text-sm font-bold">in</span>
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-600/20 hover:bg-gray-600/40 rounded-full flex items-center justify-center transition-colors"
                      >
                        <span className="text-gray-400 text-sm font-bold">gh</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 