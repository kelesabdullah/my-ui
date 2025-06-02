'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Award, Download, MapPin, Cloud, Shield, Settings, Database, Layers, GitBranch } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MobileNav from '@/components/MobileNav';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Tech logos floating animation
function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const technologies = [
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'NextJS', icon: '⚛️' },
    { name: 'NestJS', icon: '🦅' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'ArgoCD', icon: '🚀' },
    { name: 'SonarQube', icon: '🔍' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Ansible', icon: '⚙️' },
    { name: 'Velero', icon: '💾' },
    { name: 'Longhorn', icon: '🗄️' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="absolute"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 360,
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-4xl opacity-20 hover:opacity-60 transition-opacity">
            {tech.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Mouse Follower Component
function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="min-h-screen cyber-bg text-white relative overflow-x-hidden">
      <div className="cyber-grid circuit-pattern absolute inset-0 opacity-20"></div>
      <div className="scanlines absolute inset-0"></div>
      <AnimatedBackground />
      <MouseFollower />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="text-2xl font-bold font-mono text-white relative">
                <span className="relative z-10">AK</span>
                <span className="text-cyan-400">.</span>
                <span className="relative z-10">EXE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group px-6 py-3 font-mono text-sm font-medium transition-all duration-300 overflow-hidden"
                >
                  {/* Main button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/30 rounded-lg"></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/60 rounded-lg transition-all duration-300"></div>
                  
                  {/* Sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.toUpperCase()}
                  </span>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav currentPage="/" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text glitch float"
              data-text="Abdullah Keleş"
            >
              Abdullah Keleş
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="cyber-glass neon-border rounded-xl p-6 mb-8 hologram"
            >
              <p className="text-xl md:text-2xl text-cyan-300 mb-4">
                &gt; DevOps Engineer & Full Stack Developer
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                &gt; Building scalable systems with Kubernetes, CI/CD, cloud infrastructure,<br/>
                &gt; and modern web technologies while implementing DevSecOps practices.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                href="#contact"
                className="cyber-button text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl neon-glow"
              >
                INITIALIZE_CONTACT
              </Link>
              <Link
                href="#projects"
                className="border border-cyan-500/50 text-cyan-300 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-200 backdrop-blur-md cyber-glass"
              >
                SCAN_PROJECTS
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "3+", label: "YEARS_DEVOPS", icon: "⚡" },
                { number: "15+", label: "TECHNOLOGIES", icon: "🚀" },
                { number: "5+", label: "MAJOR_PROJECTS", icon: "📈" },
                { number: "100%", label: "AUTOMATION_RATE", icon: "🎯" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="cyber-glass rounded-xl p-6 hover-lift pulse-glow border border-cyan-500/30"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 gradient-text">{stat.number}</h3>
                  <p className="text-gray-300 text-sm font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            >
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft}>
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQFX2Fw842bwqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700993051422?e=1754524800&v=beta&t=9OUKudvIqJ4Mvbz6EDxaj96sguRqlWH2oBijKjKqHvg"
                        alt="Abdullah Keleş"
                        className="rounded-full object-cover border-4 border-blue-500/30 shadow-xl"
                        width={160}
                        height={160}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20"></div>
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">DevOps & Development Expert</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Hi! I'm Abdullah, a DevOps Engineer and Full Stack Developer with 3+ years of experience. 
                      I specialize in Kubernetes, CI/CD pipelines, and modern web technologies.
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Currently working at <strong className="text-blue-400">Ankasoft</strong>, 
                      developing infrastructure automation, microservice architectures, and secure deployment processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Ankara, Turkey</span>
                </div>

                <div className="flex gap-4 justify-center md:justify-start">
                  <Link
                    href="https://linkedin.com/in/kelesabdullah"
                    target="_blank"
                    className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/kelesabdullah"
                    target="_blank"
                    className="p-3 bg-gray-800 rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:kelesabdullah@example.com"
                    className="p-3 bg-red-600 rounded-full hover:scale-110 transition-transform"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={slideInRight} className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Areas of Expertise</h3>
                
                {[
                  {
                    icon: <Settings className="w-6 h-6" />,
                    title: "DevOps & Infrastructure",
                    description: "Infrastructure management and automation with Kubernetes, Docker, and Ansible"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "DevSecOps",
                    description: "Secure development and deployment with SonarQube, Trivy and Notary"
                  },
                  {
                    icon: <Code className="w-6 h-6" />,
                    title: "Full Stack Development",
                    description: "Modern web applications with NestJS, NextJS, and TypeScript"
                  },
                  {
                    icon: <Cloud className="w-6 h-6" />,
                    title: "Cloud & CI/CD",
                    description: "Continuous deployment with Azure Cloud, GitLab, and ArgoCD"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="glass rounded-xl p-6 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-blue-400">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Approach</h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I work with Infrastructure as Code principles and automate everything. 
                With a security-first approach, I design and implement scalable and reliable systems. 
                I have a passionate approach to continuous learning and best practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            >
              Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  id: "kubernetes-platform",
                  title: "Kubernetes Management Platform",
                  description: "Fully integrated Kubernetes cluster management with UI. Performing monitoring, scaling, and deployment operations through web interface.",
                  tech: ["Kubernetes", "NextJS", "NestJS", "TypeScript"],
                  category: "Infrastructure"
                },
                {
                  id: "microservices-platform",
                  title: "Microservices Platform",
                  description: "NestJS-based microservice architecture. Event-driven communication, distributed tracing, and service mesh implementation.",
                  tech: ["NestJS", "Docker", "Kubernetes", "TypeScript"],
                  category: "Backend"
                },
                {
                  id: "cicd-automation",
                  title: "CI/CD Pipeline Automation",
                  description: "End-to-end automated deployment pipeline with GitLab, ArgoCD, SonarQube integration. Including quality gates and security scanning.",
                  tech: ["GitLab", "ArgoCD", "SonarQube", "Velero"],
                  category: "DevOps"
                },
                {
                  id: "azure-infrastructure",
                  title: "Azure Cloud Infrastructure",
                  description: "Scalable infrastructure setup on Azure. Resource management with IaC and cost optimization.",
                  tech: ["Azure", "Terraform", "Ansible", "Longhorn"],
                  category: "Cloud"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="glass rounded-xl p-8 hover-lift group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <Link href={`/projects/${project.id}`}>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors cursor-pointer" />
                    </Link>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              variants={fadeIn}
              className="text-center mt-12"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View All Projects <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            >
              Experience
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                variants={fadeIn}
                className="glass rounded-xl p-8 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-blue-400">DevOps Engineer & Full Stack Developer</h3>
                    <p className="text-xl text-gray-300">Ankasoft</p>
                  </div>
                  <div className="text-gray-400">
                    <span className="bg-blue-600/20 px-3 py-1 rounded-full text-sm">2021 - Present</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Working in DevOps engineering and full-stack development areas, 
                  developing Kubernetes cluster management, CI/CD pipeline automation, and secure microservice architectures.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Key Responsibilities:</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Kubernetes cluster management and automation</li>
                      <li>• CI/CD pipeline design and implementation</li>
                      <li>• Microservice architecture development</li>
                      <li>• DevSecOps practices implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Kubernetes', 'Docker', 'GitLab', 'ArgoCD', 'NestJS', 'NextJS', 'Azure'].map((tech) => (
                        <span key={tech} className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            >
              Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <motion.div variants={slideInLeft}>
                <h3 className="text-2xl font-semibold mb-8 text-blue-400">DevOps & Infrastructure</h3>
                <div className="space-y-6">
                  {[
                    { name: "Kubernetes", level: 90 },
                    { name: "Docker & Containerization", level: 95 },
                    { name: "CI/CD (GitLab/ArgoCD)", level: 85 },
                    { name: "Ansible Automation", level: 80 },
                    { name: "Azure Cloud", level: 75 }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Development Skills */}
              <motion.div variants={slideInRight}>
                <h3 className="text-2xl font-semibold mb-8 text-blue-400">Development & Programming</h3>
                <div className="space-y-6">
                  {[
                    { name: "TypeScript/JavaScript", level: 90 },
                    { name: "NestJS (Backend)", level: 85 },
                    { name: "NextJS (Frontend)", level: 80 },
                    { name: "Python", level: 85 },
                    { name: "Microservices Architecture", level: 80 },
                    { name: "Database Management", level: 75 }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Technologies Grid */}
            <motion.div variants={fadeIn} className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Kubernetes", "Docker", "GitLab", "ArgoCD", "SonarQube",
                  "NestJS", "NextJS", "TypeScript", "Python", "Ansible", "Azure",
                  "Velero", "Longhorn", "DevSecOps", "Terraform"
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={fadeIn}
                    className="glass rounded-lg p-4 text-center hover-lift group"
                  >
                    <span className="text-white group-hover:text-blue-400 transition-colors text-sm">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 mb-12"
            >
              If you'd like to collaborate on DevOps, infrastructure projects, or development, feel free to reach out!
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Email",
                  content: "contact@kelesabdullah.com",
                  link: "mailto:contact@kelesabdullah.com"
                },
                {
                  icon: <Linkedin className="w-8 h-8" />,
                  title: "LinkedIn",
                  content: "linkedin.com/in/kelesabdullah",
                  link: "https://linkedin.com/in/kelesabdullah"
                },
                {
                  icon: <Github className="w-8 h-8" />,
                  title: "GitHub",
                  content: "github.com/kelesabdullah",
                  link: "https://github.com/kelesabdullah"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="glass rounded-xl p-6 hover-lift group"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform inline-block">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{contact.title}</h3>
                  <Link
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {contact.content}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link
                href="mailto:contact@kelesabdullah.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Abdullah Keleş. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
