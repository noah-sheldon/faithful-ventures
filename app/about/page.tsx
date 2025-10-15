import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Shield, 
  Code, 
  Search,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Bot,
      title: "AI Innovation",
      description: "Pioneering intelligent automation that transforms business operations and drives measurable growth.",
      gradient: "from-[#00C2A8] to-[#0074D9]"
    },
    {
      icon: Shield,
      title: "Security Precision",
      description: "Enterprise-grade cybersecurity that protects your digital assets with military-precision defense.",
      gradient: "from-[#0074D9] to-[#00C2A8]"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional results that exceed expectations and drive long-term business success.",
      gradient: "from-[#B0FF72] to-[#FFA94D]"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "True collaboration with clients as strategic partners, ensuring aligned goals and shared success.",
      gradient: "from-[#FFA94D] to-[#B0FF72]"
    }
  ];

  const expertise = [
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent process automation that reduces operational costs and improves efficiency",
      metric: "40% efficiency gains"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable applications built with cutting-edge frameworks and best practices",
      metric: "3x faster load times"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessments and compliance for enterprise organizations",
      metric: "Advanced threat detection"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Data-driven SEO and marketing strategies that generate measurable ROI",
      metric: "300% traffic growth"
    }
  ];

  const credentials = [
    { title: "ISO 27001 Lead Auditor", icon: Award },
    { title: "GDPR Certified Consultant", icon: Lock },
    { title: "AWS Security Specialist", icon: Shield },
    { title: "Proven Track Record", icon: CheckCircle }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#00C2A8]/10 via-white to-[#0074D9]/10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/80 text-[#0074D9] border-[#0074D9]/20 mb-6 text-sm px-4 py-2 rounded-full">
              ✨ About FaithfulVC Europe & UK
            </Badge>
            <h1 className="text-6xl font-extrabold tracking-tight text-black mb-6 leading-tight">
              Where AI Innovation Meets
              <span className="block bg-gradient-to-r from-[#00C2A8] to-[#0074D9] bg-clip-text text-transparent">
                Cybersecurity Precision
              </span>
            </h1>
            <p className="text-xl text-[#1E1E1E] leading-relaxed mb-8 max-w-3xl mx-auto">
              We&apos;re Europe&apos;s leading AI-powered digital agency and cybersecurity consultancy, 
              trusted by innovative businesses to deliver transformational results through 
              cutting-edge technology and uncompromising security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#0074D9] text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8] hover:to-[#0074D9] hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link href="/portfolio">
                  View Our Work <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-xl text-[#1E1E1E] leading-relaxed mb-8">
              To empower European businesses with AI-driven digital transformation and 
              enterprise-grade cybersecurity that creates competitive advantages, 
              reduces operational costs, and ensures resilient growth in an increasingly digital world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-[#0074D9]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Intelligence</h3>
                <p className="text-[#1E1E1E]">AI-powered solutions that learn, adapt, and optimize</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#0074D9]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Security</h3>
                <p className="text-[#1E1E1E]">Military-grade protection for enterprise assets</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-[#0074D9]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Results</h3>
                <p className="text-[#1E1E1E]">Measurable ROI and transformational outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Our Core Values</h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
              The principles that guide everything we do and drive exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="group hover:shadow-2xl transition-all duration-500 border shadow-lg rounded-2xl overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <CardHeader className="relative z-10">
                    <div className={`mb-4 p-4 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-10 w-16 h-16 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-[#0074D9]" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-black">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[#1E1E1E] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Our Expertise</h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
              Four core competencies that deliver transformational business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 border shadow-lg rounded-2xl h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-[#0074D9]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black mb-2">
                      {area.title}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black px-3 py-1 text-xs rounded-full">
                      {area.metric}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#1E1E1E] leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Professional Credentials</h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
              Industry certifications and proven track record that demonstrate our expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((credential, idx) => {
              const IconComponent = credential.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#0074D9]" />
                  </div>
                  <p className="font-semibold text-black">{credential.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Join Europe&apos;s most innovative companies who trust FaithfulVC to deliver 
            AI-powered solutions and enterprise-grade cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-[#0074D9] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>Free consultation & assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>No long-term contracts required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>ROI-focused solutions</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
