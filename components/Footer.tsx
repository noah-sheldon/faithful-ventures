import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2BAA8E] to-[#228F75] text-gray-200 py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">
              Faithful Ventures
            </h2>
            <p className="text-gray-300">
              Innovative software solutions for growing businesses. Let's bring
              your vision to life!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.replace(/\s/g, "").toLowerCase()}`}
                    className="hover:text-white hover:underline underline-offset-4 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:contact.faithfulventures@gmail.com"
                  className="hover:text-white transition"
                >
                  contact.faithfulventures@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-5 h-5" />
                <a
                  href="https://x.com/faithfulvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  X
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/company/faithfulvc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup
        <div className="text-center mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">
            Stay Updated
          </h3>
          <div className="flex justify-center gap-2">
            <Input
              placeholder="Enter your email"
              className="w-64 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 transition">
              Subscribe
            </Button>
          </div>
        </div> */}

        {/* Separator */}
        <Separator className="bg-gray-500" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 mt-6">
          &copy; {new Date().getFullYear()} Faithful Ventures. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
