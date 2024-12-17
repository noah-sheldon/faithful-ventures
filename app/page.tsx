import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 space-y-12">
      {/* Hero Section */}
      <section className="w-full text-center py-24 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Empowering Your Vision
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Faithful VC provides innovative software solutions tailored to your
            needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="text-lg">Get in Touch</Button>
            <Button variant="outline" className="text-lg">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Software Consulting",
            "Custom Development",
            "Product Innovation",
          ].map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Providing scalable and tailored software solutions.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "John Doe",
              feedback:
                "Faithful VC transformed our software development process.",
            },
            {
              name: "Jane Smith",
              feedback:
                "Professional and reliable solutions that exceeded our expectations.",
            },
          ].map((testimonial, idx) => (
            <Card key={idx} className="hover:shadow-md">
              <CardContent>
                <p className="italic">{`"${testimonial.feedback}"`}</p>
                <p className="mt-4 text-right font-bold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="flex justify-center gap-8">
          <Card className="w-64 hover:shadow-lg">
            <CardContent>
              <p className="text-center font-semibold mt-2">Project 1</p>
            </CardContent>
          </Card>
          <Card className="w-64 hover:shadow-lg">
            <CardContent>
              <p className="text-center font-semibold mt-2">Project 2</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center py-12 bg-blue-100 rounded-lg">
        <h2 className="text-3xl font-semibold">Ready to Work With Us?</h2>
        <Button className="mt-6 text-lg">Contact Us</Button>
      </section>

      {/* About Us Preview */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center">
          Faithful VC is dedicated to providing exceptional software solutions
          that align with your vision.
        </p>
      </section>

      {/* Metrics */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Impact</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-4xl font-bold">100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq1">
            <AccordionTrigger>What services do you provide?</AccordionTrigger>
            <AccordionContent>
              We offer consulting, custom software development, and product
              innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq2">
            <AccordionTrigger>How can we contact you?</AccordionTrigger>
            <AccordionContent>
              You can use our contact form or email us at info@faithfulvc.com.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 text-center bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-gray-500 mt-2">Sign up for our newsletter.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Input placeholder="Enter your email" className="w-64" />
          <Button>Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-600 dark:text-gray-400">
        <Separator />
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Faithful VC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
