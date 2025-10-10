import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Users, Award, CheckCircle, ArrowRight, Star, Scale, Lock, Eye } from "lucide-react";
import Link from "next/link";

export default function Compliance() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-teal-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Compliance &
                <span className="text-green-600"> Security Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Navigate complex regulatory requirements with confidence. Our experienced consultants guide you through 
                ISO 27001, GDPR, SOC 2, and other compliance frameworks, helping you build robust security programs 
                that protect your business and satisfy auditors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Start Compliance Journey
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    Compliance Success Stories
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>ISO 27001 Lead Auditor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GDPR Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SOC 2 Expert</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Benefits</h3>
                <div className="space-y-6">
                  {[
                    { benefit: "Reduced Insurance Premiums", impact: "Up to 25% savings on cyber insurance" },
                    { benefit: "Competitive Advantage", impact: "Win enterprise contracts requiring compliance" },
                    { benefit: "Risk Mitigation", impact: "Avoid costly data breaches and fines" },
                    { benefit: "Operational Efficiency", impact: "Streamlined processes and clear procedures" }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-green-500 pl-4">
                      <div className="text-lg font-bold text-gray-900">
                        {item.benefit}
                      </div>
                      <div className="text-gray-600 text-sm">{item.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Frameworks We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance across the most important security and privacy standards for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "ISO 27001",
                description: "Information Security Management System standard for comprehensive security governance.",
                features: ["ISMS Implementation", "Risk Assessment", "Security Controls", "Audit Preparation"],
                timeline: "6-12 months",
                effort: "Medium-High"
              },
              {
                icon: Scale,
                title: "GDPR Compliance",
                description: "European privacy regulation ensuring protection of personal data and privacy rights.",
                features: ["Privacy Impact Assessments", "Data Mapping", "Consent Management", "Breach Procedures"],
                timeline: "3-6 months",
                effort: "Medium"
              },
              {
                icon: Award,
                title: "SOC 2",
                description: "Security framework for service organizations handling customer data.",
                features: ["Type I & II Reports", "Control Implementation", "Continuous Monitoring", "Audit Support"],
                timeline: "4-8 months",
                effort: "Medium-High"
              },
              {
                icon: Lock,
                title: "ISO 21434",
                description: "Automotive cybersecurity standard for vehicle development lifecycle.",
                features: ["Cybersecurity Management", "Risk Assessment", "Product Development", "Incident Response"],
                timeline: "8-12 months",
                effort: "High"
              },
              {
                icon: FileText,
                title: "PCI DSS",
                description: "Payment Card Industry standard for organizations handling card data.",
                features: ["Network Security", "Data Protection", "Vulnerability Management", "Access Control"],
                timeline: "3-6 months",
                effort: "Medium"
              },
              {
                icon: Eye,
                title: "HIPAA",
                description: "Healthcare privacy and security standards for protected health information.",
                features: ["Administrative Safeguards", "Physical Safeguards", "Technical Safeguards", "Risk Analysis"],
                timeline: "4-8 months",
                effort: "Medium"
              }
            ].map((framework, idx) => {
              const IconComponent = framework.icon;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-green-50 w-16 h-16 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {framework.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {framework.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {framework.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
                      <span>Timeline: {framework.timeline}</span>
                      <span>Effort: {framework.effort}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Compliance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support from initial gap analysis to successful certification and ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Assessment & Planning",
                services: [
                  {
                    name: "Gap Analysis",
                    description: "Comprehensive review of current state against compliance requirements"
                  },
                  {
                    name: "Risk Assessment",
                    description: "Identification and evaluation of security and compliance risks"
                  },
                  {
                    name: "Roadmap Development",
                    description: "Strategic plan with timelines, resources, and milestones"
                  },
                  {
                    name: "Cost-Benefit Analysis",
                    description: "ROI evaluation and budget planning for compliance initiatives"
                  }
                ]
              },
              {
                category: "Implementation & Documentation",
                services: [
                  {
                    name: "Policy Development",
                    description: "Creation of security policies, procedures, and documentation"
                  },
                  {
                    name: "Control Implementation",
                    description: "Technical and administrative control deployment"
                  },
                  {
                    name: "Training Programs",
                    description: "Staff education and awareness training programs"
                  },
                  {
                    name: "Evidence Collection",
                    description: "Documentation and evidence gathering for audits"
                  }
                ]
              },
              {
                category: "Audit & Certification",
                services: [
                  {
                    name: "Pre-Audit Assessment",
                    description: "Readiness evaluation and final preparation"
                  },
                  {
                    name: "Audit Support",
                    description: "Direct support during certification audits"
                  },
                  {
                    name: "Remediation Planning",
                    description: "Action plans for addressing audit findings"
                  },
                  {
                    name: "Certification Maintenance",
                    description: "Ongoing support for maintaining compliance"
                  }
                ]
              },
              {
                category: "Ongoing Management",
                services: [
                  {
                    name: "Compliance Monitoring",
                    description: "Continuous monitoring and reporting on compliance status"
                  },
                  {
                    name: "Internal Audits",
                    description: "Regular internal assessments and reviews"
                  },
                  {
                    name: "Update Management",
                    description: "Keeping pace with regulatory changes and updates"
                  },
                  {
                    name: "Incident Response",
                    description: "Compliance-focused incident handling and reporting"
                  }
                ]
              }
            ].map((serviceGroup, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {serviceGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serviceGroup.services.map((service, serviceIdx) => (
                      <div key={serviceIdx} className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Compliance Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful compliance implementation and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Current state analysis and gap identification",
                duration: "2-4 weeks"
              },
              {
                step: "02",
                title: "Planning & Strategy",
                description: "Roadmap development and resource allocation",
                duration: "1-2 weeks"
              },
              {
                step: "03",
                title: "Policy Development",
                description: "Documentation and procedure creation",
                duration: "4-8 weeks"
              },
              {
                step: "04",
                title: "Control Implementation",
                description: "Technical and administrative controls deployment",
                duration: "8-16 weeks"
              },
              {
                step: "05",
                title: "Training & Testing",
                description: "Staff training and control effectiveness testing",
                duration: "2-4 weeks"
              },
              {
                step: "06",
                title: "Certification",
                description: "Audit preparation and certification support",
                duration: "4-8 weeks"
              }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                  {phase.description}
                </p>
                <div className="text-xs text-green-600 font-medium">
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Consulting Investment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for compliance initiatives based on scope and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Compliance Assessment",
                price: "£8,000 - £15,000",
                description: "Gap analysis and roadmap development",
                features: [
                  "Current state assessment",
                  "Gap analysis report",
                  "Compliance roadmap",
                  "Cost-benefit analysis",
                  "Risk assessment",
                  "Implementation timeline",
                  "Resource requirements"
                ],
                popular: false
              },
              {
                name: "Full Implementation",
                price: "£35,000 - £75,000",
                description: "Complete compliance program implementation",
                features: [
                  "End-to-end implementation",
                  "Policy and procedure development",
                  "Control implementation",
                  "Staff training programs",
                  "Documentation package",
                  "Pre-audit assessment",
                  "Audit support",
                  "12 months post-certification support"
                ],
                popular: true
              },
              {
                name: "Ongoing Compliance",
                price: "£5,000/month",
                description: "Continuous compliance management",
                features: [
                  "Monthly compliance monitoring",
                  "Quarterly internal audits",
                  "Policy updates and maintenance",
                  "Staff training refreshers",
                  "Regulatory change management",
                  "Incident response support",
                  "Annual certification support",
                  "Compliance dashboard access"
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

      {/* Success Story */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we helped a SaaS company achieve ISO 27001 certification in record time.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">SaaS ISO 27001 Certification</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A fast-growing SaaS company needed ISO 27001 certification to secure enterprise contracts. 
                  We implemented a comprehensive ISMS and guided them through successful certification 
                  in just 8 months while maintaining their rapid growth trajectory.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-green-600">8 Months</div>
                    <div className="text-gray-700">To Certification</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">Zero</div>
                    <div className="text-gray-700">Major Non-Conformities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">£2M</div>
                    <div className="text-gray-700">New Contract Value</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">30%</div>
                    <div className="text-gray-700">Faster Sales Cycles</div>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link href="/portfolio">Read Full Case Study</Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-4">
                  {[
                    "Established comprehensive ISMS covering all business processes",
                    "Implemented risk management framework with quarterly reviews",
                    "Created detailed security policies and procedures",
                    "Trained all staff on information security practices",
                    "Achieved certification with zero major non-conformities",
                    "Secured multiple enterprise contracts post-certification"
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{achievement}</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Turn compliance from a burden into a competitive advantage. Schedule a consultation to discuss 
            your regulatory requirements and get a customized roadmap to certification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Start Compliance Assessment
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Discuss Your Requirements
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>ISO 27001 Lead Auditor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>100% success rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Ongoing support included</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}