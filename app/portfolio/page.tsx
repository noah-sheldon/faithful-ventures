import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center px-4 md:px-6 lg:px-12 py-12 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our <span className="text-[#2BAA8E]">Portfolio</span>
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          Explore the impactful projects and solutions delivered by Faithful
          Ventures. Let’s help you achieve your vision.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Faithful Connects",
              description:
                "A social networking platform for connecting communities with tailored features.",
              link: "https://fcn.social",
            },
            {
              title: "E-sky Wallet",
              description:
                "A token explorer for Ethena tokens with advanced tracking capabilities.",
              link: "https://github.com/noah-sheldon/e-sky",
            },
            {
              title: "Revival Evangelical Fellowship",
              description:
                "A comprehensive online platform for fostering community and spiritual growth.",
              link: "https://revivalevangelicalfellowship.com",
            },
            {
              title: "nexBit",
              description:
                "A Bitcoin explorer for tracking balances, UTXOs, and transactions in real time.",
              link: "https://7e3lh-5yaaa-aaaaj-azwka-cai.icp0.io/",
            },
          ].map((project, idx) => (
            <Card
              key={idx}
              className="hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 text-[#2BAA8E] border-[#2BAA8E] hover:bg-[#2BAA8E] hover:text-white transition"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Software Consulting",
              description:
                "Helping businesses create strategies for scalable and efficient software.",
            },
            {
              title: "Custom Development",
              description:
                "Building tailored software solutions for businesses of all sizes.",
            },
            {
              title: "Product Innovation",
              description:
                "Transforming ideas into reality with cutting-edge technology.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="w-full py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Satisfied Clients", value: "30+" },
            { label: "Years Experience", value: "5+" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-[#2BAA8E]">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 text-center bg-[#2BAA8E] text-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to Work with Us?
        </h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Contact Faithful Ventures today to start your next successful project
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            className="w-36 bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-transform transform hover:scale-105"
          >
            <a href="mailto:info@faithfulvc.xyz">Contact Us</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-[#2BAA8E] border-white hover:bg-white hover:text-[#2BAA8E] transition-transform transform hover:scale-105"
          >
            <a
              href="https://calendar.app.google/a9nebr5GxsShHSNy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
