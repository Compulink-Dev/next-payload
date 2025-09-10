// app/(frontend)/regulation/bank-supervision/page.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  ArrowLeft,
  Search,
  Building,
  Scale,
  AlertCircle,
  FileCheck,
  ListChecks,
  ClipboardList,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Circulars Component
function CircularsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const circulars = [
    {
      title: "Foreign Exchange Auction System Introduction",
      date: "June 17, 2020",
      description: "Introduction of a Foreign Exchange Auction Trading System",
      file: "/documents/press/June/Foreign-Exchange-Auction-System---17-6-2020.pdf",
      size: "104 KB",
    },
    {
      title: "Exchange Control Directive RV175/2020",
      date: "2020",
      description: "Exchange control directive for foreign exchange operations",
      file: "/documents/publications/circulars/2020/EXCHANGE-CONTROL-RV175.pdf",
      size: "100 KB",
    },
    {
      title: "Virtual Currencies Circular",
      date: "May 15, 2018",
      description:
        "Circular to Banking Institutions NO. 2/2018: Virtual Currencies",
      file: "/documents/publications/circulars/circular-to-banking-institutions----operations-of-cryptocurrency-exchanges-----11-may-2019.pdf",
      size: "75 KB",
    },
    {
      title: "RTGS Transactions Processing",
      date: "April 2, 2016",
      description:
        "Circular to Banking Institutions NO. 04-2016/BSD: Processing of RTGS Transactions",
      file: "/documents/publications/circulars/circular-to-banking-institutions-no.-04-2016-bsd-processing-of-rtgs-transactions.pdf",
      size: "78 KB",
    },
    {
      title: "Capital & ICAAP Requirements",
      date: "November 13, 2008",
      description:
        "Capital adequacy and internal capital adequacy assessment process",
      file: "/documents/publications/circulars/capital-icaap.pdf",
      size: "399 KB",
    },
  ];

  const filteredCirculars = circulars.filter(
    (circular) =>
      circular.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circular.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCirculars.length / itemsPerPage);
  const currentItems = filteredCirculars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Banking Circulars</h2>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search circulars..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {currentItems.map((circular, index) => (
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
                    <h3 className="font-semibold text-lg mb-2">
                      {circular.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{circular.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {circular.size}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {circular.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={circular.file}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {filteredCirculars.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            No circulars found matching your search.
          </p>
        </div>
      )}
    </motion.div>
  );
}

// Guidelines Component
function GuidelinesContent() {
  const guidelines = [
    {
      title: "Risk Management Prudential Standard",
      code: "No: 01-2024/BSD",
      description: "Risk Management Framework for Banking Institutions",
      file: "/documents/BLSS/Guidelines/2024/Risk_Mgt_Prudential_Standard_No._1-2024_Final.pdf",
    },
    {
      title: "Model Risk Management Prudential Standard",
      code: "No: 02-2023/BSD",
      description: "Guidelines for Model Risk Management",
      file: "/documents/BLSS/Guidelines/2023/Model_Risk_Management_Prudential_Standard_Final_June_2023.pdf",
    },
    {
      title: "Climate Risk Management Guideline",
      code: "No: 01/2023 BSD",
      description: "Climate Risk Management Framework",
      file: "/documents/BLSS/2023/CLIMATE_RISK_MANAGEMENT_GUIDELINE_Apr_2023.pdf",
    },
    {
      title: "Liquidity Coverage Ratio Guidance",
      code: "No: 02-2022/BSD",
      description: "Implementation of Liquidity Coverage Ratio",
      file: "/documents/BLSS/2022/Prudential_Standard_No02-2022_BSD_LCR.pdf",
    },
    {
      title: "Corporate Governance Guideline",
      code: "2004",
      description: "Corporate Governance Framework for Banking Institutions",
      file: "/documents/BLSS/guide_circ_not/corporate-governance-2004.pdf",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Supervisory Guidelines</h2>

      <div className="grid grid-cols-1 gap-6">
        {guidelines.map((guideline, index) => (
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
                          {guideline.title}
                        </h3>
                        <Badge variant="outline" className="mt-1">
                          {guideline.code}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {guideline.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={guideline.file}
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

// Public Notices Component
function PublicNoticesContent() {
  const notices = [
    {
      title: "Upward Review of Transactional Limits",
      date: "November 1, 2024",
      description: "Public notice on the review of transactional limits",
      file: "/documents/public_notice/Public_Notice_on_Review_of_Transactional_Limitspdf.pdf",
      size: "1.26 MB",
    },
    {
      title: "Zimbabwe Gold (ZiG) Legal Status",
      date: "October 28, 2024",
      description:
        "Clarification on the legal status of Zimbabwe Gold currency",
      file: "/documents/public_notice/Public_Notice_-_ZiG_Legal_Status.pdf",
      size: "495 KB",
    },
    {
      title: "Registered Microfinance Institutions",
      date: "September 2024",
      description:
        "List of registered microfinance institutions for January to June 2024",
      file: "/documents/bank_sup/PUBLIC_NOTICES_/PUBLIC_NOTICE_-_Registered_MFIs_-_Aug_2024.pdf",
      size: "495 KB",
    },
    {
      title: "Change of Name - Standard Chartered Bank Zimbabwe",
      date: "July 19, 2024",
      description:
        "Notice of name change for Standard Chartered Bank Zimbabwe Limited",
      file: "/documents/public_notice/Public_Notice_-_Standard_Chartered_Bank_-_Name_Change_July_2024.pdf",
      size: "102 KB",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Public Notices</h2>

      <div className="grid grid-cols-1 gap-6">
        {notices.map((notice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow border-blue-100">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <AlertCircle className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {notice.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>{notice.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {notice.size}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {notice.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={notice.file}
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

// Licensing Requirements Component
function LicensingContent() {
  const licensing = [
    {
      title: "Banking Institution Licensing",
      type: "Banks",
      description: "Requirements for establishing a banking institution",
      documents: [
        {
          name: "Licensing Requirements",
          file: "/documents/bank_sup/licensing_requirements_banks_2018.pdf",
        },
        {
          name: "Application Form",
          file: "/documents/bank_sup/application_formbk_1.pdf",
        },
        {
          name: "Fitness and Probity Assessment",
          file: "/documents/bank_sup/fitnesss_probity_prudential_standards2.pdf",
        },
      ],
    },
    {
      title: "Microfinance Institution Licensing",
      type: "MFIs",
      description: "Requirements for establishing microfinance institutions",
      documents: [
        {
          name: "Credit Only MFI Application",
          file: "/documents/BLSS/2020/Licensing/COMFI_Application_Form_2023.pdf",
        },
        {
          name: "Minimum Requirements for COMFIs",
          file: "/documents/BLSS/2023/COMFIs_-_Minimum_Licensing_Requirements_2023.pdf",
        },
        {
          name: "Deposit-Taking MFI Application",
          file: "/documents/BLSS/2020/Licensing/DTMFIs-2020----Application-Form-DTMF-1.pdf",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Licensing Requirements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {licensing.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  {category.title}
                </CardTitle>
                <Badge variant="outline">{category.type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <Button
                      key={docIndex}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link
                        href={doc.file}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        {doc.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Legal Framework Component
function LegalFrameworkContent() {
  const laws = [
    {
      title: "Reserve Bank of Zimbabwe Act",
      chapter: "Chapter 22:15",
      description: "Act establishing the Reserve Bank of Zimbabwe",
      file: "/documents/acts/rbz-act.pdf",
      size: "130 KB",
    },
    {
      title: "Banking Act",
      chapter: "Chapter 24:20",
      description: "Act regulating banking institutions in Zimbabwe",
      file: "/documents/acts/ZIMBABWE_Banking_Act_2023_updated.pdf",
      size: "511 KB",
    },
    {
      title: "National Payment Systems Act",
      chapter: "Chapter 24:23",
      description: "Act regulating national payment systems",
      file: "/documents/acts/nationalpaymentsystem_act.pdf",
      size: "62 KB",
    },
    {
      title: "Bank Use Promotion Act",
      chapter: "Chapter 24:24",
      description:
        "Act for bank use promotion and suppression of money laundering",
      file: "/documents/acts/bankuse_promotion.pdf",
    },
    {
      title: "Exchange Control Act",
      chapter: "Chapter 22:05",
      description: "Act regulating exchange control in Zimbabwe",
      file: "/documents/acts/exchangecontrol_act.pdf",
      size: "161 KB",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Legal Framework</h2>

      <div className="grid grid-cols-1 gap-4">
        {laws.map((law, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <h3 className="font-semibold">{law.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>{law.chapter}</span>
                {law.size && (
                  <Badge variant="outline" className="text-xs">
                    {law.size}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {law.description}
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={law.file}
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
    </motion.div>
  );
}

// Main Bank Supervision Page Component
export default function BankSupervisionPage() {
  const [activeTab, setActiveTab] = useState("circulars");

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
              <Building className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">
                Bank Supervision
              </h1>
              <p className="text-xs md:text-sm text-blue-200">
                Regulatory framework and supervisory guidelines
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
              <TabsTrigger
                value="circulars"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Circulars
              </TabsTrigger>
              <TabsTrigger
                value="guidelines"
                className="flex items-center gap-2"
              >
                <Scale className="h-4 w-4" />
                Guidelines
              </TabsTrigger>
              <TabsTrigger value="notices" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Notices
              </TabsTrigger>
              <TabsTrigger
                value="licensing"
                className="flex items-center gap-2"
              >
                <FileCheck className="h-4 w-4" />
                Licensing
              </TabsTrigger>
              <TabsTrigger value="legal" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                Legal Framework
              </TabsTrigger>
            </TabsList>

            <div className="mt-12 md:mt-0">
              <TabsContent value="circulars">
                <CircularsContent />
              </TabsContent>

              <TabsContent value="guidelines">
                <GuidelinesContent />
              </TabsContent>

              <TabsContent value="notices">
                <PublicNoticesContent />
              </TabsContent>

              <TabsContent value="licensing">
                <LicensingContent />
              </TabsContent>

              <TabsContent value="legal">
                <LegalFrameworkContent />
              </TabsContent>
            </div>
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
                  Supervision Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Reserve Bank employs a risk-based supervisory approach to
                  ensure the safety and soundness of banking institutions
                  through continuous monitoring and assessment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Registered Institutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access information about operating banking institutions and
                  registered microfinance institutions under the supervision of
                  the Reserve Bank.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/regulation/bank-supervision/institutions">
                    View Institutions
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Reporting Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download standardized reporting templates for regulatory
                  compliance, including credit registry and financial reporting
                  requirements.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/regulation/bank-supervision/templates">
                    Download Templates
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
