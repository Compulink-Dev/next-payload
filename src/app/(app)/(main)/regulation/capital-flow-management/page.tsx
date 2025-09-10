// app/(frontend)/regulation/capital-flows/page.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  ArrowLeft,
  Building,
  Scale,
  FileCheck,
  ListChecks,
  ClipboardList,
  Landmark,
  ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Regulatory Framework Component
function RegulatoryFrameworkContent() {
  const regulations = [
    {
      title: "Exchange Control Act",
      chapter: "Chapter 22:05",
      description:
        "Principal legislation governing exchange control in Zimbabwe",
      file: "/documents/acts/Exchange_Control_Act-_Updated.pdf",
      size: "292 KB",
    },
    {
      title: "Exchange Control Regulations, 1996",
      reference: "Statutory Instrument 109 of 1996",
      description: "Regulations made under the Exchange Control Act",
      file: "/documents/acts/SIs/exchange-control-regulations,-1996-(statutory-instrument-109-of-1996).pdf",
      size: "355 KB",
    },
    {
      title: "Exchange Control (General) Order, 1996",
      reference: "Statutory Instrument 110 of 1996",
      description: "General order for exchange control operations",
      file: "/documents/acts/SIs/exchange-control-(general-)-order,-1996-(statutory-instrument-110-of-1996).pdf",
      size: "420 KB",
    },
    {
      title:
        "Exchange Control (Authorised Dealers with Limited Authority) Order, 2015",
      reference: "Statutory Instrument 104 of 2015",
      description: "Order regulating authorised dealers with limited authority",
      file: "/documents/acts/SIs/SI  2015-104 - Exchange Control(Authorised Dealer with Limited Authority), Order, 2015 statutory-instrument-104.2015.pdf",
      size: "787 KB",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Regulatory Framework</h2>

      <div className="grid grid-cols-1 gap-6">
        {regulations.map((regulation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Scale className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {regulation.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>
                            {regulation.chapter || regulation.reference}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {regulation.size}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {regulation.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={regulation.file}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Directives and Circulars Component
function DirectivesContent() {
  const directives = [
    {
      title: "Foreign Investment Guidelines",
      reference: "Directive No. 01/2023",
      description:
        "Guidelines for foreign investment procedures and requirements",
      file: "/documents/capital-flows/foreign-investment-guidelines-2023.pdf",
      size: "1.2 MB",
    },
    {
      title: "Diaspora Remittance Framework",
      reference: "Circular No. 15/2022",
      description:
        "Framework for diaspora remittances and investment procedures",
      file: "/documents/capital-flows/diaspora-remittance-framework-2022.pdf",
      size: "980 KB",
    },
    {
      title: "Export Proceeds Repatriation",
      reference: "Directive No. 08/2021",
      description: "Requirements for repatriation of export proceeds",
      file: "/documents/capital-flows/export-proceeds-repatriation-2021.pdf",
      size: "850 KB",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Directives & Circulars</h2>

      <div className="grid grid-cols-1 gap-6">
        {directives.map((directive, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow border-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {directive.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{directive.reference}</span>
                          <Badge variant="outline" className="text-xs">
                            {directive.size}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {directive.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={directive.file}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Authorized Dealers Component
function AuthorizedDealersContent() {
  const dealerTypes = [
    {
      type: "Authorized Dealers",
      description: "Commercial banks authorized to deal in foreign exchange",
      count: "15 Institutions",
      link: "/regulation/capital-flows/authorized-dealers",
    },
    {
      type: "Authorized Dealers with Limited Authority",
      description:
        "Specialized institutions with limited foreign exchange dealing authority",
      count: "8 Institutions",
      link: "/regulation/capital-flows/adlas",
    },
    {
      type: "Bureaux de Change",
      description: "Licensed foreign currency exchange bureaus",
      count: "25 Operators",
      link: "/regulation/capital-flows/bureaux-de-change",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Authorized Dealers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dealerTypes.map((dealer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  {dealer.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {dealer.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{dealer.count}</Badge>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={dealer.link}
                      className="flex items-center gap-1"
                    >
                      View List
                      <ArrowRightLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Systems and Processes Component
function SystemsContent() {
  const systems = [
    {
      name: "CEPECS",
      fullName: "Computerised Exports Payments Exchange Control System",
      description:
        "Electronic system for processing export documents and payments",
      link: "https://cepecsrpt.excon.rbz.co.zw/",
    },
    {
      name: "CEBAS",
      fullName: "Centralised Electronic Banking Application System",
      description:
        "Platform for authorized dealers to report foreign exchange transactions",
      link: "https://www.forex.rbz.co.zw/cebas",
    },
    {
      name: "Bureau De Change Reporting",
      fullName: "Bureau De Change Transactions Reporting System",
      description: "System for reporting bureau de change transactions",
      link: "http://bdctrs.rbz.co.zw/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Systems & Processes</h2>

      <div className="grid grid-cols-1 gap-6">
        {systems.map((system, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FileCheck className="h-5 w-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{system.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {system.fullName}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {system.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={system.link}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Access System
                      <ArrowRightLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Capital Flows Management Page Component
export default function CapitalFlowsPage() {
  const [activeTab, setActiveTab] = useState("framework");

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
              <Link href="/regulation" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Regulation
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Landmark className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">
                Capital Flows Management
              </h1>
              <p className="text-xs md:text-sm text-blue-200">
                Regulating foreign exchange and capital movements
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger
                value="framework"
                className="flex items-center gap-2"
              >
                <Scale className="h-4 w-4" />
                Regulatory Framework
              </TabsTrigger>
              <TabsTrigger
                value="directives"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Directives
              </TabsTrigger>
              <TabsTrigger value="dealers" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Authorized Dealers
              </TabsTrigger>
              <TabsTrigger value="systems" className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                Systems
              </TabsTrigger>
            </TabsList>

            <TabsContent value="framework">
              <RegulatoryFrameworkContent />
            </TabsContent>

            <TabsContent value="directives">
              <DirectivesContent />
            </TabsContent>

            <TabsContent value="dealers">
              <AuthorizedDealersContent />
            </TabsContent>

            <TabsContent value="systems">
              <SystemsContent />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Additional Information Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5" />
                  Compliance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Guidelines and requirements for compliance with capital flows
                  regulations, including reporting obligations and documentation
                  standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Application Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download application forms for various capital flows
                  transactions, including foreign investment approvals and
                  external payment applications.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/regulation/capital-flows/forms">
                    Download Forms
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  FAQs & Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Frequently asked questions and guidance notes on capital flows
                  management, foreign exchange procedures, and compliance
                  requirements.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/regulation/capital-flows/faqs">View FAQs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
