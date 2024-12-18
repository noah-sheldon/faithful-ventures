import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

export default function About() {
  return (
    <main className="flex flex-col items-center px-6 py-12 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          About <span className="text-[#2BAA8E]">Faithful Ventures</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          We are a team dedicated to helping businesses thrive with innovative,
          scalable, and tailored software solutions. Your vision is our mission.
        </p>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          At Faithful Ventures, our mission is to empower businesses by
          delivering high-quality software solutions that drive growth,
          streamline operations, and bring ideas to life. We partner with you to
          innovate, solve challenges, and create a lasting impact.
        </p>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "We strive to build creative, future-ready solutions.",
            },
            {
              title: "Excellence",
              description:
                "We deliver high-quality work that exceeds expectations.",
            },
            {
              title: "Collaboration",
              description: "We partner closely with clients to ensure success.",
            },
          ].map((value, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#2BAA8E]">Top Expertise</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Our experienced team delivers solutions tailored to your goals.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#2BAA8E]">
              Scalable Solutions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Build systems designed to grow with your business.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#2BAA8E]">
              Reliable Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We’re here for you with dependable service and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 text-center bg-[#2BAA8E] text-white rounded-lg">
        <h2 className="text-3xl font-semibold">
          Let’s Build Something Great Together
        </h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Ready to take your business to the next level? Contact us today to get
          started or schedule a call with us.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Contact Us Button */}
          <Button
            asChild
            className="w-36 bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-transform transform hover:scale-105 text-lg"
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

      {/* Footer Separator */}
      <Separator className="bg-gray-300 dark:bg-gray-700" />
    </main>
  );
}
