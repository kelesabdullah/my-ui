'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, CheckCircle, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNav from '@/components/MobileNav';

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

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const projects = [
    {
      id: "kubernetes-platform",
      title: "Kubernetes Management Platform",
      shortDesc: "Fully integrated Kubernetes cluster management with UI",
      category: "Infrastructure",
      status: "Production",
      duration: "6 months",
      team: "3 developers",
      tech: ["Kubernetes", "NextJS", "NestJS", "TypeScript", "Docker", "Helm"]
    },
    {
      id: "microservices-platform",
      title: "Microservices Platform",
      shortDesc: "NestJS-based microservice architecture",
      category: "Backend",
      status: "Development",
      duration: "8 months",
      team: "4 developers",
      tech: ["NestJS", "Docker", "Kubernetes", "TypeScript", "Redis", "PostgreSQL"]
    },
    {
      id: "cicd-automation",
      title: "CI/CD Pipeline Automation",
      shortDesc: "End-to-end automated deployment pipeline",
      category: "DevOps",
      status: "Production",
      duration: "5 months",
      team: "2 developers",
      tech: ["GitLab", "ArgoCD", "SonarQube", "Velero", "Kubernetes"]
    },
    {
      id: "azure-infrastructure",
      title: "Azure Cloud Infrastructure",
      shortDesc: "Scalable infrastructure setup on Azure",
      category: "Cloud",
      status: "Production",
      duration: "3 months",
      team: "3 developers",
      tech: ["Azure", "Terraform", "Ansible", "Longhorn", "ARM Templates"]
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen cyber-bg text-white">
      <div className="cyber-grid circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="scanlines absolute inset-0"></div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
              <span className="text-lg font-semibold font-mono">&lt; RETURN_HOME</span>
            </Link>
            
            <div className="hidden md:block relative group">
              <div className="text-2xl font-bold font-mono text-white relative">
                <span className="relative z-10">PROJECTS</span>
                <span className="text-cyan-400">.</span>
                <span className="relative z-10">DB</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors neon-glow"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <div className="cyber-glass rounded-xl p-4 border border-cyan-500/30">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg text-sm font-mono font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'cyber-button text-black neon-glow'
                    : 'cyber-glass text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/50'
                }`}
              >
                ALL_PROJECTS
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg text-sm font-mono font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'cyber-button text-black neon-glow'
                      : 'cyber-glass text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/50'
                  }`}
                >
                  {category.toUpperCase().replace(' ', '_')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text glitch float" data-text="Project Archive">
              Project Archive
            </h1>
            <div className="cyber-glass neon-border rounded-xl p-6 max-w-4xl mx-auto hologram">
              <p className="text-xl text-cyan-300 font-mono mb-4">
                &gt; ACCESSING_PROJECT_DATABASE...
              </p>
              <p className="text-lg text-gray-300">
                A comprehensive showcase of DevOps, infrastructure, and development projects 
                featuring cutting-edge technologies and automation practices.
              </p>
            </div>
            {selectedCategory !== 'all' && (
              <div className="mt-8">
                <span className="cyber-glass border border-cyan-500/50 text-cyan-300 px-6 py-3 rounded-full text-sm font-mono">
                  FILTER: {selectedCategory.toUpperCase()} | RESULTS: {filteredProjects.length}
                </span>
              </div>
            )}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="cyber-glass rounded-xl p-6 hover-lift group border border-cyan-500/30 hologram relative overflow-hidden"
                layout
              >
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-mono font-bold">
                    {project.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full animate-pulse ${
                      project.status === 'Production' ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                    }`}></span>
                    <span className="text-gray-400 text-xs font-mono">{project.status.toUpperCase()}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Project Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                    <Calendar className="w-4 h-4" />
                    DURATION: {project.duration.toUpperCase()}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                    <Users className="w-4 h-4" />
                    TEAM_SIZE: {project.team.toUpperCase()}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-800/50 border border-cyan-500/30 px-2 py-1 rounded text-xs text-cyan-300 font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-800/30 border border-cyan-500/20 px-2 py-1 rounded text-xs text-gray-400 font-mono">
                      +{project.tech.length - 3}_MORE
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono font-medium w-full justify-center py-3 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 cyber-glass relative overflow-hidden group"
                >
                  <span className="relative z-10">ACCESS_DATA</span>
                  <ExternalLink className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div variants={fadeIn} className="text-center py-12">
              <div className="cyber-glass rounded-xl p-8 border border-red-500/30">
                <div className="text-red-400 text-lg mb-4 font-mono">ERROR: NO_DATA_FOUND</div>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  RESET_FILTERS
                </button>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={fadeIn} className="text-center mt-16">
            <div className="cyber-glass neon-border rounded-xl p-8 hologram">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400 font-mono">
                COLLABORATION_REQUEST?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-mono">
                &gt; Ready to discuss innovative projects and breakthrough solutions.<br/>
                &gt; System available for new connections and partnerships.
              </p>
              <Link
                href="/#contact"
                className="cyber-button text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl neon-glow font-mono"
              >
                ESTABLISH_CONNECTION
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 