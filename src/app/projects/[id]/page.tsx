'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, CheckCircle, Code, Database, Shield, Layers, Server, Cloud, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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

// Project data
const projectsData = {
  "kubernetes-platform": {
    title: "Kubernetes Management Platform",
    category: "Infrastructure",
    status: "Production",
    duration: "6 months",
    team: "3 developers",
    description: "A comprehensive web-based platform for managing Kubernetes clusters with an intuitive user interface. This platform provides complete control over containerized applications, from deployment to monitoring and scaling.",
    problem: "Managing Kubernetes clusters through command-line tools was time-consuming and error-prone for the development team. There was a need for a user-friendly interface that could handle complex Kubernetes operations while maintaining security and reliability.",
    solution: "Developed a full-stack web application that abstracts Kubernetes complexity behind an intuitive UI. The platform integrates directly with Kubernetes APIs to provide real-time cluster management capabilities.",
    results: [
      "Reduced deployment time by 70%",
      "Increased team productivity by 50%",
      "Zero downtime deployments achieved",
      "Improved monitoring and observability"
    ],
    technologies: [
      { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
      { name: "NextJS", icon: "⚛️", category: "Frontend" },
      { name: "NestJS", icon: "🦅", category: "Backend" },
      { name: "TypeScript", icon: "📘", category: "Language" },
      { name: "Docker", icon: "🐳", category: "Containerization" },
      { name: "Helm", icon: "⛵", category: "Package Manager" },
      { name: "Prometheus", icon: "📊", category: "Monitoring" },
      { name: "Grafana", icon: "📈", category: "Visualization" }
    ],
    features: [
      "Real-time cluster monitoring",
      "One-click application deployment",
      "Resource management and scaling",
      "Log aggregation and analysis",
      "Role-based access control",
      "Backup and disaster recovery"
    ],
    architecture: [
      "Frontend: NextJS with React and TypeScript",
      "Backend: NestJS REST API with authentication",
      "Database: PostgreSQL for metadata storage",
      "Container Registry: Harbor for image management",
      "Monitoring: Prometheus + Grafana stack",
      "Security: RBAC integration with Kubernetes"
    ]
  },
  "microservices-platform": {
    title: "Microservices Platform",
    category: "Backend",
    status: "Development",
    duration: "8 months",
    team: "4 developers",
    description: "A scalable microservices architecture built with NestJS, featuring event-driven communication, distributed tracing, and service mesh implementation for high-performance applications.",
    problem: "The monolithic application was becoming difficult to maintain and scale. Different teams needed to work independently on different features without affecting the entire system.",
    solution: "Designed and implemented a microservices architecture with proper service boundaries, event-driven communication, and comprehensive monitoring to enable independent development and deployment.",
    results: [
      "50% improvement in development velocity",
      "99.9% system availability achieved",
      "Independent service scaling",
      "Faster feature delivery cycles"
    ],
    technologies: [
      { name: "NestJS", icon: "🦅", category: "Framework" },
      { name: "TypeScript", icon: "📘", category: "Language" },
      { name: "Docker", icon: "🐳", category: "Containerization" },
      { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
      { name: "Redis", icon: "📦", category: "Message Broker" },
      { name: "PostgreSQL", icon: "🐘", category: "Database" },
      { name: "Istio", icon: "🕸️", category: "Service Mesh" },
      { name: "Jaeger", icon: "🔍", category: "Tracing" }
    ],
    features: [
      "Event-driven architecture",
      "Distributed tracing and monitoring",
      "API Gateway with rate limiting",
      "Service discovery and load balancing",
      "Circuit breaker pattern implementation",
      "Centralized logging and metrics"
    ],
    architecture: [
      "Services: NestJS microservices with TypeScript",
      "Communication: Event-driven with Redis pub/sub",
      "Gateway: API Gateway for external communication",
      "Database: PostgreSQL with service-specific schemas",
      "Monitoring: Prometheus, Grafana, and Jaeger",
      "Service Mesh: Istio for traffic management"
    ]
  },
  "cicd-automation": {
    title: "CI/CD Pipeline Automation",
    category: "DevOps",
    status: "Production",
    duration: "5 months",
    team: "2 developers",
    description: "A comprehensive CI/CD pipeline system integrating GitLab, ArgoCD, and SonarQube for automated testing, security scanning, and deployment with quality gates and approval workflows.",
    problem: "Manual deployment processes were slow and error-prone. There was no standardized way to ensure code quality and security before production deployments.",
    solution: "Implemented a fully automated CI/CD pipeline with multiple stages including testing, security scanning, quality gates, and automated deployment using GitOps principles.",
    results: [
      "90% reduction in deployment time",
      "Zero failed deployments in production",
      "100% code coverage enforcement",
      "Automated security vulnerability detection"
    ],
    technologies: [
      { name: "GitLab", icon: "🦊", category: "CI/CD" },
      { name: "ArgoCD", icon: "🚀", category: "GitOps" },
      { name: "SonarQube", icon: "🔍", category: "Code Quality" },
      { name: "Velero", icon: "💾", category: "Backup" },
      { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
      { name: "Docker", icon: "🐳", category: "Containerization" },
      { name: "Helm", icon: "⛵", category: "Package Manager" },
      { name: "Trivy", icon: "🛡️", category: "Security" }
    ],
    features: [
      "Automated testing and quality gates",
      "Security vulnerability scanning",
      "GitOps-based deployment",
      "Rollback and disaster recovery",
      "Multi-environment support",
      "Approval workflows and notifications"
    ],
    architecture: [
      "Source: GitLab repositories with branch protection",
      "CI: GitLab CI with automated testing pipeline",
      "Quality: SonarQube for code analysis",
      "Security: Trivy for container security scanning",
      "CD: ArgoCD for GitOps deployment",
      "Backup: Velero for cluster backup and recovery"
    ]
  },
  "azure-infrastructure": {
    title: "Azure Cloud Infrastructure",
    category: "Cloud",
    status: "Production",
    duration: "3 months",
    team: "3 developers",
    description: "A scalable and cost-optimized cloud infrastructure on Microsoft Azure using Infrastructure as Code principles, featuring automated resource management and monitoring.",
    problem: "The existing on-premises infrastructure was costly to maintain and couldn't scale efficiently during peak loads. Manual resource provisioning was time-consuming.",
    solution: "Migrated to Azure cloud with Infrastructure as Code approach using Terraform and ARM templates. Implemented auto-scaling, cost optimization, and comprehensive monitoring.",
    results: [
      "40% reduction in infrastructure costs",
      "99.99% uptime achievement",
      "Auto-scaling during peak loads",
      "Improved disaster recovery capabilities"
    ],
    technologies: [
      { name: "Azure", icon: "☁️", category: "Cloud Platform" },
      { name: "Terraform", icon: "🏗️", category: "IaC" },
      { name: "Ansible", icon: "⚙️", category: "Configuration" },
      { name: "Longhorn", icon: "🗄️", category: "Storage" },
      { name: "ARM Templates", icon: "📋", category: "Deployment" },
      { name: "Azure Monitor", icon: "📊", category: "Monitoring" },
      { name: "Key Vault", icon: "🔐", category: "Security" },
      { name: "Log Analytics", icon: "📈", category: "Logging" }
    ],
    features: [
      "Infrastructure as Code deployment",
      "Auto-scaling and load balancing",
      "Cost optimization and monitoring",
      "Backup and disaster recovery",
      "Security compliance and governance",
      "Multi-region deployment support"
    ],
    architecture: [
      "IaC: Terraform for resource provisioning",
      "Configuration: Ansible for server configuration",
      "Storage: Longhorn for persistent volumes",
      "Monitoring: Azure Monitor and Log Analytics",
      "Security: Azure Key Vault for secrets management",
      "Networking: VNet with subnets and security groups"
    ]
  }
};

export default function ProjectDetail() {
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const projectId = params?.id as string;

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

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Mobile Navigation */}
      <MobileNav currentPage={`/projects/${projectId}`} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/projects" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back to Projects</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-4">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  project.status === 'Production' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></span>
                <span className="text-gray-400 text-sm">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {project.description}
            </p>
            
            {/* Mobile Project Meta */}
            <div className="md:hidden flex justify-center flex-wrap gap-3 mb-8">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  project.status === 'Production' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></span>
                <span className="text-gray-400 text-sm">{project.status}</span>
              </div>
            </div>
            
            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-lg p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-lg">{project.duration}</div>
                <div className="text-gray-400 text-sm">Duration</div>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-lg">{project.team}</div>
                <div className="text-gray-400 text-sm">Team Size</div>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-lg">{project.category}</div>
                <div className="text-gray-400 text-sm">Category</div>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-lg">{project.status}</div>
                <div className="text-gray-400 text-sm">Status</div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Challenge & Solution</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">The Problem</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Our Solution</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{project.solution}</p>
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Results & Impact</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Architecture */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Architecture Overview</h2>
                <div className="space-y-4">
                  {project.architecture.map((item, index) => (
                    <div key={index} className="text-gray-300 leading-relaxed text-lg">
                      • {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Technologies Used</h3>
                <div className="space-y-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
                      <span className="text-3xl">{tech.icon}</span>
                      <div>
                        <div className="text-white font-medium text-lg">{tech.name}</div>
                        <div className="text-gray-400 text-sm">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Project Links</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-3 bg-gray-700 text-white py-4 rounded-lg hover:bg-gray-600 transition-colors font-medium">
                    <Github className="w-5 h-5" />
                    View Repository
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </button>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div variants={fadeIn} className="glass rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Interested in Similar Work?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how I can help with your project.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 