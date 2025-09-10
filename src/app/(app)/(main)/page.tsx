"use client";
// app/(frontend)/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  BarChart3,
  ChartNoAxesCombined,
  DollarSign,
  FileText,
} from "lucide-react";
import Link from "next/link";

// import { getHomePageData } from "@/lib/payload/api";
import { motion } from "framer-motion";
import NewsSection from "./_components/NewSection";

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reserve Bank of Zimbabwe
            </h1>
            <p className="text-xl mb-8">
              Promoting monetary stability and financial system resilience
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link href="/financial-markets">Financial Markets</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-blue-900 hover:bg-blue-900/10"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Key Economic Indicators
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Inflation Rate (YoY)</span>
                  <Badge variant="outline" className="text-white border-white">
                    121.82% (Aug 2025)
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Policy Rate</span>
                  <Badge variant="outline" className="text-white border-white">
                    20.00%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>USD/ZWG Interbank</span>
                  <Badge variant="outline" className="text-white border-white">
                    26.7140
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Exchange Rates Component
function ExchangeRatesTabs() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Financial Indicators
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="exchange" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="exchange">Exchange Rates</TabsTrigger>
            <TabsTrigger value="gold">Gold Coin</TabsTrigger>
            <TabsTrigger value="inflation">Inflation</TabsTrigger>
            <TabsTrigger value="auction">Auction Results</TabsTrigger>
          </TabsList>

          <TabsContent value="exchange">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">Currency</span>
                <span className="font-medium">Rate (ZWG)</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg">
                  <span>USD</span>
                  <span className="font-semibold">26.7140</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg">
                  <span>GBP</span>
                  <span className="font-semibold">35.9386</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg">
                  <span>EUR</span>
                  <span className="font-semibold">31.1753</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg">
                  <span>ZAR</span>
                  <span className="font-semibold">0.6643</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/research/markets/exchange-rates">
                  View All Rates
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="gold">
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">
                  Mosi Oa Tunya Gold Coin
                </h4>
                <p className="text-sm text-amber-700">
                  Price per ounce: USD 3,734.01
                </p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/research/markets/mosi-oa-tunya-rates">
                  View Gold Prices
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="inflation">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                  <p className="text-sm text-blue-700">M-O-M Inflation</p>
                  <p className="text-2xl font-bold text-blue-900">0.40%</p>
                  <p className="text-xs text-blue-600">August 2025</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-sm text-green-700">Y-O-Y Inflation</p>
                  <p className="text-2xl font-bold text-green-900">121.82%</p>
                  <p className="text-xs text-green-600">August 2025</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/research/markets/inflation">
                  View Inflation Data
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="auction">
            <div className="space-y-4">
              <div className="p-4 bg-slate-100 rounded-lg">
                <h4 className="font-semibold mb-2">Foreign Exchange Auction</h4>
                <p className="text-sm text-muted-foreground">
                  Latest auction results and historical data
                </p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/financial-markets/foreign-exchange-auction">
                  View Auction Results
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// News and Updates Component
// function NewsSection() {
//   const newsItems = [
//     {
//       title: "Stakeholder Service Charter 2025 - 2029",
//       date: "Sep 2, 2025",
//       category: "Publication",
//       link: "/documents/publications/RBZ_Publications/2025/Stakeholder_Service_Charter_2.09.25__11zon.pdf",
//     },
//     {
//       title: "MEFMI Vacancies: Director Positions",
//       date: "Sep 1, 2025",
//       category: "Notice",
//       link: "/documents/public_notice/2025/MEFMI_Advertisement_for_Vacancies_-Director_Positions_September_2025-updated_version.pdf",
//     },
//     {
//       title: "2024 Annual Report Published",
//       date: "Aug 28, 2025",
//       category: "Report",
//       link: "/documents/ar/2024%20ANNUAL%20REPORT.pdf",
//     },
//     {
//       title: "ZiG Perception and Confidence Survey II",
//       date: "Aug 25, 2025",
//       category: "Survey",
//       link: "https://rbzzigsurvey.com",
//     },
//   ];

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <FileText className="h-5 w-5" />
//           Latest Updates
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {newsItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="p-4 border rounded-lg hover:shadow-md transition-shadow"
//             >
//               <div className="flex justify-between items-start mb-2">
//                 <Badge variant="outline">{item.category}</Badge>
//                 <span className="text-sm text-muted-foreground">
//                   {item.date}
//                 </span>
//               </div>
//               <h3 className="font-semibold mb-2">{item.title}</h3>
//               <Button variant="ghost" size="sm" asChild>
//                 <Link href={item.link} className="flex items-center gap-1">
//                   <Download className="h-4 w-4" />
//                   Download
//                 </Link>
//               </Button>
//             </motion.div>
//           ))}
//         </div>
//         <Button variant="outline" className="w-full mt-4" asChild>
//           <Link href="/publications-notices">View All Updates</Link>
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// Quick Links Section
function QuickLinksSection() {
  const links = [
    {
      title: "Fintech Regulatory Sandbox",
      description: "Innovation framework for financial technology",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "https://frs.rbz.co.zw/",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Credit Registry",
      description: "Centralized credit information system",
      icon: <FileText className="h-8 w-8" />,
      link: "/financial-stability/credit-registry",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Consumer Hub",
      description: "Resources for financial consumers",
      icon: <Banknote className="h-8 w-8" />,
      link: "/public-awareness",
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Procurement",
      description: "Tenders and procurement information",
      icon: <ChartNoAxesCombined className="h-8 w-8" />,
      link: "/procurement",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Quick Access Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${link.color} mb-4`}>
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <Button asChild variant="ghost" className="mt-auto">
                    <Link href={link.link}>Access Service</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Home Page Component
export default function HomePage() {
  // Fetch data from Payload CMS
  // const homeData = await getHomePageData();

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      <main className="flex-1">
        {/* Financial Indicators Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
              <div className="lg:col-span-2">
                <ExchangeRatesTabs />
              </div>
              <div>
                <NewsSection />
              </div>
            </div>
          </div>
        </section>

        <QuickLinksSection />
      </main>
    </div>
  );
}
