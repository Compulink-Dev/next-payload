// app/(frontend)/about/page.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Target,
  BarChart3,
  Scale,
  Download,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Tab content components
function HistoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            The Reserve Bank of Zimbabwe has its origins in the Bank of Rhodesia
            and Nyasaland which was created in March 1956 as a central bank for
            the Federation of Rhodesia and Nyasaland. The Reserve Bank was the
            successor to the Central Currency Board, which had the sole right to
            issue currency.
          </p>
          <p className="mb-4">
            Originally, the Bank was situated in Vincent (now Mapondera)
            Building in Harare from where the High Court of Zimbabwe currently
            operates, and later moved to Bank Chambers at 76 Samora Machel
            Avenue, in June 1957 as its new headquarters.
          </p>
          <p className="mb-4">
            Following a rapid growth in its operations and staff complement, the
            Bank found it necessary to construct its current headquarters
            complex at 80 Samora Machel Avenue. The building, billed as the most
            technologically advanced in Zimbabwe was officially opened on May 31
            1996.
          </p>
          <p className="mb-4">
            The Reserve Bank of Zimbabwe operates under the Reserve Bank of
            Zimbabwe Act, Chapter 22: 15 of 1964. The Act provides for the Board
            of Directors and the post of Governor who is responsible for the
            day-to-day administration and operations of the Bank. The Governor
            is assisted by two Deputy Governors.
          </p>
          <p>
            The Governor and his two deputies are appointed by the State
            President for renewable five-year-terms. The board of directors is
            chaired by the Governor, and its membership includes a maximum of
            seven non-executive directors, appointed by the President and
            representing key sectors of the economy.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function MissionContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Target className="h-5 w-5" />
              Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              To be a credible, transformative and responsive central bank that
              contributes to the economic development of Zimbabwe.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <BarChart3 className="h-5 w-5" />
              Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700">
              To achieve and maintain price and financial system stability to
              foster sustainable and inclusive economic development.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Scale className="h-5 w-5" />
              Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-amber-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Accountability
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Transparency
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Integrity
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Efficiency
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Teamwork
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function FunctionsContent() {
  const functions = [
    "Monetary policy formulation and implementation",
    "Issuer of bank notes and coins",
    "Custodian of gold and other foreign assets",
    "Banker and advisor to government",
    "Bankers' bank and lender of last resort",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Core Functions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            {`  The Bank is responsible for the formulation and implementation of
            monetary policy, directed at ensuring low and stable inflation
            levels. A further core function of the Bank is to maintain a stable
            banking system through its supervisory and lender of last resort
            functions. Other secondary roles of the Bank include the management
            of the country's gold and foreign exchange assets. The bank is the
            sole issuer of currency and acts as banker and advisor to
            Government.`}
          </p>

          <div className="space-y-4">
            {functions.map((func, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-muted rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <p className="flex-1">{func}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LegislationContent() {
  const [activeLegislationTab, setActiveLegislationTab] = useState("acts");

  const acts = [
    {
      name: "Reserve Bank of Zimbabwe Act, [Chapter 22:15]",
      link: "/documents/acts/RBZ_Act.pdf",
    },
    {
      name: "Banking Act, Chapter 24:20",
      link: "/documents/acts/zim-banking-act-with-2011-amendments.pdf",
    },
    {
      name: "National Payment Systems Act, Chapter 24:23",
      link: "/index.php/about-us/about-us/legislation/acts/42-legislation/acts/573-national-payment-systems-act-chapter-24-23",
    },
    {
      name: "Sovereign Wealth Fund Act (General Notice 190 of 2015)",
      link: "/index.php/about-us/about-us/legislation/acts/42-legislation/acts/1222-sovereign-wealth-fund-act-general-notice-190-of-2015",
    },
    {
      name: "Reserve Bank of Zimbabwe Amendment Act, 2017",
      link: "/index.php/about-us/about-us/legislation/acts/42-legislation/acts/507-reserve-bank-of-zimbabwe-amendment-act-2017",
    },
  ];

  const statutoryInstruments = [
    {
      name: "S.I 2022 - 4 Banking (Declaration of the Victoria Falls Special Economic Zone as an International Financial Services Centre) Notice, 2022",
      link: "/index.php/about-us/about-us/legislation/statutory-instruments/43-legislation/statutory-instruments/1220-s-i-2022-4-banking-declaration-of-the-victoria-falls-special-economic-zone-as-an-international-financial-services-centre-notice-2022",
    },
    {
      name: "S.I 2021 - 110 Suppression of Foreign and International Terrorism Regulations, 2021",
      link: "/index.php/about-us/about-us/legislation/statutory-instruments/43-legislation/statutory-instruments/1219-s-i-2021-110-suppression-of-foreign-and-international-terrorism-regulations-2021",
    },
    {
      name: "S.I 2020 - 65A Banking (Savings Interest Rates) Regulations, 2020",
      link: "/index.php/about-us/about-us/legislation/statutory-instruments/43-legislation/statutory-instruments/1217-s-i-2020-65a-banking-savings-interest-rates-regulations-2020",
    },
    {
      name: "S. I 2018 - 5 Public Procurement and Disposal of Public Assets (General) Regulations, 2018",
      link: "/index.php/about-us/about-us/legislation/statutory-instruments/43-legislation/statutory-instruments/1221-s-i-2018-5-public-procurement-and-disposal-of-public-assets-general-regulations-2018",
    },
    {
      name: "S.I 2018 -168 Public Entities Corporate Governance (General) Regulations",
      link: "/index.php/about-us/about-us/legislation/statutory-instruments/43-legislation/statutory-instruments/534-s-i-2018-168-public-entities-corporate-governance-general-regulations",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Legal Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Establishment</h3>
            <p className="text-muted-foreground">
              The Reserve Bank of Zimbabwe (the Bank) is established by section
              4 of the Reserve Bank of Zimbabwe Act, Chapter 22:15 and governed
              by a Board of Directors.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Functions</h3>
            <p className="text-muted-foreground">
              The Act specifies a number of functions which the Bank carries
              out. Chief among these is the maintenance of price stability, the
              formulation and execution of monetary policy and the fostering of
              a stable financial system.
            </p>
          </div>

          <Tabs
            value={activeLegislationTab}
            onValueChange={setActiveLegislationTab}
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="acts">Acts</TabsTrigger>
              <TabsTrigger value="instruments">
                Statutory Instruments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="acts">
              <div className="space-y-4">
                {acts.map((act, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium">{act.name}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={act.link}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/about-us/about-us/legislation/acts">
                  View All Acts
                </Link>
              </Button>
            </TabsContent>

            <TabsContent value="instruments">
              <div className="space-y-4">
                {statutoryInstruments.map((instrument, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium">{instrument.name}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={instrument.link}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/about-us/about-us/legislation/statutory-instruments">
                  View All Instruments
                </Link>
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SubsidiariesContent() {
  const subsidiaries = [
    {
      name: "Fidelity Printers and Refiners (Private) Limited",
      website: "http://www.fpr.co.zw/",
      description: "Printers of currency and securities, gold refining",
    },
    {
      name: "Aurex (Private) Limited",
      website: "http://www.aurex.co.zw/",
      description:
        "Production of gold jewellery, beneficiation of gold and diamonds",
    },
    {
      name: "Export Credit Guarantee Corporation",
      website: "http://www.ecgc.co.zw/",
      description: "Insures Zimbabwe's exports and domestic business",
    },
    {
      name: "Homelink (Private) Limited",
      website: "http://www.homelinkzim.com/",
      description:
        "Mobilises foreign currency from Zimbabweans in the diaspora, supports funding of projects, provides housing facilities",
    },
    {
      name: "Zimbabwe Asset Management Corporation (ZAMCO) (Private) Limited",
      website: "http://www.zamco.co.zw/",
      description:
        "Strengthening of financial services institutions' balance sheets through taking over non-performing loans",
    },
    {
      name: "Fintrust Pension Fund",
      website: "#",
      description:
        "Administering the pension funds for Reserve Bank of Zimbabwe and its subsidiaries",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Subsidiaries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            The subsidiaries of the Bank and their main activities are listed
            below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  {subsidiary.name}
                  {subsidiary.website !== "#" && (
                    <Link
                      href={subsidiary.website}
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </h3>
                <p className="text-muted-foreground">
                  {subsidiary.description}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Main About Page Component
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("history");

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
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Building2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">About the Bank</h1>
              <p className="text-xs md:text-sm text-blue-200">
                Learn about the Reserve Bank of Zimbabwe
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
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="mission">Vision & Mission</TabsTrigger>
              <TabsTrigger value="functions">Functions</TabsTrigger>
              <TabsTrigger value="legislation">Legislation</TabsTrigger>
              <TabsTrigger value="subsidiaries">Subsidiaries</TabsTrigger>
            </TabsList>

            <div className="mt-10 md:mt-0">
              <TabsContent value="history">
                <HistoryContent />
              </TabsContent>

              <TabsContent value="mission">
                <MissionContent />
              </TabsContent>

              <TabsContent value="functions">
                <FunctionsContent />
              </TabsContent>

              <TabsContent value="legislation">
                <LegislationContent />
              </TabsContent>

              <TabsContent value="subsidiaries">
                <SubsidiariesContent />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
