"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Shield, Zap, Code, Search, Brain } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "FinTech Platform Security & Performance Overhaul",
      client: "SecureBank Ltd",
      industry: "Financial Services",
      category: "cybersecurity",
      description: "Comprehensive security assessment and performance optimization for a growing payment processor.",
      challenge: "Critical security vulnerabilities and poor site performance were blocking enterprise client onboarding and SOC 2 compliance.",
      solution: "Implemented end-to-end penetration testing, fixed all critical vulnerabilities, optimized database queries, and established continuous security monitoring.",
      results: [
        { metric: "99.9%", label: "Uptime Achieved" },
        { metric: "0", label: "Critical Vulnerabilities" },
        { metric: "50%", label: "Faster Page Load" },
        { metric: "30 Days", label: "To SOC 2 Compliance" }
      ],
      technologies: ["AWS Security", "Penetration Testing", "Performance Optimization", "SOC 2"],
      testimonial: "FaithfulVC transformed our security posture and performance. We went from failing audits to SOC 2 compliance in just 30 days.",
      clientName: "David Chen",
      clientTitle: "CTO, SecureBank Ltd",
      image: "/placeholder-fintech.jpg",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce AI Recommendation Engine",
      client: "FashionForward",
      industry: "Retail",
      category: "ai-automation",
      description: "Custom AI-powered recommendation system that increased sales conversion and customer engagement.",
      challenge: "Low conversion rates and poor product discovery were limiting revenue growth despite high traffic volumes.",
      solution: "Developed machine learning recommendation engine, implemented real-time personalization, and created automated email marketing workflows.",
      results: [
        { metric: "40%", label: "Increase in Conversions" },
        { metric: "65%", label: "Higher AOV" },
        { metric: "3x", label: "Better Product Discovery" },
        { metric: "80%", label: "Email Open Rates" }
      ],
      technologies: ["Machine Learning", "Python", "React", "AWS Lambda"],
      testimonial: "The AI recommendations completely changed our business. Customers are finding products they love and our revenue has grown significantly.",
      clientName: "Sarah Williams",
      clientTitle: "CEO, FashionForward",
      image: "/placeholder-ecommerce.jpg",
      featured: true
    },
    {
      id: 3,
      title: "SaaS Platform SEO & Growth Strategy",
      client: "ProductivityApp",
      industry: "SaaS",
      category: "seo",
      description: "Complete SEO overhaul and content marketing strategy that tripled organic traffic and qualified leads.",
      challenge: "Poor search visibility and low organic traffic were making customer acquisition expensive and unsustainable.",
      solution: "Implemented technical SEO improvements, created comprehensive content strategy, built high-quality backlinks, and optimized conversion funnels.",
      results: [
        { metric: "285%", label: "Organic Traffic Growth" },
        { metric: "420%", label: "Keyword Rankings" },
        { metric: "180%", label: "Qualified Leads" },
        { metric: "60%", label: "Lower CAC" }
      ],
      technologies: ["SEO", "Content Marketing", "Analytics", "Conversion Optimization"],
      testimonial: "Our organic traffic and leads have grown beyond our expectations. FaithfulVC&apos;s SEO strategy was exactly what we needed.",
      clientName: "Mark Thompson",
      clientTitle: "Founder, ProductivityApp",
      image: "/placeholder-saas.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing Process Automation",
      client: "IndustrialTech Corp",
      industry: "Manufacturing",
      category: "ai-automation",
      description: "IoT and AI-powered automation system that optimized production efficiency and reduced operational costs.",
      challenge: "Manual processes, inefficient resource allocation, and lack of real-time visibility were impacting profitability.",
      solution: "Implemented IoT sensors, developed predictive analytics dashboard, automated quality control processes, and created real-time monitoring system.",
      results: [
        { metric: "35%", label: "Cost Reduction" },
        { metric: "50%", label: "Efficiency Gain" },
        { metric: "90%", label: "Quality Accuracy" },
        { metric: "24/7", label: "Real-time Monitoring" }
      ],
      technologies: ["IoT", "Predictive Analytics", "Python", "Industrial Automation"],
      testimonial: "The automation system has revolutionized our operations. We&apos;re more efficient, profitable, and competitive than ever.",
      clientName: "Robert Martinez",
      clientTitle: "Operations Director, IndustrialTech",
      image: "/placeholder-manufacturing.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Healthcare Compliance & Web Platform",
      client: "MedCare Solutions",
      industry: "Healthcare",
      category: "web-development",
      description: "HIPAA-compliant patient portal with modern design and robust security features.",
      challenge: "Legacy system was not HIPAA compliant, had poor user experience, and couldn&apos;t scale with growing patient base.",
      solution: "Built modern, responsive patient portal with HIPAA compliance, integrated telehealth features, and implemented comprehensive security measures.",
      results: [
        { metric: "100%", label: "HIPAA Compliance" },
        { metric: "75%", label: "User Satisfaction" },
        { metric: "200%", label: "Patient Engagement" },
        { metric: "60%", label: "Admin Efficiency" }
      ],
      technologies: ["React", "Node.js", "HIPAA Compliance", "Security"],
      testimonial: "Our new patient portal has transformed how we interact with patients. It&apos;s secure, user-friendly, and fully compliant.",
      clientName: "Dr. Emily Johnson",
      clientTitle: "Medical Director, MedCare Solutions",
      image: "/placeholder-healthcare.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Startup MVP & Security Assessment",
      client: "TechStartup Inc",
      industry: "Technology",
      category: "web-development",
      description: "Full-stack MVP development with integrated security testing and scalable architecture.",
      challenge: "Needed to build and launch a secure, scalable MVP quickly while ensuring investor confidence in security practices.",
      solution: "Developed React/Node.js application with AWS deployment, conducted security assessment, implemented CI/CD pipeline, and provided security documentation.",
      results: [
        { metric: "8 Weeks", label: "MVP Launch Time" },
        { metric: "£2M", label: "Series A Funding" },
        { metric: "Zero", label: "Security Issues" },
        { metric: "99.9%", label: "Uptime" }
      ],
      technologies: ["React", "Node.js", "AWS", "Security Testing"],
      testimonial: "FaithfulVC helped us build and secure our MVP efficiently. The security assessment gave our investors confidence in our platform.",
      clientName: "Alex Chen",
      clientTitle: "Co-founder, TechStartup Inc",
      image: "/placeholder-startup.jpg",
      featured: false
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects', icon: null },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'seo', name: 'SEO & Marketing', icon: Search },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Portfolio &
            <span className="text-blue-600"> Case Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how we&apos;ve helped businesses across industries achieve digital transformation, 
            improve security, and drive growth through innovative solutions.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>100+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>Average 150% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth look at how we&apos;ve transformed businesses through strategic digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{study.industry}</h3>
                    <p className="text-blue-100">{study.client}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {study.category === 'cybersecurity' && <Shield className="w-5 h-5 text-red-600" />}
                    {study.category === 'ai-automation' && <Brain className="w-5 h-5 text-purple-600" />}
                    {study.category === 'seo' && <Search className="w-5 h-5 text-green-600" />}
                    {study.category === 'web-development' && <Code className="w-5 h-5 text-blue-600" />}
                    <Badge variant="secondary" className="bg-slate-100">
                      {filterCategories.find(cat => cat.id === study.category)?.name}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 4).map((result, resultIdx) => (
                      <div key={resultIdx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.label}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of successful projects across different industries and service areas.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filterCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    className={`${
                      activeFilter === category.id 
                        ? "bg-blue-600 text-white" 
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-slate-600 to-slate-700 h-32 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm text-slate-200">{study.industry}</p>
                    <h4 className="font-semibold">{study.client}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {study.category === 'cybersecurity' && <Shield className="w-4 h-4 text-red-600" />}
                    {study.category === 'ai-automation' && <Brain className="w-4 h-4 text-purple-600" />}
                    {study.category === 'seo' && <Search className="w-4 h-4 text-green-600" />}
                    {study.category === 'web-development' && <Code className="w-4 h-4 text-blue-600" />}
                    <Badge variant="secondary" className="text-xs">
                      {filterCategories.find(cat => cat.id === study.category)?.name}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((result, resultIdx) => (
                      <div key={resultIdx} className="text-center bg-slate-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">{result.metric}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
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

      {/* Success Metrics */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach delivers measurable outcomes that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "150%",
                label: "Average ROI Increase",
                description: "Client return on investment"
              },
              {
                icon: Shield,
                metric: "99.9%",
                label: "Security Success Rate",
                description: "No breaches post-implementation"
              },
              {
                icon: Zap,
                metric: "3x",
                label: "Performance Improvement",
                description: "Average speed enhancement"
              },
              {
                icon: CheckCircle,
                metric: "100+",
                label: "Projects Delivered",
                description: "Successfully completed engagements"
              }
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-blue-50 w-20 h-20 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the businesses we&apos;ve helped transform and secure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "FaithfulVC didn&apos;t just build our website – they transformed our entire digital strategy. The integrated approach to development and security gave us confidence to scale rapidly.",
                author: "Sarah Mitchell",
                title: "CEO, TechFlow Solutions",
                company: "FinTech",
                rating: 5
              },
              {
                quote: "The AI automation system they built has saved us countless hours and improved our accuracy significantly. The ROI was apparent within the first month.",
                author: "David Chen",
                title: "Operations Director, ManufacturingCorp",
                company: "Manufacturing",
                rating: 5
              },
              {
                quote: "Their cybersecurity expertise is unmatched. They found vulnerabilities our previous security firm missed and helped us achieve compliance quickly.",
                author: "Dr. Emily Johnson",
                title: "CTO, HealthSecure",
                company: "Healthcare",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-blue-600 font-medium">{testimonial.title}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let&apos;s discuss your project and create a custom solution that drives real results for your business. 
            Schedule a free consultation to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>5-star client satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>100+ successful projects</span>
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