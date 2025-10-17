import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Target, BarChart3, CheckCircle, Star, Globe } from "lucide-react";
import Link from "next/link";

export default function SEO() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                SEO & Digital Marketing
                <span className="text-green-600"> That Drives Growth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We use data-driven SEO strategies and AI-enhanced tools to boost your search rankings, 
                drive organic traffic, and convert visitors into customers. Our approach focuses on sustainable, 
                long-term growth that builds your online authority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Get Free SEO Audit
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    View Case Studies
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Google Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>White-Hat Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Measurable Results</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Results</h3>
                <div className="space-y-6">
                  {[
                    { metric: "150%", label: "Increase in Organic Traffic", period: "Within 6 months" },
                    { metric: "300%", label: "Growth in Keyword Rankings", period: "First page positions" },
                    { metric: "85%", label: "Improvement in Click-Through Rate", period: "From search results" },
                    { metric: "200%", label: "Boost in Local Search Visibility", period: "For local businesses" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{stat.metric}</div>
                        <div className="text-gray-700 font-medium">{stat.label}</div>
                        <div className="text-gray-500 text-sm">{stat.period}</div>
                      </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete SEO & Digital Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical audits to content strategy, we cover every aspect of digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Technical SEO Audits",
                description: "Comprehensive analysis of your website&apos;s technical health and search performance.",
                features: ["Site Speed Analysis", "Mobile Optimization", "Schema Markup", "Crawl Error Fixes"]
              },
              {
                icon: Target,
                title: "Keyword Research & Strategy",
                description: "Data-driven keyword research to target the terms your customers actually search for.",
                features: ["Competitor Analysis", "Search Intent Mapping", "Long-tail Keywords", "Local Keywords"]
              },
              {
                icon: TrendingUp,
                title: "On-Page Optimization",
                description: "Optimize your content, meta tags, and page structure for maximum search visibility.",
                features: ["Content Optimization", "Meta Tag Creation", "Internal Linking", "Image SEO"]
              },
              {
                icon: Globe,
                title: "Content Marketing",
                description: "Engaging, SEO-optimized content that educates your audience and drives traffic.",
                features: ["Landing Pages", "Resource Guides", "Video SEO", "Content Strategy"]
              },
              {
                icon: BarChart3,
                title: "Link Building & PR",
                description: "Ethical link building strategies to increase your domain authority and rankings.",
                features: ["Digital PR Campaigns", "Guest Post Outreach", "Resource Page Links", "Brand Mentions"]
              },
              {
                icon: TrendingUp,
                title: "Local SEO",
                description: "Dominate local search results and attract customers in your geographic area.",
                features: ["Google Business Profile", "Local Citations", "Review Management", "Local Content"]
              }
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-green-50 w-16 h-16 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600" />
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

      {/* SEO Process */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our SEO Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, systematic approach that delivers consistent results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit & Analysis",
                description: "Comprehensive review of your current SEO performance, competitor landscape, and opportunities.",
                tasks: ["Technical Analysis", "Keyword Gap Analysis", "Competitor Research", "Content Audit"]
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create a customized SEO roadmap based on your business goals and market opportunities.",
                tasks: ["Keyword Strategy", "Content Plan", "Technical Roadmap", "Link Building Strategy"]
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the SEO strategy with precision, focusing on high-impact optimizations first.",
                tasks: ["On-Page Optimization", "Technical Fixes", "Content Creation", "Link Acquisition"]
              },
              {
                step: "04",
                title: "Monitor & Optimize",
                description: "Continuous monitoring, reporting, and optimization to ensure sustained growth.",
                tasks: ["Ranking Tracking", "Traffic Analysis", "Conversion Monitoring", "Strategy Refinement"]
              }
            ].map((process, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {process.description}
                </p>
                <div className="space-y-2">
                  {process.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced SEO Tools & Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use enterprise-grade tools and AI-powered analytics to maximize your SEO performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Analysis Tools</h3>
              <div className="space-y-3">
                {[
                  "Google Search Console",
                  "SEMrush & Ahrefs",
                  "Screaming Frog",
                  "Google Analytics 4",
                  "PageSpeed Insights",
                  "Schema Markup Tools"
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Enhanced Analytics</h3>
              <div className="space-y-3">
                {[
                  "AI Content Optimization",
                  "Predictive Keyword Analysis",
                  "Automated Reporting",
                  "Sentiment Analysis",
                  "Competitive Intelligence",
                  "Voice Search Optimization"
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reporting & Insights</h3>
              <div className="space-y-3">
                {[
                  "Custom Dashboards",
                  "Monthly SEO Reports",
                  "Competitor Tracking",
                  "ROI Analytics",
                  "Conversion Attribution",
                  "Performance Forecasting"
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Investment Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a plan that matches your business size and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Startup SEO",
                price: "£2,000/month",
                description: "Perfect for new businesses and small websites",
                features: [
                  "Up to 10 target keywords",
                  "Monthly SEO audit",
                  "On-page optimization",
                  "Basic link building",
                  "Google Analytics setup",
                  "Monthly reporting",
                  "3-month minimum"
                ],
                popular: false
              },
              {
                name: "Growth SEO",
                price: "£4,000/month",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 25 target keywords",
                  "Bi-weekly optimization",
                  "Content marketing (4 posts/month)",
                  "Advanced link building",
                  "Local SEO optimization",
                  "Competitor analysis",
                  "Technical SEO improvements",
                  "Bi-weekly reporting"
                ],
                popular: true
              },
              {
                name: "Enterprise SEO",
                price: "£8,000+/month",
                description: "For large websites with complex needs",
                features: [
                  "Unlimited target keywords",
                  "Weekly optimization",
                  "Custom content strategy",
                  "PR & digital outreach",
                  "Multi-location SEO",
                  "Advanced analytics setup",
                  "Technical SEO sprints",
                  "Weekly reporting",
                  "Dedicated account manager"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'ring-2 ring-green-600 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-600 mb-2">
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
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
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

      {/* Case Study Preview */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we helped a UK e-commerce business triple their organic traffic.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">E-Commerce SEO Transformation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A London-based fashion retailer was struggling with poor search visibility despite having great products. 
                  We implemented a comprehensive SEO strategy that transformed their online presence.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-green-600">+285%</div>
                    <div className="text-gray-700">Organic Traffic</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">+420%</div>
                    <div className="text-gray-700">Keyword Rankings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">+180%</div>
                    <div className="text-gray-700">Organic Revenue</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">12 Months</div>
                    <div className="text-gray-700">To ROI Break-even</div>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link href="/portfolio">Read Full Case Study</Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Did</h4>
                <div className="space-y-4">
                  {[
                    "Complete technical SEO overhaul",
                    "Product page optimization for 500+ items",
                    "Content marketing strategy with buying guides",
                    "Local SEO for London-based searches",
                    "Link building campaign with industry publications",
                    "Site speed optimization (40% improvement)"
                  ].map((action, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Start with a free SEO audit and discover exactly how to improve your search rankings. 
            Our team will analyze your website and provide actionable recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Get Free SEO Audit
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Discuss Your Goals
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Google certified team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Transparent reporting</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}