import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Zap, Shield, CheckCircle, ArrowRight, Star, Globe } from "lucide-react";
import Link from "next/link";

export default function WebDevelopment() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Web Development & Design
                <span className="text-blue-600"> That Converts</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We create high-performance websites and web applications that not only look stunning but are built for speed, 
                SEO, and conversion. Unlike typical agencies, every project includes security best practices from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Start Your Project
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Security Built-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Mobile-First</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
                <div className="space-y-4">
                  {[
                    "Custom responsive design",
                    "Lightning-fast performance",
                    "SEO-optimized architecture",
                    "Security vulnerability testing",
                    "Content management system",
                    "Analytics and tracking setup",
                    "Ongoing maintenance & support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch and beyond, we handle every aspect of your web presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Website Design",
                description: "Unique, brand-focused designs that stand out and engage your audience.",
                features: ["Responsive Design", "User Experience Focus", "Brand Integration", "Conversion Optimization"]
              },
              {
                icon: Smartphone,
                title: "E-Commerce Development",
                description: "Powerful online stores built for sales with secure payment integration.",
                features: ["Shopping Cart Systems", "Payment Gateways", "Inventory Management", "Order Processing"]
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast websites that improve user experience and search rankings.",
                features: ["Speed Optimization", "CDN Integration", "Image Optimization", "Caching Strategies"]
              },
              {
                icon: Globe,
                title: "CMS Development",
                description: "Easy-to-manage content systems built on WordPress, Headless CMS, or custom solutions.",
                features: ["WordPress Expertise", "Headless CMS", "Custom Solutions", "Training Included"]
              },
              {
                icon: Shield,
                title: "Security Implementation",
                description: "Built-in security measures to protect your website and customer data.",
                features: ["SSL Certificates", "Security Audits", "Backup Systems", "Vulnerability Testing"]
              },
              {
                icon: ArrowRight,
                title: "Ongoing Maintenance",
                description: "Regular updates, security monitoring, and performance optimization.",
                features: ["Regular Updates", "Security Monitoring", "Performance Reports", "24/7 Support"]
              }
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
              <div className="space-y-3">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5 & CSS3",
                  "JavaScript (ES6+)",
                  "Progressive Web Apps"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend & Database</h3>
              <div className="space-y-3">
                {[
                  "Node.js & Express",
                  "Python & Django",
                  "PHP & Laravel",
                  "PostgreSQL & MySQL",
                  "MongoDB",
                  "REST & GraphQL APIs"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Platforms</h3>
              <div className="space-y-3">
                {[
                  "WordPress & Headless CMS",
                  "Shopify & WooCommerce",
                  "AWS & Vercel Hosting",
                  "Git Version Control",
                  "Docker Containers",
                  "CI/CD Pipelines"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Create wireframes, mockups, and interactive prototypes to visualize the final product before development."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your website using best practices, conduct thorough testing, and implement security measures."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy your website, provide training, and offer ongoing maintenance and support services."
              }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your needs, or let us create a custom solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Website",
                price: "£5,000 - £10,000",
                description: "Perfect for small businesses and startups",
                features: [
                  "5-page responsive website",
                  "Basic SEO optimization",
                  "Contact form integration",
                  "Mobile-friendly design",
                  "Basic security setup",
                  "3 months support"
                ],
                popular: false
              },
              {
                name: "Professional Website",
                price: "£10,000 - £25,000",
                description: "Ideal for growing businesses",
                features: [
                  "10-page custom website",
                  "Advanced SEO optimization",
                  "CMS integration",
                  "E-commerce capability",
                  "Security audit included",
                  "6 months support",
                  "Analytics setup"
                ],
                popular: true
              },
              {
                name: "Enterprise Solution",
                price: "£25,000+",
                description: "For large organizations with complex needs",
                features: [
                  "Unlimited pages",
                  "Custom functionality",
                  "Advanced integrations",
                  "Full security assessment",
                  "Performance optimization",
                  "12 months support",
                  "Training included",
                  "Priority support"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  >
                    <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let&apos;s create a website that not only looks amazing but drives real business results. 
            Schedule a free consultation to discuss your project.
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
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>5-star rated service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Free project consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No obligation quote</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}