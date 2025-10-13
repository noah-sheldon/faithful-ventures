"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Code, Search, Brain } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Financial Platform Security",
      client: "Financial Services Capability",
      industry: "Financial Services",
      category: "cybersecurity",
      description:
        "We can help you build secure, compliant banking platforms that handle high-volume transactions with enterprise-grade security.",
      challenge:
        "Financial institutions need robust security measures, PCI DSS compliance, and scalable architecture to handle growing transaction volumes.",
      solution:
        "We implement cloud-native architectures on AWS, zero-trust security frameworks, comprehensive penetration testing, and ensure full compliance with financial regulations.",
      results: [
        { metric: "PCI DSS", label: "Compliance Ready" },
        { metric: "99.99%", label: "Target Uptime" },
        { metric: "Scalable", label: "Architecture" },
        { metric: "24/7", label: "Security Monitoring" },
      ],
      technologies: [
        "AWS Enterprise",
        "Zero-Trust Security",
        "PCI DSS Compliance",
        "Financial APIs",
      ],
      testimonial:
        "We can deliver the secure, scalable financial infrastructure your institution needs to grow confidently and remain compliant.",
      clientName: "Our Financial Security Team",
      clientTitle: "Cybersecurity Specialists",
      image: "/placeholder-fintech.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered E-Commerce Solutions",
      client: "E-Commerce Enhancement",
      industry: "Retail Technology",
      category: "ai-automation",
      description:
        "We can build intelligent e-commerce platforms with AI-driven recommendations, inventory optimization, and personalized customer experiences.",
      challenge:
        "Online retailers struggle with inventory management, customer personalization, and converting visitors into loyal customers.",
      solution:
        "We develop AI recommendation engines, predictive analytics systems, real-time inventory management, and personalized customer journey automation.",
      results: [
        { metric: "AI-Driven", label: "Recommendations" },
        { metric: "Real-time", label: "Inventory Sync" },
        { metric: "Personalized", label: "Experiences" },
        { metric: "Mobile-First", label: "Design" },
      ],
      technologies: [
        "Machine Learning",
        "Predictive Analytics",
        "E-commerce APIs",
        "Customer Intelligence",
      ],
      testimonial:
        "We can transform your retail business with intelligent automation that learns from your customers and optimizes your operations.",
      clientName: "Our AI Development Team",
      clientTitle: "Machine Learning Engineers",
      image: "/placeholder-ecommerce.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "AI-Driven SEO & Search Optimization",
      client: "Advanced SEO Solutions",
      industry: "Digital Marketing",
      category: "seo",
      description:
        "We can optimize your content for AI search engines like ChatGPT, Perplexity, and Claude while building high-quality backlinks that boost traditional search rankings.",
      challenge:
        "Modern SEO requires optimization for both traditional search engines and AI-powered search platforms while building authoritative backlink profiles.",
      solution:
        "We implement AI-optimized content strategies, create structured data for AI search engines, build high-quality backlinks, and ensure visibility across all search platforms.",
      results: [
        { metric: "AI Search", label: "Optimization" },
        { metric: "Quality", label: "Backlinks" },
        { metric: "Structured", label: "Data" },
        { metric: "Multi-Platform", label: "Visibility" },
      ],
      technologies: [
        "AI SEO Tools",
        "Schema Markup",
        "Link Building",
        "AI Content Optimization",
      ],
      testimonial:
        "We can position your content to be discovered by both traditional search engines and AI platforms like ChatGPT and Perplexity.",
      clientName: "Our AI SEO Team",
      clientTitle: "AI Search Specialists",
      image: "/placeholder-saas.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Manufacturing Process Automation",
      client: "Industrial Automation",
      industry: "Manufacturing",
      category: "ai-automation",
      description:
        "We can modernize manufacturing operations with IoT sensors, predictive analytics, and automated quality control systems.",
      challenge:
        "Manufacturers need to optimize efficiency, reduce costs, and gain real-time visibility into their operations for competitive advantage.",
      solution:
        "We implement IoT sensor networks, develop predictive maintenance systems, automate quality control processes, and create comprehensive monitoring dashboards.",
      results: [
        { metric: "IoT", label: "Integration" },
        { metric: "Predictive", label: "Analytics" },
        { metric: "Quality", label: "Automation" },
        { metric: "Real-time", label: "Monitoring" },
      ],
      technologies: [
        "IoT Sensors",
        "Predictive Analytics",
        "Python",
        "Industrial APIs",
      ],
      testimonial:
        "We can help you achieve Industry 4.0 transformation with smart automation that optimizes your operations and reduces costs.",
      clientName: "Our Industrial Solutions Team",
      clientTitle: "Automation Engineers",
      image: "/placeholder-manufacturing.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Healthcare Compliance & Platforms",
      client: "Healthcare Technology",
      industry: "Healthcare",
      category: "web-development",
      description:
        "We can build HIPAA-compliant healthcare platforms with modern interfaces, robust security, and seamless patient experiences.",
      challenge:
        "Healthcare providers need secure, compliant systems that improve patient engagement while protecting sensitive medical data.",
      solution:
        "We develop responsive patient portals with full HIPAA compliance, integrate telehealth capabilities, and implement comprehensive security measures.",
      results: [
        { metric: "HIPAA", label: "Compliant" },
        { metric: "Secure", label: "Architecture" },
        { metric: "Patient", label: "Engagement" },
        { metric: "Mobile", label: "Optimized" },
      ],
      technologies: ["React", "Node.js", "HIPAA Compliance", "Healthcare APIs"],
      testimonial:
        "We can create secure, user-friendly healthcare platforms that improve patient outcomes while ensuring complete compliance.",
      clientName: "Our Healthcare Development Team",
      clientTitle: "Healthcare Technology Specialists",
      image: "/placeholder-healthcare.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Startup MVP Development",
      client: "Startup Solutions",
      industry: "Technology Startups",
      category: "web-development",
      description:
        "We can help startups launch secure, scalable MVPs quickly with integrated security testing and investor-ready architecture.",
      challenge:
        "Startups need to build and launch products quickly while ensuring security, scalability, and investor confidence in their technology.",
      solution:
        "We develop full-stack applications with modern frameworks, implement AWS deployment, conduct security assessments, and establish CI/CD pipelines.",
      results: [
        { metric: "Rapid", label: "MVP Launch" },
        { metric: "Secure", label: "Architecture" },
        { metric: "Scalable", label: "Infrastructure" },
        { metric: "Investor", label: "Ready" },
      ],
      technologies: ["React", "Node.js", "AWS", "Security Testing"],
      testimonial:
        "We can help you build and secure your MVP efficiently, giving you the foundation to scale and attract investment.",
      clientName: "Our Startup Solutions Team",
      clientTitle: "Full-Stack Developers",
      image: "/placeholder-startup.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Enterprise Security Assessment",
      client: "Cybersecurity Services",
      industry: "Enterprise Security",
      category: "cybersecurity",
      description:
        "We can assess and strengthen your organization's security posture with comprehensive audits, penetration testing, and compliance frameworks.",
      challenge:
        "Organizations need thorough security assessments to identify vulnerabilities, ensure compliance, and protect against evolving cyber threats.",
      solution:
        "We conduct comprehensive security audits, perform penetration testing, implement security frameworks, and ensure compliance with industry standards.",
      results: [
        { metric: "Security", label: "Audit" },
        { metric: "Penetration", label: "Testing" },
        { metric: "Compliance", label: "Framework" },
        { metric: "Risk", label: "Assessment" },
      ],
      technologies: [
        "Security Frameworks",
        "Penetration Testing",
        "Compliance Tools",
        "Risk Management",
      ],
      testimonial:
        "We can help you identify and address security vulnerabilities before they become costly breaches, ensuring comprehensive protection.",
      clientName: "Our Cybersecurity Team",
      clientTitle: "Security Consultants",
      image: "/placeholder-government.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Next.js E-Commerce Platform",
      client: "Modern E-Commerce Solutions",
      industry: "Retail & E-Commerce",
      category: "web-development",
      description:
        "We can build high-performance e-commerce platforms using Next.js with server-side rendering, optimized performance, and seamless user experiences.",
      challenge:
        "E-commerce businesses need fast, SEO-optimized websites that convert visitors into customers while handling high traffic loads efficiently.",
      solution:
        "We develop modern e-commerce platforms using Next.js 14+ with App Router, integrate payment systems, implement advanced SEO, and ensure mobile-first responsive design.",
      results: [
        { metric: "Next.js 14+", label: "Latest Framework" },
        { metric: "SSR/SSG", label: "Optimized" },
        { metric: "Payment", label: "Integration" },
        { metric: "Mobile-First", label: "Responsive" },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe API",
      ],
      testimonial:
        "We can create lightning-fast e-commerce experiences that boost conversions and provide exceptional user experiences across all devices.",
      clientName: "Our Next.js Development Team",
      clientTitle: "Frontend Specialists",
      image: "/placeholder-ecommerce.jpg",
      featured: false,
    },
    {
      id: 9,
      title: "Node.js API & Backend Systems",
      client: "Backend Infrastructure",
      industry: "Software Development",
      category: "web-development",
      description:
        "We can build scalable RESTful APIs and backend systems using Node.js with Express, ensuring robust data management and secure authentication.",
      challenge:
        "Applications need reliable backend infrastructure that can scale with growth while maintaining security and performance standards.",
      solution:
        "We develop RESTful APIs using Node.js and Express, implement JWT authentication, integrate databases, and ensure proper error handling and logging.",
      results: [
        { metric: "RESTful", label: "APIs" },
        { metric: "JWT", label: "Authentication" },
        { metric: "Database", label: "Integration" },
        { metric: "Scalable", label: "Architecture" },
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT"],
      testimonial:
        "We can build robust backend systems that grow with your business while maintaining security and performance at scale.",
      clientName: "Our Backend Development Team",
      clientTitle: "Node.js Engineers",
      image: "/placeholder-startup.jpg",
      featured: false,
    },
    {
      id: 10,
      title: "Python Web Applications",
      client: "Python Development Solutions",
      industry: "Web Applications",
      category: "web-development",
      description:
        "We can develop powerful web applications using Python frameworks like Django and FastAPI, perfect for data-driven applications and complex business logic.",
      challenge:
        "Businesses need robust web applications that can handle complex data processing, integrations, and provide reliable performance for mission-critical operations.",
      solution:
        "We build web applications using Python with Django/FastAPI, implement database solutions, create data processing pipelines, and ensure comprehensive testing.",
      results: [
        { metric: "Django/FastAPI", label: "Frameworks" },
        { metric: "Data", label: "Processing" },
        { metric: "API", label: "Integration" },
        { metric: "Testing", label: "Coverage" },
      ],
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"],
      testimonial:
        "We can leverage Python's power to build sophisticated web applications that handle complex business requirements with reliability and efficiency.",
      clientName: "Our Python Development Team",
      clientTitle: "Python Engineers",
      image: "/placeholder-saas.jpg",
      featured: false,
    },
    {
      id: 11,
      title: "Full-Stack Web Applications",
      client: "Complete Web Solutions",
      industry: "Custom Software",
      category: "web-development",
      description:
        "We can create complete full-stack applications combining Next.js frontends with Node.js/Python backends for comprehensive business solutions.",
      challenge:
        "Businesses need end-to-end web solutions that integrate frontend user experiences with robust backend systems and third-party services.",
      solution:
        "We develop full-stack applications using Next.js for frontend, Node.js or Python for backend, implement database design, and ensure seamless API integrations.",
      results: [
        { metric: "Full-Stack", label: "Solution" },
        { metric: "Modern", label: "Tech Stack" },
        { metric: "API", label: "Integrations" },
        { metric: "Responsive", label: "Design" },
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Python",
        "React",
        "TypeScript",
        "PostgreSQL",
      ],
      testimonial:
        "We can deliver complete web solutions that provide exceptional user experiences while powering your business operations efficiently.",
      clientName: "Our Full-Stack Team",
      clientTitle: "Full-Stack Developers",
      image: "/placeholder-healthcare.jpg",
      featured: false,
    },
    {
      id: 12,
      title: "AI Agents & Intelligent Automation",
      client: "AI Agent Solutions",
      industry: "Artificial Intelligence",
      category: "ai-automation",
      description:
        "We can build intelligent AI agents that automate complex tasks, make decisions, and interact with users naturally using advanced language models and automation frameworks.",
      challenge:
        "Businesses need intelligent systems that can handle complex workflows, make contextual decisions, and provide human-like interactions while reducing manual workload.",
      solution:
        "We develop AI agents using OpenAI GPT models, implement conversational interfaces, create decision-making workflows, and integrate with existing business systems.",
      results: [
        { metric: "AI Agents", label: "Deployment" },
        { metric: "Natural", label: "Language" },
        { metric: "Decision", label: "Making" },
        { metric: "Workflow", label: "Automation" },
      ],
      technologies: [
        "OpenAI GPT",
        "LangChain",
        "Python",
        "API Integrations",
        "Machine Learning",
      ],
      testimonial:
        "We can create intelligent AI agents that understand context, make smart decisions, and automate complex business processes naturally.",
      clientName: "Our AI Development Team",
      clientTitle: "AI Engineers",
      image: "/placeholder-startup.jpg",
      featured: false,
    },
    {
      id: 13,
      title: "n8n Workflow Automation",
      client: "Process Automation Solutions",
      industry: "Business Automation",
      category: "ai-automation",
      description:
        "We can implement powerful workflow automation using n8n to connect your tools, automate repetitive tasks, and streamline business processes across platforms.",
      challenge:
        "Companies struggle with disconnected tools and manual processes that slow down operations and create inefficiencies across departments.",
      solution:
        "We design and implement n8n workflows that connect APIs, automate data transfers, trigger actions based on events, and create seamless integrations between your business tools.",
      results: [
        { metric: "n8n", label: "Workflows" },
        { metric: "API", label: "Integrations" },
        { metric: "Process", label: "Automation" },
        { metric: "Real-time", label: "Triggers" },
      ],
      technologies: [
        "n8n",
        "API Integrations",
        "Webhooks",
        "Database Connectors",
        "Cloud Functions",
      ],
      testimonial:
        "We can streamline your operations by connecting all your tools and automating repetitive tasks with powerful n8n workflows.",
      clientName: "Our Automation Team",
      clientTitle: "Workflow Specialists",
      image: "/placeholder-manufacturing.jpg",
      featured: false,
    },
    {
      id: 14,
      title: "RAG Knowledge Systems",
      client: "Intelligent Knowledge Solutions",
      industry: "Knowledge Management",
      category: "ai-automation",
      description:
        "We can build Retrieval Augmented Generation (RAG) systems that provide accurate, context-aware AI responses based on your specific knowledge base and documents.",
      challenge:
        "Organizations have vast amounts of information but struggle to make it accessible and actionable for employees and customers through intelligent search and answers.",
      solution:
        "We implement RAG systems using vector databases, document processing pipelines, and AI models that can understand and answer questions based on your specific data and documents.",
      results: [
        { metric: "RAG", label: "System" },
        { metric: "Vector", label: "Database" },
        { metric: "Document", label: "Processing" },
        { metric: "Context-Aware", label: "Responses" },
      ],
      technologies: [
        "RAG Architecture",
        "Vector Databases",
        "LangChain",
        "OpenAI Embeddings",
        "Document AI",
      ],
      testimonial:
        "We can transform your knowledge base into an intelligent system that provides accurate, contextual answers to complex questions instantly.",
      clientName: "Our AI Knowledge Team",
      clientTitle: "RAG Specialists",
      image: "/placeholder-healthcare.jpg",
      featured: false,
    },
    {
      id: 15,
      title: "Custom AI Chatbots & Assistants",
      client: "Conversational AI Solutions",
      industry: "Customer Service",
      category: "ai-automation",
      description:
        "We can develop intelligent chatbots and AI assistants that understand context, provide accurate information, and handle complex customer interactions naturally.",
      challenge:
        "Businesses need intelligent customer service solutions that can understand context, access relevant information, and provide personalized assistance 24/7.",
      solution:
        "We build custom AI chatbots using advanced language models, integrate with knowledge bases, implement conversation memory, and create natural dialogue flows.",
      results: [
        { metric: "AI", label: "Chatbots" },
        { metric: "Context", label: "Understanding" },
        { metric: "24/7", label: "Availability" },
        { metric: "Natural", label: "Conversations" },
      ],
      technologies: [
        "OpenAI GPT",
        "Conversational AI",
        "Natural Language Processing",
        "Chat Interfaces",
        "Knowledge Integration",
      ],
      testimonial:
        "We can create intelligent conversational experiences that understand your customers and provide accurate, helpful assistance around the clock.",
      clientName: "Our Conversational AI Team",
      clientTitle: "Chatbot Developers",
      image: "/placeholder-saas.jpg",
      featured: false,
    },
    {
      id: 17,
      title: "Social Media Strategy & Management",
      client: "Social Media Solutions",
      industry: "Digital Marketing",
      category: "seo",
      description:
        "We can create and execute comprehensive social media strategies that build brand awareness, engage audiences, and drive conversions across all major platforms.",
      challenge:
        "Businesses struggle to maintain consistent, engaging social media presence while measuring ROI and converting followers into customers.",
      solution:
        "We develop platform-specific content strategies, implement social media automation, create engaging visual content, and track performance metrics that matter.",
      results: [
        { metric: "Multi-Platform", label: "Strategy" },
        { metric: "Content", label: "Creation" },
        { metric: "Audience", label: "Engagement" },
        { metric: "ROI", label: "Tracking" },
      ],
      technologies: [
        "Social Media Tools",
        "Content Creation",
        "Analytics",
        "Automation Platforms",
      ],
      testimonial:
        "We can transform your social media presence into a powerful engine for brand awareness, engagement, and customer acquisition.",
      clientName: "Our Social Media Team",
      clientTitle: "Social Media Strategists",
      image: "/placeholder-ecommerce.jpg",
      featured: false,
    },
    {
      id: 18,
      title: "Advanced Link Building & Authority",
      client: "SEO Authority Building",
      industry: "Search Engine Optimization",
      category: "seo",
      description:
        "We can build high-quality backlink profiles through strategic outreach, content marketing, and digital PR that establishes your domain authority.",
      challenge:
        "Building legitimate, high-quality backlinks that improve search rankings while avoiding penalties from search engines requires expertise and strategy.",
      solution:
        "We execute targeted link building campaigns, create linkable assets, implement digital PR strategies, and build relationships with authoritative websites in your industry.",
      results: [
        { metric: "Quality", label: "Backlinks" },
        { metric: "Domain", label: "Authority" },
        { metric: "Digital", label: "PR" },
        { metric: "Industry", label: "Relationships" },
      ],
      technologies: [
        "Link Building Tools",
        "PR Outreach",
        "Content Assets",
        "Authority Tracking",
      ],
      testimonial:
        "We can establish your website as an authoritative source in your industry through strategic, white-hat link building techniques.",
      clientName: "Our Link Building Team",
      clientTitle: "SEO Authority Specialists",
      image: "/placeholder-startup.jpg",
      featured: false,
    },
    {
      id: 20,
      title: "Enterprise Security Audits & Compliance",
      client: "Cybersecurity Excellence",
      industry: "Enterprise Security",
      category: "cybersecurity",
      description:
        "We can conduct comprehensive security audits, penetration testing, and ensure compliance with ISO 27001, SOC 2, and other industry standards.",
      challenge:
        "Enterprises need thorough security assessments to identify vulnerabilities, achieve compliance certifications, and protect against sophisticated cyber threats.",
      solution:
        "We perform detailed security audits, execute penetration testing, implement security frameworks, and guide organizations through compliance certifications.",
      results: [
        { metric: "Security", label: "Audits" },
        { metric: "Penetration", label: "Testing" },
        { metric: "Compliance", label: "Certifications" },
        { metric: "Risk", label: "Mitigation" },
      ],
      technologies: [
        "Security Frameworks",
        "Penetration Testing Tools",
        "Compliance Standards",
        "Vulnerability Assessment",
      ],
      testimonial:
        "We can fortify your organization's security posture and ensure compliance with industry standards through comprehensive security assessments.",
      clientName: "Our Cybersecurity Team",
      clientTitle: "Security Consultants",
      image: "/placeholder-government.jpg",
      featured: false,
    },
    {
      id: 21,
      title: "Full-Stack Enterprise Applications",
      client: "Enterprise Web Solutions",
      industry: "Custom Software Development",
      category: "web-development",
      description:
        "We can build scalable, secure enterprise applications using modern full-stack technologies with integrated security, performance optimization, and compliance features.",
      challenge:
        "Enterprises need sophisticated web applications that handle complex business logic, ensure data security, and scale with organizational growth.",
      solution:
        "We develop full-stack applications using Next.js, Node.js, Python, and PostgreSQL with integrated security measures, performance optimization, and enterprise-grade infrastructure.",
      results: [
        { metric: "Full-Stack", label: "Architecture" },
        { metric: "Enterprise", label: "Security" },
        { metric: "Scalable", label: "Infrastructure" },
        { metric: "Performance", label: "Optimized" },
      ],
      technologies: [
        "Next.js 15",
        "Node.js",
        "Python",
        "PostgreSQL",
        "AWS/Azure",
        "Security Frameworks",
      ],
      testimonial:
        "We can deliver enterprise-grade full-stack applications that meet your complex business requirements while ensuring security and scalability.",
      clientName: "Our Full-Stack Enterprise Team",
      clientTitle: "Enterprise Developers",
      image: "/placeholder-fintech.jpg",
      featured: true,
    },
    {
      id: 22,
      title: "Digital Transformation Consulting",
      client: "Enterprise Modernization",
      industry: "Enterprise Technology",
      category: "ai-automation",
      description:
        "We can guide your digital transformation journey with modern technologies, process automation, and data-driven insights.",
      challenge:
        "Enterprises need to modernize legacy systems, automate manual processes, and leverage data for competitive advantage.",
      solution:
        "We assess current systems, design transformation roadmaps, implement modern technologies, automate key processes, and establish data analytics capabilities.",
      results: [
        { metric: "Digital", label: "Strategy" },
        { metric: "Process", label: "Automation" },
        { metric: "Data", label: "Analytics" },
        { metric: "Modern", label: "Architecture" },
      ],
      technologies: [
        "Cloud Platforms",
        "Automation Tools",
        "Data Analytics",
        "Modern Frameworks",
      ],
      testimonial:
        "We can help you navigate digital transformation successfully, modernizing your operations while minimizing disruption to your business.",
      clientName: "Our Transformation Team",
      clientTitle: "Digital Strategy Consultants",
      image: "/placeholder-manufacturing.jpg",
      featured: false,
    },
  ];

  const filterCategories = [
    { id: "all", name: "All Services", icon: null },
    { id: "web-development", name: "Web Development", icon: Code },
    { id: "seo", name: "SEO & Marketing", icon: Search },
    { id: "ai-automation", name: "AI & Automation", icon: Brain },
    { id: "cybersecurity", name: "Cybersecurity", icon: Shield },
  ];

  const filteredCaseStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  const featuredStudies = caseStudies.filter((study) => study.featured);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our Capabilities &<span className="text-blue-600"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how we can help your business achieve digital
            transformation, improve security, and drive growth through
            innovative solutions tailored to your industry.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>Fresh, Innovative Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>Latest Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>Competitive Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth look at how we can transform your business through
              strategic digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredStudies.map((study) => (
              <Card
                key={study.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {study.industry}
                    </h3>
                    <p className="text-blue-100">{study.client}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {study.category === "cybersecurity" && (
                      <Shield className="w-5 h-5 text-red-600" />
                    )}
                    {study.category === "ai-automation" && (
                      <Brain className="w-5 h-5 text-purple-600" />
                    )}
                    {study.category === "seo" && (
                      <Search className="w-5 h-5 text-green-600" />
                    )}
                    {study.category === "web-development" && (
                      <Code className="w-5 h-5 text-blue-600" />
                    )}
                    <Badge variant="secondary" className="bg-slate-100">
                      {
                        filterCategories.find(
                          (cat) => cat.id === study.category
                        )?.name
                      }
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 4).map((result, resultIdx) => (
                      <div key={resultIdx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <blockquote className="text-gray-700 italic mb-2">
                          &quot;{study.testimonial}&quot;
                        </blockquote>
                        <cite className="text-sm text-gray-500">
                          {study.clientName}, {study.clientTitle}
                        </cite>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our complete range of capabilities across different
              industries and service areas.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filterCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    variant={
                      activeFilter === category.id ? "default" : "outline"
                    }
                    className={`${
                      activeFilter === category.id
                        ? "bg-blue-600 text-white"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent className="w-4 h-4 mr-2" />
                    )}
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card
                key={study.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-slate-600 to-slate-700 h-32 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm text-slate-200">{study.industry}</p>
                    <h4 className="font-semibold">{study.client}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {study.category === "cybersecurity" && (
                      <Shield className="w-4 h-4 text-red-600" />
                    )}
                    {study.category === "ai-automation" && (
                      <Brain className="w-4 h-4 text-purple-600" />
                    )}
                    {study.category === "seo" && (
                      <Search className="w-4 h-4 text-green-600" />
                    )}
                    {study.category === "web-development" && (
                      <Code className="w-4 h-4 text-blue-600" />
                    )}
                    <Badge variant="secondary" className="text-xs">
                      {
                        filterCategories.find(
                          (cat) => cat.id === study.category
                        )?.name
                      }
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((result, resultIdx) => (
                      <div
                        key={resultIdx}
                        className="text-center bg-slate-50 rounded-lg p-3"
                      >
                        <div className="text-lg font-bold text-blue-600">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <blockquote className="text-xs text-gray-600 italic mb-3 line-clamp-2">
                    &quot;{study.testimonial}&quot;
                  </blockquote>

                  <div className="text-xs text-gray-500">
                    {study.clientName}, {study.clientTitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Faithful Ventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a new agency, we bring fresh perspectives, cutting-edge
              technologies, and competitive pricing to deliver exceptional
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                title: "Modern Technologies",
                description:
                  "We use the latest frameworks, tools, and best practices to build future-ready solutions that scale with your business.",
                benefit: "Stay ahead of the competition",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Security-First Approach",
                description:
                  "Every solution we build includes comprehensive security measures from the ground up, protecting your data and reputation.",
                benefit: "Peace of mind and compliance",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
                title: "Competitive Pricing",
                description:
                  "As a new agency, we offer premium services at competitive rates while delivering exceptional value and quality.",
                benefit: "Maximum ROI on your investment",
              },
            ].map((benefit, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-blue-600">
                      {benefit.benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let&apos;s discuss your project and create a custom solution that
            drives real results for your business. Schedule a free consultation
            to explore how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <a
                href="https://calendar.app.google/a9nebr5GxsShHSNy7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-300" />
              <span>Fresh, innovative approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Competitive pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No obligation consultation</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
