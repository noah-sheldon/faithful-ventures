import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full text-center py-24 bg-gray-50 rounded-lg shadow-md m-5">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">
            Empowering Your Vision
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Faithful Ventures provides innovative software solutions tailored to
            your needs.
          </p>
          <div className="flex justify-center gap-4">
            {/* Get in Touch - mailto */}
            <Button
              asChild
              className="bg-[#2BAA8E] text-white hover:bg-[#228F75] transition-transform transform hover:scale-105"
            >
              <a href="mailto:info@faithfulvc.xyz">Get in Touch</a>
            </Button>

            {/* Learn More - routes to About Page */}
            <Button
              variant="outline"
              asChild
              className="border-[#2BAA8E] text-[#2BAA8E] hover:bg-[#2BAA8E] hover:text-white transition-transform transform hover:scale-105"
            >
              <Link href="/about">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Software Consulting",
            "Custom Development",
            "Product Innovation",
          ].map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {service}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Providing scalable and tailored software solutions.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us Preview */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
          At Faithful Ventures, we are passionate about helping businesses
          achieve their goals with technology. Whether you&apos;re just starting
          or scaling up, we provide innovative and reliable software solutions
          tailored to your needs.
        </p>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "John Doe",
              feedback:
                "Faithful Ventures helped us streamline our software process.",
            },
            {
              name: "Jane Smith",
              feedback: "Reliable, innovative, and professional solutions!",
            },
          ].map((testimonial, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              <CardContent>
                <p className="italic">{`"${testimonial.feedback}"`}</p>
                <p className="mt-4 text-right font-bold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center py-16 bg-[#2BAA8E] text-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-4 text-lg">
          Schedule a consultation to see how we can bring your ideas to life.
        </p>
        {/* Schedule a Call Button */}
        <Button
          asChild
          className="mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-transform transform hover:scale-105 text-lg"
        >
          <a
            href="https://calendar.app.google/a9nebr5GxsShHSNy7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call
          </a>
        </Button>
      </section>

      {/* Metrics Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Why Work With Us
        </h2>
        <div className="flex justify-around">
          {[
            { label: "Expert Developers", value: "Top Talent" },
            { label: "Scalable Solutions", value: "Future-Proof" },
            { label: "Reliable Support", value: "24/7" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl font-bold text-[#2BAA8E]">
                {item.value}
              </h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
