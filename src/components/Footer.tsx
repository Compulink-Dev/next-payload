import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Reserve Bank of Zimbabwe
            </h3>
            <p className="text-blue-200">
              Promoting monetary stability and financial system resilience for
              sustainable economic growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/monetary-policy"
                  className="text-blue-200 hover:text-white"
                >
                  Monetary Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-blue-200 hover:text-white"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/financial-markets"
                  className="text-blue-200 hover:text-white"
                >
                  Financial Markets
                </Link>
              </li>
              <li>
                <Link
                  href="/financial-stability"
                  className="text-blue-200 hover:text-white"
                >
                  Financial Stability
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-blue-200 hover:text-white"
                >
                  Research & Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="/regulation-supervision"
                  className="text-blue-200 hover:text-white"
                >
                  Regulation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://www.facebook.com/ReserveBankZim"
                className="text-blue-200 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/ReserveBankZIM"
                className="text-blue-200 hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="mailto:info@rbz.co.zw"
                className="text-blue-200 hover:text-white"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Reserve Bank of Zimbabwe. All rights
              reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-300">
          <Link href="/disclaimer" className="hover:text-white">
            Disclaimer
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/accessibility" className="hover:text-white">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
