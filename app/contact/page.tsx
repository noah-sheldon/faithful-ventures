"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("myzyqljr");

  return (
    <main className="flex flex-col items-center px-6 py-12 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Get in <span className="text-[#2BAA8E]">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Send us a message, email, or connect with us on social media.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Send Us a Message
        </h2>
        {state.succeeded ? (
          <p className="text-center text-green-600 font-semibold">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#2BAA8E] text-white hover:bg-[#228F75] transition-transform transform hover:scale-105"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </section>

      {/* Contact Information */}
      <section className="w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="mailto:info@faithfulvc.xyz"
            className="flex items-center gap-2 text-lg text-[#2BAA8E] hover:text-[#228F75] transition-colors"
          >
            <Mail className="w-6 h-6" /> info@faithfulvc.xyz
          </Link>
          <Link
            href="https://www.linkedin.com/company/faithfulvc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-[#2BAA8E] hover:text-[#228F75] transition-colors"
          >
            <Linkedin className="w-6 h-6" /> LinkedIn
          </Link>
          <Link
            href="https://x.com/faithfulvc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-[#2BAA8E] hover:text-[#228F75] transition-colors"
          >
            <Twitter className="w-6 h-6" /> Twitter
          </Link>
        </div>
      </section>
    </main>
  );
}
