import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Bug, Lock, CheckCircle, Star, AlertTriangle, Eye, Target } from "lucide-react";
import Link from "next/link";

export default function PenetrationTesting() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Penetration Testing &
                <span className="text-red-600"> Red Team Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Think like a hacker before the hackers do. Our certified ethical hackers simulate real-world attacks 
                to identify vulnerabilities in your systems, networks, and applications. We provide detailed reports 
                and remediation guidance to strengthen your security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Request Security Assessment
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    View Security Cases
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span>CREST Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span>OWASP Methodology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span>Detailed Reporting</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical Findings</h3>
                <div className="space-y-6">
                  {[
                    { severity: "Critical", count: "2-5", description: "High-impact vulnerabilities requiring immediate attention" },
                    { severity: "High", count: "5-10", description: "Significant security risks that should be addressed quickly" },
                    { severity: "Medium", count: "10-20", description: "Moderate risks that need remediation planning" },
                    { severity: "Low", count: "15-30", description: "Minor issues for long-term security improvement" }
                  ].map((finding, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <div className={`text-lg font-bold ${
                          finding.severity === 'Critical' ? 'text-red-600' :
                          finding.severity === 'High' ? 'text-orange-600' :
                          finding.severity === 'Medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`}>
                          {finding.count} {finding.severity}
                        </div>
                        <div className="text-gray-500 text-sm">{finding.description}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Security Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We test every aspect of your digital infrastructure to uncover vulnerabilities before attackers do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Network Penetration Testing",
                description: "Comprehensive testing of your network infrastructure, firewalls, and internal systems.",
                features: ["External Network Testing", "Internal Network Assessment", "Wireless Security Testing", "Firewall Configuration Review"]
              },
              {
                icon: Bug,
                title: "Web Application Testing",
                description: "In-depth security assessment of your web applications and APIs using OWASP methodology.",
                features: ["OWASP Top 10 Testing", "API Security Assessment", "Authentication Testing", "Session Management Review"]
              },
              {
                icon: Target,
                title: "Red Team Exercises",
                description: "Full-scale simulated attacks that test your organization&apos;s detection and response capabilities.",
                features: ["Multi-vector Attacks", "Social Engineering", "Physical Security Testing", "Incident Response Testing"]
              },
              {
                icon: Eye,
                title: "Mobile Application Testing",
                description: "Security assessment of iOS and Android applications including client-side and server-side testing.",
                features: ["Static Code Analysis", "Dynamic Testing", "API Testing", "Data Storage Review"]
              },
              {
                icon: Lock,
                title: "Cloud Security Assessment",
                description: "Evaluation of cloud infrastructure configurations and security controls across AWS, Azure, and GCP.",
                features: ["IAM Configuration Review", "Storage Security Assessment", "Network Configuration", "Compliance Verification"]
              },
              {
                icon: Search,
                title: "Vulnerability Assessment",
                description: "Automated and manual vulnerability scanning to identify security weaknesses across your infrastructure.",
                features: ["Automated Scanning", "Manual Verification", "False Positive Elimination", "Risk Prioritization"]
              }
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-red-50 w-16 h-16 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-600" />
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
                          <CheckCircle className="w-3 h-3 text-red-500 mr-2" />
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

      {/* Methodology Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Testing Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow industry-standard frameworks and best practices to ensure comprehensive and reliable testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Reconnaissance",
                description: "Information gathering and scope definition to understand the target environment.",
                activities: ["OSINT Collection", "Network Discovery", "Service Enumeration", "Target Profiling"]
              },
              {
                step: "02",
                title: "Scanning",
                description: "Automated and manual scanning to identify potential entry points and vulnerabilities.",
                activities: ["Port Scanning", "Vulnerability Scanning", "Service Detection", "Version Identification"]
              },
              {
                step: "03",
                title: "Exploitation",
                description: "Attempt to exploit identified vulnerabilities to demonstrate real-world impact.",
                activities: ["Exploit Development", "Privilege Escalation", "Lateral Movement", "Data Access Testing"]
              },
              {
                step: "04",
                title: "Post-Exploitation",
                description: "Assess the impact of successful attacks and test detection capabilities.",
                activities: ["Persistence Testing", "Data Exfiltration", "Network Mapping", "Impact Assessment"]
              },
              {
                step: "05",
                title: "Reporting",
                description: "Comprehensive documentation of findings with remediation recommendations.",
                activities: ["Executive Summary", "Technical Details", "Risk Ratings", "Remediation Guidance"]
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {phase.description}
                </p>
                <div className="space-y-1">
                  {phase.activities.map((activity, activityIdx) => (
                    <div key={activityIdx} className="text-xs text-gray-500">
                      • {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standards & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our penetration testing services help you meet regulatory requirements and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                standard: "ISO 27001",
                description: "Information Security Management Systems standard requiring regular penetration testing.",
                requirements: [
                  "Regular security testing",
                  "Vulnerability assessments",
                  "Risk management",
                  "Continuous improvement"
                ]
              },
              {
                standard: "PCI DSS",
                description: "Payment Card Industry standard mandating quarterly penetration testing for card data protection.",
                requirements: [
                  "Quarterly external testing",
                  "Annual internal testing",
                  "Segmentation validation",
                  "Vulnerability scanning"
                ]
              },
              {
                standard: "GDPR",
                description: "European privacy regulation requiring appropriate security measures including testing.",
                requirements: [
                  "Security by design",
                  "Regular testing",
                  "Risk assessments",
                  "Breach prevention"
                ]
              },
              {
                standard: "NIST Framework",
                description: "Cybersecurity framework emphasizing the importance of continuous security testing.",
                requirements: [
                  "Identify vulnerabilities",
                  "Protect assets",
                  "Detect threats",
                  "Respond to incidents"
                ]
              }
            ].map((compliance, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {compliance.standard}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {compliance.description}
                  </p>
                  <div className="space-y-2">
                    {compliance.requirements.map((requirement, reqIdx) => (
                      <div key={reqIdx} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Penetration Testing Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the testing scope that matches your security requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Web App Test",
                price: "£8,000 - £15,000",
                description: "Perfect for small to medium web applications",
                features: [
                  "Single web application",
                  "OWASP Top 10 testing",
                  "Authentication testing",
                  "Input validation testing",
                  "Executive summary report",
                  "Technical findings report",
                  "2-week testing window"
                ],
                popular: false
              },
              {
                name: "Comprehensive Security Test",
                price: "£20,000 - £40,000",
                description: "Complete testing for growing businesses",
                features: [
                  "Network penetration testing",
                  "Web application testing",
                  "Wireless security assessment",
                  "Social engineering testing",
                  "Detailed remediation guidance",
                  "Retest of critical findings",
                  "Compliance mapping",
                  "3-4 week testing period"
                ],
                popular: true
              },
              {
                name: "Red Team Exercise",
                price: "£50,000+",
                description: "Advanced adversarial simulation for enterprises",
                features: [
                  "Full red team engagement",
                  "Multi-vector attack simulation",
                  "Physical security testing",
                  "Social engineering campaigns",
                  "Detection evasion techniques",
                  "Incident response testing",
                  "Executive briefing",
                  "6-8 week engagement",
                  "Ongoing threat simulation"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'ring-2 ring-red-600 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-red-600 mb-2">
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
                        <CheckCircle className="w-4 h-4 text-red-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  >
                    <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                      Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Report Preview */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get: Comprehensive Security Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed documentation that helps you understand and fix security issues effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Risk Overview</h4>
                    <p className="text-gray-600 text-sm">High-level summary of security posture and critical risks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Impact</h4>
                    <p className="text-gray-600 text-sm">Potential business consequences of identified vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Recommendations</h4>
                    <p className="text-gray-600 text-sm">Prioritized action items for improving security</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Report</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Bug className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Detailed Findings</h4>
                    <p className="text-gray-600 text-sm">Step-by-step exploitation details with evidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Risk Ratings</h4>
                    <p className="text-gray-600 text-sm">CVSS scores and business impact assessments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Remediation Steps</h4>
                    <p className="text-gray-600 text-sm">Clear instructions for fixing each vulnerability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Don&apos;t Wait for a Breach</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
            Proactive security testing is your best defense against cyber attacks. 
            Schedule a consultation to discuss your security testing needs and get a custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Schedule Security Consultation
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Certified ethical hackers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>CREST accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Confidential & secure</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}