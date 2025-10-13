import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="m-5 max-w-5xl mx-auto px-6 py-12 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-[#2BAA8E]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Last updated: <span className="font-semibold">{today}</span>
        </p>
      </section>

      {/* Introduction */}
      <section>
        <p className="leading-relaxed text-lg">
          At <strong>Faithful Ventures</strong>, your privacy is of utmost
          importance to us. This Privacy Policy outlines how we collect, use,
          and safeguard your personal information when you interact with our
          website{" "}
          <Link href="/" className="text-[#2BAA8E] hover:underline">
            www.faithfulvc.xyz
          </Link>{" "}
          and services.
        </p>
        <p className="mt-4 leading-relaxed text-lg">
          By using our website and services, you agree to the terms of this
          policy.
        </p>
      </section>

      {/* Information We Collect */}
      <section>
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Personal Information</strong>: When you contact us,
            subscribe to newsletters, or engage our services, we may collect
            your name, email address, phone number, and business details.
          </li>
          <li>
            <strong>Non-Personal Information</strong>: Technical data, such as
            IP addresses, browser types, device information, and website usage
            statistics, collected through cookies and analytics tools.
          </li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="leading-relaxed text-lg">We use your information to:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Provide and improve our services.</li>
          <li>Respond to inquiries, support requests, or feedback.</li>
          <li>Analyze website usage to enhance user experience.</li>
          <li>Send updates, newsletters, or service-related notifications.</li>
        </ul>
      </section>

      {/* Cookies and Tracking */}
      <section>
        <h2 className="text-2xl font-bold mb-4">3. Cookies and Tracking</h2>
        <p className="leading-relaxed text-lg">
          Our website uses cookies and tracking technologies to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Analyze site traffic and usage patterns.</li>
          <li>Improve user experience and site performance.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-lg">
          You can disable cookies in your browser settings, but this may impact
          the functionality of certain features on our website.
        </p>
      </section>

      {/* Sharing Your Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
        <p className="leading-relaxed text-lg">
          We do not sell, trade, or rent your personal information. However, we
          may share your data with trusted third-party service providers who
          assist in operating our website or providing services.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
        <p className="leading-relaxed text-lg">
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <ul className="space-y-2 mt-4">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:info@faithfulvc.xyz"
              className="text-[#2BAA8E] hover:underline"
            >
              info@faithfulvc.xyz
            </a>
          </li>
          <li>
            🌐 Website:{" "}
            <Link href="/" className="text-[#2BAA8E] hover:underline">
              www.faithfulvc.xyz
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
