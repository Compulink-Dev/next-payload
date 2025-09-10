"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

const divisions = [
  {
    id: "secretary",
    title: "Bank Secretary & General Counsel",
    description: (
      <>
        <p>
          The division comprises three units: Bank Secretariat, General Counsel,
          and Communications & Corporate Affairs.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Producing accurate, timely stakeholder reports</li>
          <li>Providing legal and compliance advice</li>
          <li>Coordinating Board of Directors’ meetings</li>
          <li>Ensuring good governance practices</li>
          <li>Building the Bank’s corporate image</li>
        </ul>
      </>
    ),
  },
  {
    id: "supervision",
    title: "Bank Supervision",
    description: (
      <>
        <p>
          Responsible for promoting financial stability through regulation and
          supervision of banking institutions.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Registration of banking institutions</li>
          <li>Off-site surveillance & on-site examinations</li>
          <li>Promoting corporate governance & risk management</li>
          <li>Taking prompt supervisory action against weak banks</li>
        </ul>
      </>
    ),
  },
  {
    id: "research",
    title: "Economic Research & Policy",
    description: (
      <>
        <p>
          Undertakes macroeconomic research and policy formulation to ensure
          price and financial stability.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Domestic Statistics & Analysis</li>
          <li>International Economics</li>
          <li>Policy Research, Modelling & Publications</li>
        </ul>
      </>
    ),
  },
  {
    id: "exchange",
    title: "Exchange Control",
    description: (
      <>
        <p>
          Administers Exchange Control regulations and manages capital flows.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Licensing and compliance of dealers & bureaus</li>
          <li>Monitoring foreign trade data</li>
          <li>Fighting illicit financial flows</li>
          <li>Managing balance of payments stability</li>
        </ul>
      </>
    ),
  },
  {
    id: "markets",
    title: "Financial Markets",
    description: (
      <>
        <p>
          Ensures efficient management of reserves, payment systems, and capital
          markets.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Banking Operations</li>
          <li>Money & Capital Markets</li>
          <li>International Banking & Portfolio Management</li>
          <li>National Payment Systems</li>
        </ul>
      </>
    ),
  },
  {
    id: "hr",
    title: "Human Resources & Administration",
    description: (
      <>
        <p>
          Provides support services including HR, technical, and security
          functions.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Talent acquisition & development</li>
          <li>Staff wellness & welfare</li>
          <li>Facilities & logistics</li>
          <li>Physical security of assets</li>
        </ul>
      </>
    ),
  },
];

export default function Divisions() {
  return (
    <div className="">
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
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Building2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold"> Divisions</h1>
              <p className="text-xs md:text-sm text-blue-200">
                Explore the key divisions of the Reserve Bank. Switch between
                tabs to view details.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <Tabs defaultValue={divisions[0].id} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {divisions.map((division) => (
              <TabsTrigger key={division.id} value={division.id}>
                {division.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {divisions.map((division, index) => (
            <TabsContent
              key={division.id}
              value={division.id}
              className="mt-24 md:mt-0"
            >
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>{division.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    {division.description}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
