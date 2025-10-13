import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Search, 
  Bot, 
  Shield, 
  Cloud, 
  Scale,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const serviceCategories = [
    {
      category: "Digital Solutions",
      description: "Transform your digital presence with cutting-edge technology",
      services: [
        {
          icon: Code,
          title: "Web Development & Design",
          description: "Custom websites and web applications built with modern frameworks like Next.js, React, and TypeScript.",
          features: ["Custom Web Development", "E-commerce Solutions", "Progressive Web Apps", "UI/UX Design"],
          pricing: "From £5,000",
          href: "/services/web-development",
          badge: "Most Popular"
        },
        {
          icon: Search,
          title: "SEO & Digital Marketing",
          description: "Data-driven strategies to increase organic traffic, improve search rankings, and grow your online presence.",
          features: ["Technical SEO Audits", "Content Strategy", "Local SEO", "Performance Marketing"],
          pricing: "From £2,000/month",
          href: "/services/seo"
        },
        {
          icon: Bot,
          title: "AI & Automation",
          description: "Leverage artificial intelligence to automate processes, reduce costs, and improve operational efficiency.",
          features: ["AI Chatbots", "Process Automation", "Machine Learning", "Data Analytics"],
          pricing: "From £8,000",
          href: "/services/ai-automation",
          badge: "High ROI"
        }
      ]
    },
    {
      category: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your business",
      services: [
        {
          icon: Shield,
          title: "Penetration Testing",
          description: "Comprehensive security assessments to identify vulnerabilities before malicious actors do.",
          features: ["Web Application Testing", "Network Security", "Mobile App Security", "Compliance Reports"],
          pricing: "From £8,000",
          href: "/services/penetration-testing"
        },
        {
          icon: Cloud,
          title: "Cloud & API Security",
          description: "Secure your cloud infrastructure and APIs with expert security architecture and monitoring.",
          features: ["Cloud Security Audits", "API Security Testing", "DevSecOps", "Incident Response"],
          pricing: "From £12,000",
          href: "/services/cloud-security"
        },
        {
          icon: Scale,
          title: "Compliance Consulting",
          description: "Navigate regulatory requirements with expert guidance on ISO 27001, GDPR, SOC 2, and more.",
          features: ["ISO 27001 Implementation", "GDPR Compliance", "SOC 2 Certification", "Policy Development"],
          pricing: "From £15,000",
          href: "/services/compliance"
        }
      ]
    }
  ];


  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#00C2A8]/10 via-white to-[#0074D9]/10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-black mb-6">
              Comprehensive 
              <span className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] bg-clip-text text-transparent"> Digital Services</span>
            </h1>
            <p className="text-xl text-[#1E1E1E] leading-relaxed max-w-4xl mx-auto mb-8">
              From AI-powered web development to enterprise cybersecurity, we provide end-to-end solutions 
              that transform businesses across Europe & UK. Choose from our specialized service offerings 
              or combine them for maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                  Start Your Project
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#0074D9]/30 text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8] hover:to-[#0074D9] hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Sections */}
      {serviceCategories.map((category, categoryIdx) => (
        <section key={categoryIdx} className={`w-full py-20 ${categoryIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">{category.category}</h2>
              <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIdx) => {
                const IconComponent = service.icon;
                return (
                  <Card key={serviceIdx} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg relative h-full">
                    {service.badge && (
                      <div className="absolute -top-3 left-6 z-10">
                        <Badge className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black px-3 py-1 rounded-full">
                          {service.badge}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-[#0074D9]" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-black mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#00C2A8] to-[#0074D9] bg-clip-text text-transparent">
                        {service.pricing}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-[#1E1E1E] mb-6 leading-relaxed text-center">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-8 flex-1">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-[#00C2A8] mr-3 flex-shrink-0" />
                            <span className="text-[#1E1E1E]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-[#00C2A8] to-[#0074D9] hover:scale-105 transform text-white group-hover:shadow-lg transition-all duration-300 rounded-xl"
                      >
                        <Link href={service.href} className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A systematic approach that ensures project success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We analyze your business needs, goals, and technical requirements to create a comprehensive project roadmap."
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Our team creates detailed designs, architecture plans, and project timelines with your input and approval."
              },
              {
                step: "03",
                title: "Development & Implementation", 
                description: "We build your solution using best practices, regular testing, and continuous communication."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We ensure a smooth launch and provide ongoing support, maintenance, and optimization services."
              }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white text-[#0074D9] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {phase.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto">
            Whether you need a single service or a comprehensive digital transformation, 
            our expert team is ready to deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[#0074D9]/30 text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8] hover:to-[#0074D9] hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>5-star rated agency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Quality-focused solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}