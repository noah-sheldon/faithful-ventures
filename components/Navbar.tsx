"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Utility for conditionally combining classes
import { usePathname } from "next/navigation"; // For active link highlighting

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Detect current path for active link highlighting

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-tight">
          Faithful<span className="text-yellow-300">VC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-white text-lg hover:text-yellow-300 transition-colors duration-300",
                pathname === link.href && "border-b-2 border-yellow-300 pb-1"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="secondary" className="hidden md:inline-flex bg-yellow-300 text-gray-800 hover:bg-yellow-400">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white shadow-lg">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-300 text-lg transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-yellow-300 text-gray-800 hover:bg-yellow-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

