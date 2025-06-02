'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
  currentPage?: string;
}

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Experience', href: '/#experience', icon: Briefcase },
  { name: 'Skills', href: '/#skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: TrendingUp },
  { name: 'Contact', href: '/#contact', icon: Mail },
];

export default function MobileNav({ currentPage = '/' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-3 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-white/10 z-40 p-6"
            >
              {/* Profile Section */}
              <div className="mt-16 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <img
                      src="/images/1700993051422.png"
                      alt="Abdullah Keleş"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Abdullah Keleş</h3>
                    <p className="text-gray-400 text-sm">DevOps Engineer</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.href || 
                                  (item.href === '/projects' && currentPage?.startsWith('/projects'));
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Contact CTA */}
              <div className="mt-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-4 border border-blue-500/20">
                <h4 className="text-white font-semibold mb-2">Let's Work Together</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Ready to discuss your next project?
                </p>
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 