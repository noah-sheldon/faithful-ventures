import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, BarChart3, CheckCircle, Star, Cpu, Database, Workflow } from "lucide-react";
import Link from "next/link";

export default function AIAutomation() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                AI & Automation
                <span className="text-purple-600"> That Works Smarter</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your business operations with intelligent automation and custom AI solutions. 
                We help you eliminate repetitive tasks, make data-driven decisions, and scale efficiently 
                while maintaining the human touch where it matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Explore AI Opportunities
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    See AI Solutions
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>Custom AI Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>Process Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>Data Intelligence</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical ROI Improvements</h3>
                <div className="space-y-6">
                  {[
                    { metric: "75%", label: "Reduction in Manual Tasks", description: "Time saved through automation" },
                    { metric: "40%", label: "Faster Decision Making", description: "With AI-powered insights" },
                    { metric: "60%", label: "Error Reduction", description: "Elimination of human mistakes" },
                    { metric: "3x", label: "Productivity Increase", description: "For repetitive processes" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">{stat.metric}</div>
                        <div className="text-gray-700 font-medium">{stat.label}</div>
                        <div className="text-gray-500 text-sm">{stat.description}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Automation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent chatbots to complex workflow automation, we create solutions that enhance your business capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Business Process Automation",
                description: "Streamline workflows and eliminate repetitive tasks with intelligent automation.",
                features: ["RPA Implementation", "Workflow Optimization", "Task Scheduling", "Error Handling"]
              },
              {
                icon: Brain,
                title: "Custom AI Development",
                description: "Tailor-made AI solutions designed specifically for your business needs and challenges.",
                features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
              },
              {
                icon: BarChart3,
                title: "Data Analytics & Insights",
                description: "Transform raw data into actionable business intelligence with AI-powered analytics.",
                features: ["Predictive Modeling", "Data Visualization", "Trend Analysis", "Automated Reporting"]
              },
              {
                icon: Cpu,
                title: "AI Chatbots & Virtual Assistants",
                description: "Intelligent conversational AI that handles customer queries and internal tasks 24/7.",
                features: ["Customer Support Bots", "Lead Qualification", "FAQ Automation", "Multi-language Support"]
              },
              {
                icon: Workflow,
                title: "API Integration & Automation",
                description: "Connect your existing tools and systems with intelligent automation bridges.",
                features: ["CRM Integration", "Marketing Automation", "Data Synchronization", "Third-party APIs"]
              },
              {
                icon: Database,
                title: "AI-Enhanced Decision Making",
                description: "Leverage AI to make better business decisions with real-time insights and recommendations.",
                features: ["Risk Assessment", "Opportunity Identification", "Performance Optimization", "Strategic Planning"]
              }
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-purple-50 w-16 h-16 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-purple-600" />
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
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-2" />
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

      {/* Use Cases Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World AI Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how different industries are leveraging AI and automation to transform their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                industry: "E-Commerce",
                title: "AI-Powered Customer Experience",
                description: "Intelligent product recommendations, automated customer support, and dynamic pricing optimization.",
                benefits: [
                  "30% increase in average order value",
                  "50% reduction in support tickets",
                  "24/7 customer assistance",
                  "Personalized shopping experiences"
                ],
                technologies: ["Recommendation Engine", "Chatbot", "Price Optimization", "Inventory Management"]
              },
              {
                industry: "Manufacturing",
                title: "Predictive Maintenance & Quality Control",
                description: "AI-driven equipment monitoring, predictive maintenance scheduling, and automated quality inspection.",
                benefits: [
                  "40% reduction in equipment downtime",
                  "25% decrease in maintenance costs",
                  "95% accuracy in defect detection",
                  "Optimized production schedules"
                ],
                technologies: ["IoT Sensors", "Computer Vision", "Predictive Analytics", "Process Automation"]
              },
              {
                industry: "Healthcare",
                title: "Automated Administrative Tasks",
                description: "Streamline patient scheduling, billing processes, and medical record management with AI.",
                benefits: [
                  "60% faster appointment scheduling",
                  "80% reduction in billing errors",
                  "Improved patient experience",
                  "Enhanced data accuracy"
                ],
                technologies: ["NLP Processing", "Automated Scheduling", "Data Entry Automation", "Patient Analytics"]
              },
              {
                industry: "Finance",
                title: "Risk Assessment & Fraud Detection",
                description: "Real-time fraud detection, automated compliance checking, and intelligent risk scoring.",
                benefits: [
                  "90% fraud detection accuracy",
                  "50% faster loan processing",
                  "Automated compliance reporting",
                  "Real-time risk monitoring"
                ],
                technologies: ["Machine Learning", "Anomaly Detection", "Automated Reporting", "Risk Modeling"]
              }
            ].map((useCase, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {useCase.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIdx) => (
                        <div key={techIdx} className="px-3 py-1 bg-slate-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful AI and automation deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Analyze your current processes and identify automation opportunities.",
                details: ["Process Mapping", "Pain Point Analysis", "ROI Calculation", "Feasibility Study"]
              },
              {
                step: "02",
                title: "Strategy & Design",
                description: "Design the optimal AI solution architecture for your specific needs.",
                details: ["Solution Architecture", "Technology Selection", "Integration Planning", "Timeline Creation"]
              },
              {
                step: "03",
                title: "Development & Training",
                description: "Build and train custom AI models or configure automation tools.",
                details: ["Model Development", "Data Preparation", "Algorithm Training", "Testing & Validation"]
              },
              {
                step: "04",
                title: "Integration & Deployment",
                description: "Seamlessly integrate AI solutions with your existing systems.",
                details: ["System Integration", "API Development", "Security Implementation", "Performance Optimization"]
              },
              {
                step: "05",
                title: "Monitoring & Optimization",
                description: "Continuously monitor performance and optimize for better results.",
                details: ["Performance Monitoring", "Model Retraining", "Process Refinement", "Ongoing Support"]
              }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {process.description}
                </p>
                <div className="space-y-1">
                  {process.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="text-xs text-gray-500">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced AI Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI frameworks and tools to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <div className="space-y-2">
                {[
                  "TensorFlow & PyTorch",
                  "Scikit-learn",
                  "OpenAI GPT Models",
                  "Hugging Face Transformers",
                  "Custom Neural Networks"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-3 h-3 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automation Tools</h3>
              <div className="space-y-2">
                {[
                  "Zapier & Make.com",
                  "Microsoft Power Automate",
                  "UiPath RPA",
                  "Custom Python Scripts",
                  "API Orchestration"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-3 h-3 text-blue-500 mr-2" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data & Analytics</h3>
              <div className="space-y-2">
                {[
                  "Pandas & NumPy",
                  "Apache Spark",
                  "Elasticsearch",
                  "Tableau & Power BI",
                  "Real-time Streaming"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & Infrastructure</h3>
              <div className="space-y-2">
                {[
                  "AWS SageMaker",
                  "Google AI Platform",
                  "Azure ML",
                  "Docker & Kubernetes",
                  "Serverless Functions"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-3 h-3 text-orange-500 mr-2" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Automation Investment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models to match your budget and project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "AI Consultation",
                price: "£2,500",
                description: "Perfect for exploring AI opportunities",
                features: [
                  "2-week AI readiness assessment",
                  "Process automation opportunities",
                  "ROI projections",
                  "Technology recommendations",
                  "Implementation roadmap",
                  "Strategy presentation"
                ],
                popular: false
              },
              {
                name: "Automation Project",
                price: "£15,000 - £50,000",
                description: "Complete automation solution delivery",
                features: [
                  "Custom automation development",
                  "System integration",
                  "User training",
                  "3 months post-launch support",
                  "Performance monitoring",
                  "Documentation",
                  "Maintenance plan"
                ],
                popular: true
              },
              {
                name: "Enterprise AI Solution",
                price: "£50,000+",
                description: "Complex AI systems and ongoing partnership",
                features: [
                  "Custom AI model development",
                  "Advanced machine learning",
                  "Multi-system integration",
                  "Dedicated project manager",
                  "12 months support",
                  "Model retraining",
                  "Scalability planning",
                  "Security audit included"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
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
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
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
      <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate and Innovate?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Discover how AI and automation can transform your business operations. 
            Schedule a free consultation to explore the possibilities and get a custom roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Explore AI Opportunities
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Discuss Your Vision
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-purple-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>AI expertise since 2020</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Custom solutions only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Guaranteed ROI</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}