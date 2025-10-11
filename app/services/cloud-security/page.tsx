import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Database, CheckCircle, Star, Settings, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function CloudSecurity() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Cloud & API Security
                <span className="text-blue-600"> Testing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Secure your cloud infrastructure and APIs with comprehensive security assessments. We test AWS, Azure, 
                and GCP environments for misconfigurations, access control issues, and API vulnerabilities that could 
                expose your data and applications to threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Secure Your Cloud
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    Cloud Security Cases
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>AWS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Azure Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>GCP Professional</span>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Cloud Risks</h3>
                <div className="space-y-6">
                  {[
                    { risk: "Misconfigured S3 Buckets", impact: "Data exposure to public internet", severity: "Critical" },
                    { risk: "Overprivileged IAM Roles", impact: "Lateral movement opportunities", severity: "High" },
                    { risk: "Unencrypted Data Storage", impact: "Compliance violations", severity: "High" },
                    { risk: "API Authentication Bypass", impact: "Unauthorized data access", severity: "Critical" }
                  ].map((finding, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-4">
                      <div className={`text-lg font-bold ${
                        finding.severity === 'Critical' ? 'text-red-600' : 'text-orange-600'
                      }`}>
                        {finding.risk}
                      </div>
                      <div className="text-gray-600 text-sm">{finding.impact}</div>
                      <div className={`text-xs font-medium ${
                        finding.severity === 'Critical' ? 'text-red-500' : 'text-orange-500'
                      }`}>
                        {finding.severity} Risk
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Security Assessment Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of your cloud infrastructure and application security across all major platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Infrastructure Review",
                description: "Comprehensive assessment of your cloud configuration, network security, and access controls.",
                features: ["IAM Policy Review", "Network Security Groups", "Storage Configuration", "Logging & Monitoring"]
              },
              {
                icon: Shield,
                title: "API Security Testing",
                description: "In-depth testing of REST, GraphQL, and other APIs for authentication, authorization, and data leaks.",
                features: ["Authentication Testing", "Authorization Bypass", "Input Validation", "Rate Limiting Review"]
              },
              {
                icon: Database,
                title: "Data Protection Assessment",
                description: "Evaluation of data encryption, backup security, and compliance with privacy regulations.",
                features: ["Encryption at Rest", "Encryption in Transit", "Backup Security", "Data Classification"]
              },
              {
                icon: Users,
                title: "Identity & Access Management",
                description: "Review of user access controls, privilege escalation risks, and identity federation security.",
                features: ["Privilege Review", "MFA Configuration", "Federation Security", "Service Accounts"]
              },
              {
                icon: Settings,
                title: "DevSecOps Integration",
                description: "Assessment of security integration in CI/CD pipelines and infrastructure as code.",
                features: ["Pipeline Security", "Secret Management", "Code Scanning", "Container Security"]
              },
              {
                icon: Globe,
                title: "Multi-Cloud Security",
                description: "Security assessment across multiple cloud providers and hybrid environments.",
                features: ["Cross-Cloud IAM", "Data Flow Analysis", "Compliance Mapping", "Unified Monitoring"]
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
                          <CheckCircle className="w-3 h-3 text-blue-500 mr-2" />
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

      {/* Cloud Platforms Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-Cloud Security Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team has deep expertise across all major cloud platforms and their unique security challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                platform: "Amazon Web Services",
                logo: "AWS",
                color: "bg-orange-500",
                specialties: [
                  "EC2 & VPC Security",
                  "S3 Bucket Configuration",
                  "IAM Policies & Roles",
                  "CloudTrail & GuardDuty",
                  "Lambda Security",
                  "RDS & DynamoDB"
                ],
                certifications: ["AWS Security Specialty", "Solutions Architect", "DevOps Engineer"]
              },
              {
                platform: "Microsoft Azure",
                logo: "Azure",
                color: "bg-blue-500",
                specialties: [
                  "Azure AD & RBAC",
                  "Virtual Networks",
                  "Storage Accounts",
                  "Key Vault Management",
                  "App Service Security",
                  "Azure Security Center"
                ],
                certifications: ["Azure Security Engineer", "Solutions Architect", "DevOps Engineer"]
              },
              {
                platform: "Google Cloud Platform",
                logo: "GCP",
                color: "bg-green-500",
                specialties: [
                  "IAM & Organization Policy",
                  "VPC & Firewall Rules",
                  "Cloud Storage Security",
                  "Cloud Security Command Center",
                  "GKE Security",
                  "Cloud Functions"
                ],
                certifications: ["Professional Cloud Architect", "Cloud Security Engineer", "DevOps Engineer"]
              }
            ].map((cloud, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${cloud.color} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                    {cloud.logo}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {cloud.platform}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Security Specialties</h4>
                    <div className="space-y-2">
                      {cloud.specialties.map((specialty, specialtyIdx) => (
                        <div key={specialtyIdx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Team Certifications</h4>
                    <div className="space-y-1">
                      {cloud.certifications.map((cert, certIdx) => (
                        <div key={certIdx} className="text-sm text-gray-600">
                          • {cert}
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

      {/* Assessment Process */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Security Assessment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive coverage of your cloud security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Environment Discovery",
                description: "Map your cloud infrastructure, services, and data flows across all platforms.",
                activities: ["Asset Inventory", "Service Mapping", "Data Flow Analysis", "Dependency Identification"]
              },
              {
                step: "02",
                title: "Configuration Review",
                description: "Analyze cloud configurations against security best practices and compliance requirements.",
                activities: ["IAM Policy Analysis", "Network Configuration", "Storage Security", "Logging Review"]
              },
              {
                step: "03",
                title: "Vulnerability Testing",
                description: "Perform automated and manual testing to identify security vulnerabilities.",
                activities: ["Automated Scanning", "Manual Testing", "API Security Testing", "Container Security"]
              },
              {
                step: "04",
                title: "Risk Assessment",
                description: "Evaluate findings and provide prioritized recommendations for remediation.",
                activities: ["Risk Scoring", "Business Impact", "Remediation Planning", "Compliance Mapping"]
              }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {process.description}
                </p>
                <div className="space-y-1">
                  {process.activities.map((activity, activityIdx) => (
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

      {/* Pricing Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Security Assessment Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing based on your cloud environment size and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Startup Cloud Review",
                price: "£5,000 - £12,000",
                description: "Perfect for small cloud deployments",
                features: [
                  "Single cloud platform",
                  "Basic configuration review",
                  "IAM assessment",
                  "Storage security check",
                  "API security testing",
                  "Compliance overview",
                  "Remediation guidance"
                ],
                popular: false
              },
              {
                name: "Enterprise Cloud Audit",
                price: "£15,000 - £35,000",
                description: "Comprehensive assessment for growing businesses",
                features: [
                  "Multi-cloud assessment",
                  "Complete configuration review",
                  "Advanced IAM analysis",
                  "Network security testing",
                  "DevSecOps integration review",
                  "Compliance mapping",
                  "Penetration testing",
                  "Executive reporting"
                ],
                popular: true
              },
              {
                name: "Continuous Cloud Security",
                price: "£8,000/month",
                description: "Ongoing monitoring and assessment",
                features: [
                  "Monthly security assessments",
                  "Continuous compliance monitoring",
                  "Automated security scanning",
                  "Configuration drift detection",
                  "Incident response support",
                  "Security training",
                  "24/7 monitoring dashboard",
                  "Quarterly executive reports"
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
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
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

      {/* Case Study */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Security Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we helped a fintech startup secure their AWS infrastructure and achieve SOC 2 compliance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">FinTech Cloud Transformation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A growing payment processor needed to secure their AWS infrastructure to meet SOC 2 requirements 
                  and prepare for enterprise client onboarding. We identified critical misconfigurations and 
                  implemented a comprehensive security framework.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">Zero</div>
                    <div className="text-gray-700">Critical Findings Post-Remediation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">30 Days</div>
                    <div className="text-gray-700">To SOC 2 Compliance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-700">Infrastructure Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50%</div>
                    <div className="text-gray-700">Reduction in Security Incidents</div>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Link href="/portfolio">Read Full Case Study</Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Security Improvements</h4>
                <div className="space-y-4">
                  {[
                    "Implemented least-privilege IAM policies",
                    "Secured S3 buckets with proper access controls",
                    "Enabled comprehensive logging and monitoring",
                    "Configured VPC security groups and NACLs",
                    "Implemented secrets management with AWS KMS",
                    "Set up automated compliance monitoring"
                  ].map((improvement, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Cloud Infrastructure Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Don&apos;t leave your cloud security to chance. Get a comprehensive assessment of your infrastructure 
            and APIs to identify and fix vulnerabilities before they become problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                Schedule Cloud Security Review
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Get Custom Assessment
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Cloud security experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Multi-cloud certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Compliance focused</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}