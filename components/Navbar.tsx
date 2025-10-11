"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceCategories = [
    {
      category: "Digital Solutions",
      services: [
        { name: "Web Development & Design", href: "/services/web-development" },
        { name: "SEO & Digital Marketing", href: "/services/seo" },
        { name: "AI & Automation", href: "/services/ai-automation" },
      ]
    },
    {
      category: "Cybersecurity",
      services: [
        { name: "Penetration Testing", href: "/services/penetration-testing" },
        { name: "Cloud & API Security", href: "/services/cloud-security" },
        { name: "Compliance Consulting", href: "/services/compliance" },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FaithfulVC Logo"
            width={40}
            height={40}
            priority
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-black tracking-tight">
            Faithful<span className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] bg-clip-text text-transparent">VC</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[#1E1E1E] font-medium hover:text-[#0074D9] transition-colors duration-300",
                pathname === link.href && "text-[#0074D9] border-b-2 border-[#0074D9] pb-1"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 text-[#1E1E1E] font-medium hover:text-[#0074D9] transition-colors duration-300",
                pathname.startsWith('/services') && "text-[#0074D9]"
              )}
            >
              Services
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-200",
                servicesDropdownOpen && "rotate-180"
              )} />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-4 z-50">
                <div className="grid grid-cols-1 gap-6 px-6">
                  {serviceCategories.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.services.map((service, serviceIdx) => (
                          <Link
                            key={serviceIdx}
                            href={service.href}
                            className="block text-[#1E1E1E] hover:text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8]/10 hover:to-[#0074D9]/10 rounded-xl px-3 py-2 transition-all duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <Link
                      href="/services"
                      className="block text-[#0074D9] font-medium hover:text-[#00C2A8] px-3 py-2"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden lg:inline-flex px-6 py-3 bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white font-semibold hover:scale-105 transform transition-all duration-300 rounded-full shadow-lg"
        >
          <a
            href="https://calendar.app.google/a9nebr5GxsShHSNy7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Consultation
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-[#1E1E1E] hover:text-[#0074D9] text-lg font-medium transition-colors duration-300",
                    pathname === link.href && "text-[#0074D9]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Services Menu */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-gray-900 font-semibold mb-3">Services</h3>
                {serviceCategories.map((category, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                      {category.category}
                    </h4>
                    <div className="ml-4 space-y-2">
                      {category.services.map((service, serviceIdx) => (
                        <Link
                          key={serviceIdx}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[#1E1E1E] hover:text-[#0074D9] transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="border-t pt-4 mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white font-semibold hover:scale-105 transform transition-all duration-300 py-3 rounded-full"
                >
                  <a
                    href="https://calendar.app.google/a9nebr5GxsShHSNy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
