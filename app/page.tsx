import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Shield, 
  Bot, 
  Code, 
  Search,
  Zap,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Web Development & Design",
      description: "Custom websites and applications built with cutting-edge technology",
      href: "/services/web-development",
      badge: "Most Popular"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Data-driven strategies to grow your online presence and revenue",
      href: "/services/seo"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent systems that reduce costs and improve efficiency",
      href: "/services/ai-automation",
      badge: "High ROI"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Enterprise-grade security to protect your digital assets",
      href: "/services/penetration-testing"
    }
  ];

  const testimonials = [
    {
      quote: "FaithfulVC transformed our digital presence completely. Their AI automation saved us £200k annually while improving customer satisfaction by 40%.",
      author: "Sarah Mitchell",
      title: "CTO, TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The cybersecurity audit identified critical vulnerabilities we never knew existed. Their team&apos;s expertise is unmatched in the European market.",
      author: "David Chen",
      title: "CISO, FinanceSecure",
      rating: 5
    },
    {
      quote: "From concept to launch in 8 weeks. The website they built generates 3x more leads than our previous one. Exceptional work!",
      author: "Emma Thompson",
      title: "CEO, GreenTech Innovations",
      rating: 5
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Delivered", icon: TrendingUp },
    { number: "£50M+", label: "Client Revenue Generated", icon: Award },
    { number: "99.9%", label: "Uptime Guaranteed", icon: Zap },
    { number: "24/7", label: "Expert Support", icon: Globe }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#00C2A8] via-[#00A3D9] to-[#0074D9] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6 text-sm px-4 py-2">
              ✨ Europe&apos;s Leading AI-Powered Digital Agency
            </Badge>
            <h1 className="text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Where AI Innovation Meets
              <span className="block bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] bg-clip-text text-transparent">
                Cybersecurity Precision
              </span>
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI automation, custom web development, 
              and enterprise-grade cybersecurity. Trusted by 200+ companies across Europe & UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white hover:text-[#0074D9] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                <Link href="/portfolio">
                  View Success Stories <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#0074D9]" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#1E1E1E] font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Complete Digital Transformation
            </h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto leading-relaxed">
              From AI-powered automation to enterprise cybersecurity, we provide 
              end-to-end solutions that drive measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative h-full rounded-2xl overflow-hidden">
                  {service.badge && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black px-3 py-1 rounded-full">
                        {service.badge}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C2A8]/5 to-[#0074D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#00C2A8]/10 to-[#0074D9]/10 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-[#0074D9]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <p className="text-[#1E1E1E] mb-6 leading-relaxed text-center flex-1">
                      {service.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full border-[#0074D9]/20 text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8] hover:to-[#0074D9] hover:text-white rounded-xl"
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

      {/* Featured Case Study */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Client Success Story</h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
              How we helped a SaaS company achieve 300% revenue growth through AI automation
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-white/80">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">£2M</div>
                  <div className="text-white/80">Annual Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <div className="text-white/80">Faster Processes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">8 Weeks</div>
                  <div className="text-white/80">Implementation</div>
                </div>
              </div>
            </div>
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-black mb-4">
                AI-Powered Customer Service Transformation
              </h3>
              <p className="text-[#1E1E1E] leading-relaxed mb-6">
                TechFlow Solutions approached us with manual customer service processes that were 
                limiting their growth. We implemented an AI chatbot system that handles 80% of 
                customer inquiries automatically, while integrating seamlessly with their existing CRM.
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transform transition-all duration-300 rounded-xl"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto">
              Join 200+ companies that have transformed their business with our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFA94D] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#1E1E1E] text-lg leading-relaxed mb-6 italic flex-1">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-black">{testimonial.author}</p>
                    <p className="text-[#0074D9] font-medium">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Join Europe&apos;s most innovative companies who trust FaithfulVC to deliver 
            exceptional digital solutions and cybersecurity expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#B0FF72] to-[#FFA94D] text-black hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <Link href="/contact">
                Get Your Free Consultation
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 text-white hover:bg-white hover:text-[#0074D9] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Request Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>No contracts, no commitments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>Free initial consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B0FF72]" />
              <span>Expert team available 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
