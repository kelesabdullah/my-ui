'use client';

import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, MapPin, Award, TrendingUp, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  currentPage?: string;
  onFilterChange?: (category: string) => void;
  projectCategories?: string[];
}

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Experience', href: '/#experience', icon: Briefcase },
  { name: 'Skills', href: '/#skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: TrendingUp },
  { name: 'Contact', href: '/#contact', icon: Mail },
];

const quickStats = [
  { label: 'Years Experience', value: '3+', icon: '⚡' },
  { label: 'Technologies', value: '15+', icon: '🚀' },
  { label: 'Projects', value: '5+', icon: '📈' },
  { label: 'Automation', value: '100%', icon: '🎯' },
];

export default function Sidebar({ currentPage = '/', onFilterChange, projectCategories }: SidebarProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
    onFilterChange?.(category);
  };

  return (
    <div 
      className="w-80 bg-black/20 backdrop-blur-md border-r border-white/10 h-screen fixed top-0 left-0 z-30 overflow-y-auto p-6"
    >
      {/* Profile Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
            <img
              src="images/1700993051422.png"
              alt="Abdullah Keleş"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-white font-semibold">Abdullah Keleş</h3>
            <p className="text-gray-400 text-sm">DevOps Engineer</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>Ankara, Turkey</span>
        </div>

        <div className="flex gap-2">
          <Link
            href="https://github.com/kelesabdullah"
            target="_blank"
            className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <Github className="w-4 h-4 text-gray-300" />
          </Link>
          <Link
            href="https://linkedin.com/in/kelesabdullah"
            target="_blank"
            className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
          </Link>
          <Link
            href="mailto:kelesabdullah@example.com"
            className="p-2 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors"
          >
            <Mail className="w-4 h-4 text-red-400" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <h4 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide">Navigation</h4>
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.href || 
                            (item.href === '/projects' && currentPage?.startsWith('/projects'));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Project Filters (only show on projects pages) */}
      {projectCategories && (
        <div className="mb-8">
          <h4 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter by Category
          </h4>
          <div className="space-y-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              All Projects
            </button>
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedFilter === category
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mb-8">
        <h4 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-3 text-center">
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-white font-semibold text-sm">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-4 border border-blue-500/20">
        <h4 className="text-white font-semibold mb-2">Let's Work Together</h4>
        <p className="text-gray-300 text-sm mb-3">
          Ready to discuss your next project?
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get In Touch
        </Link>
      </div>
    </div>
  );
} 