import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function Services() {
  return (
    <main className="flex flex-col items-center px-6 py-12 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our <span className="text-[#2BAA8E]">Services</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          Explore how Faithful Ventures can transform your business with
          tailored, innovative software solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Software Consulting",
              description:
                "Expert advice to streamline your software strategy, improve workflows, and achieve your business goals.",
              icon: "💡",
            },
            {
              title: "Custom Development",
              description:
                "Build bespoke software solutions designed for scalability, performance, and seamless integration.",
              icon: "🛠️",
            },
            {
              title: "Product Innovation",
              description:
                "Transform your ideas into market-ready products using cutting-edge technology and strategic development.",
              icon: "🚀",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-2">{service.icon}</div>
                <CardTitle className="text-2xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold text-[#2BAA8E]">
              Expert Guidance
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We bring years of experience to help you succeed with clear,
              actionable insights.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold text-[#2BAA8E]">
              Tailored Solutions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Every project is crafted to fit your business needs, ensuring
              optimal results.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold text-[#2BAA8E]">Future-Ready</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We leverage cutting-edge technology to keep you ahead of the
              competition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center py-12 bg-[#2BAA8E] text-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Reach out today to schedule a consultation or book an appointment with
          us.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          {/* Contact Us Button */}
          <Button
            asChild
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-transform transform hover:scale-105 text-lg"
          >
            <a href="mailto:info@faithfulvc.xyz">Contact Us</a>
          </Button>

          {/* Book Appointment Button */}
          <Button
            asChild
            variant="outline"
            className="text-[#2BAA8E] border-white hover:bg-white hover:text-[#2BAA8E] transition-transform transform hover:scale-105 text-lg"
          >
            <a
              href="https://calendar.app.google/a9nebr5GxsShHSNy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment <Calendar className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Separator */}
      <Separator className="bg-gray-300 dark:bg-gray-700" />
    </main>
  );
}
