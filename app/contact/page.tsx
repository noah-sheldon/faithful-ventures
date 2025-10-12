"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#00C2A8]/10 via-white to-[#0074D9]/10 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-black mb-6">
            Let&apos;s Transform Your Business
            <span className="block bg-gradient-to-r from-[#00C2A8] to-[#0074D9] bg-clip-text text-transparent">
              {" "}
              Together
            </span>
          </h1>
          <p className="text-xl text-[#1E1E1E] max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to accelerate your growth with AI-powered solutions and
            enterprise cybersecurity? Get your free consultation and custom
            roadmap from our team of specialists.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00C2A8]" />
              <span>Free consultation & assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00C2A8]" />
              <span>24-hour response guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00C2A8]" />
              <span>Custom ROI analysis included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <h2 className="text-3xl font-bold text-black mb-2">
                  Start Your Project
                </h2>
                <p className="text-[#1E1E1E] mb-8">
                  Tell us about your project and we&apos;ll provide a custom
                  quote within 24 hours.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-[#00C2A8] mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-black mb-2">
                        Thank you!
                      </h3>
                      <p className="text-[#1E1E1E]">
                        We&apos;ve received your message and will contact you
                        within 24 hours with your custom consultation.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Check your email for confirmation and next steps.
                      </p>
                    </div>
                  ) : (
                    <>
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                          {submitError}
                        </div>
                      )}

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                          >
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="John Smith"
                            required
                            className="border-gray-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="john@company.com"
                            required
                            className="border-gray-300"
                          />
                        </div>
                      </div>

                      {/* Company & Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                          >
                            Company Name
                          </label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            placeholder="Your Company Ltd"
                            className="border-gray-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+44 20 1234 5678"
                            className="border-gray-300"
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label
                          htmlFor="project-type"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Project Type *
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("projectType", value)
                          }
                          required
                        >
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">
                              Web Development & Design
                            </SelectItem>
                            <SelectItem value="seo-marketing">
                              SEO & Digital Marketing
                            </SelectItem>
                            <SelectItem value="ai-automation">
                              AI & Automation
                            </SelectItem>
                            <SelectItem value="cybersecurity">
                              Cybersecurity Services
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Services
                            </SelectItem>
                            <SelectItem value="consultation">
                              General Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Budget Range */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Estimated Budget *
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                          required
                        >
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">
                              Under £10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              £10,000 - £25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              £25,000 - £50,000
                            </SelectItem>
                            <SelectItem value="50k-100k">
                              £50,000 - £100,000
                            </SelectItem>
                            <SelectItem value="100k-plus">£100,000+</SelectItem>
                            <SelectItem value="not-sure">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Preferred Timeline
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("timeline", value)
                          }
                        >
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="When would you like to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">
                              As soon as possible
                            </SelectItem>
                            <SelectItem value="1-2-months">
                              1-2 months
                            </SelectItem>
                            <SelectItem value="3-6-months">
                              3-6 months
                            </SelectItem>
                            <SelectItem value="6-plus-months">
                              6+ months
                            </SelectItem>
                            <SelectItem value="just-exploring">
                              Just exploring options
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Project Details */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Tell us about your project goals, challenges, and any specific requirements..."
                          rows={4}
                          required
                          className="border-gray-300"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          "Get Free Consultation"
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our privacy
                        policy. We&apos;ll never share your information.
                      </p>
                    </>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Quick Contact Options */}
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 justify-start"
                  >
                    <a
                      href="https://calendar.app.google/a9nebr5GxsShHSNy7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Clock className="w-5 h-5 mr-3" />
                      Schedule a Free 30-min Call
                    </a>
                  </Button>

                  <div className="flex items-center p-4 bg-white rounded-lg border">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Email Us
                      </div>
                      <a
                        href="mailto:info@faithfulvc.xyz"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        info@faithfulvc.xyz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white rounded-lg border">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Location
                      </div>
                      <div className="text-gray-600">
                        London, UK (Remote & On-site)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "We Review Your Request",
                        description:
                          "Our team analyzes your project requirements and timeline.",
                      },
                      {
                        step: "2",
                        title: "Free Consultation Call",
                        description:
                          "We schedule a 30-minute call to discuss your goals and answer questions.",
                      },
                      {
                        step: "3",
                        title: "Custom Proposal",
                        description:
                          "You receive a detailed proposal with timeline, pricing, and next steps.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose FaithfulVC?
                </h3>
                <div className="space-y-3">
                  {[
                    "100+ successful projects delivered",
                    "ISO 27001 certified security experts",
                    "Average 150% increase in client ROI",
                    "24-hour response guarantee",
                    "No long-term contracts required",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about working with
              FaithfulVC.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed timelines in our proposals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  Do you work with startups or only enterprises?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We work with businesses of all sizes, from startups to Fortune 500 companies. Our services are tailored to match your budget and growth stage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  What makes your security services different?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Unlike typical agencies, we have certified ethical hackers on our team who embed security best practices into every project from day one. We also offer comprehensive penetration testing and compliance consulting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  Do you provide ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, we offer various support packages including maintenance, monitoring, and continuous optimization. Many clients choose our ongoing partnerships for long-term success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  Can you help with both development and marketing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! We're a full-service agency covering web development, AI automation, SEO, digital marketing, and cybersecurity. Our integrated approach ensures all services work together seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#0074D9] transition-colors">
                  What if I'm not sure about my exact requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  That's perfectly fine! We start with a discovery consultation to understand your goals and challenges. We'll help you define requirements and recommend the best solutions for your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join over 100 businesses that have transformed their digital
            presence with FaithfulVC. Let&apos;s discuss how we can help you
            achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <a
                href="https://calendar.app.google/a9nebr5GxsShHSNy7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white/20 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <a href="mailto:info@faithfulvc.xyz">Send Us an Email</a>
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>5-star rated service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-300" />
              <span>Trusted by 100+ businesses</span>
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
