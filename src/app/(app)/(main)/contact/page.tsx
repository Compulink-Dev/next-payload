// app/(frontend)/contact/page.tsx
"use client";

import {
  Phone,
  Mail,
  Printer,
  Facebook,
  Twitter,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:bg-white/10"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-lg md:text-3xl font-bold">Contact Us</h1>
          <p className="text-blue-200 text-xs md:text-sm">
            Reach out to the Reserve Bank of Zimbabwe
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
          {/* Headquarters */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Headquarters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                80 Samora Machel Avenue <br />
                P.O. Box 1283 <br />
                Harare, Zimbabwe
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                +263 0242 703 000, +263 867 700 0477
              </p>
              <p>
                <strong>Toll Free:</strong> <br />
                0800 6009 (TelOne) <br />
                0808 6770 (Econet)
              </p>
              <p className="flex items-center gap-2">
                <Printer className="h-4 w-4 text-blue-600" />
                +263 4 707 800 / 706 450
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:info@rbz.co.zw" className="hover:underline">
                  info@rbz.co.zw
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Bulawayo Office */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Bulawayo Regional Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                93 Leopold Takawira Avenue <br />
                Bulawayo
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                +263 (0292) 72141-5, 08677002046
              </p>
              <p className="flex items-center gap-2">
                <Printer className="h-4 w-4 text-blue-600" />
                +263 (0292) 74039
              </p>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Facebook className="h-6 w-6 text-blue-600" />
                <a
                  href="https://www.facebook.com/ReserveBankZim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="h-6 w-6 text-sky-500" />
                <a
                  href="https://twitter.com/ReserveBankZIM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer Map (Optional) */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.01221013925!2d31.051876314899988!3d-17.829222587822268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5b7f45b4769%3A0x5a0a9a20c0f3bb9!2s80%20Samora%20Machel%20Ave%2C%20Harare!5e0!3m2!1sen!2szw!4v1694591830437!5m2!1sen!2szw"
            width="100%"
            height="350"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg border"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
