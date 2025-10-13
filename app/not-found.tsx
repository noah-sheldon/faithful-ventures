import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" passHref>
          <Button className="bg-[#2BAA8E] hover:bg-[#2BAA8E]/90 text-white px-6 py-3 rounded-lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}