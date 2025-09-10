// app/(frontend)/monetary-policy/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Download,
  ArrowLeft,
  Calendar,
  Search,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Types for our data
interface MonetaryPolicyStatement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullStatement: {
    id: string;
    url: string;
    filename: string;
  };
  atAGlance?: {
    id: string;
    url: string;
    filename: string;
  };
  category: "policy" | "mpc";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface MonetaryPolicyData {
  docs: MonetaryPolicyStatement[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Monetary Policy Statements Component
function MonetaryPolicyStatements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statements, setStatements] = useState<MonetaryPolicyStatement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchStatements = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/monetary-policy?category=policy");

        if (!response.ok) {
          throw new Error("Failed to fetch monetary policy statements");
        }

        const data: MonetaryPolicyData = await response.json();
        console.log("API response:", data);
        setStatements(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching statements:", err);

        // Fallback to sample data if API fails - updated to match new type structure
        setStatements([
          {
            id: "1",
            title: "2025 Mid-term Monetary Policy Statement",
            date: "2025-08-07T00:00:00.000Z",
            excerpt:
              "In line with the need to ensure that there is policy consistency as the Reserve Bank continues to walk the talk, this Mid-Term Monetary Policy Review Statement restates previously announced measures and introduces complementary measures to buttress and provide further clarity.",
            fullStatement: {
              id: "1",
              url: "/documents/mps/2025/MPS_7_August_2025.pdf",
              filename: "MPS_7_August_2025.pdf",
            },
            atAGlance: {
              id: "2",
              url: "/documents/mps/2025/MPS_At_a_Glance_7_August_2025.pdf",
              filename: "MPS_At_a_Glance_7_August_2025.pdf",
            },
            category: "policy",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "2",
            title: "2025 Monetary Policy Statement",
            date: "2025-02-06T00:00:00.000Z",
            excerpt:
              "Greater exchange rate flexibility in the foreign exchange interbank market, anchored by tight monetary conditions, has supported the current stability.",
            fullStatement: {
              id: "3",
              url: "/documents/mps/2025/MPS_February_06_2025.pdf",
              filename: "MPS_February_06_2025.pdf",
            },
            atAGlance: {
              id: "4",
              url: "/documents/mps/2025/MPS_At_A_Glance_February_06_2025_.pdf",
              filename: "MPS_At_A_Glance_February_06_2025_.pdf",
            },
            category: "policy",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatements();
  }, []);

  const filteredStatements = statements.filter(
    (statement) =>
      statement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      statement.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStatements.length / itemsPerPage);
  const currentItems = filteredStatements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-semibold">Monetary Policy Statements</h2>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search statements..."
              className="pl-8"
              disabled
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </motion.div>
    );
  }

  if (error && statements.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-semibold">Monetary Policy Statements</h2>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search statements..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center py-12 text-red-500">Error: {error}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Monetary Policy Statements</h2>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search statements..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6">
        {currentItems.map((statement, index) => (
          <motion.div
            key={statement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {statement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(statement.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {statement.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:items-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={statement.fullStatement.url}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Full Statement
                      </Link>
                    </Button>
                    {statement.atAGlance && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href={statement.atAGlance.url}
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          At a Glance
                        </Link>
                      </Button>
                    )}
                  </div>
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

      {filteredStatements.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            No statements found matching your search.
          </p>
        </div>
      )}
    </motion.div>
  );
}

// MPC Statements Component
function MPCStatements() {
  const [mpcStatements, setMpcStatements] = useState<MonetaryPolicyStatement[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMpcStatements = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/monetary-policy?category=mpc");

        if (!response.ok) {
          throw new Error("Failed to fetch MPC statements");
        }

        const data: MonetaryPolicyData = await response.json();
        setMpcStatements(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching MPC statements:", err);

        // Fallback to sample data if API fails - updated to match new type structure
        setMpcStatements([
          {
            id: "1",
            title: "MPC Post Meeting Statement - 26 April 2024",
            date: "2024-04-26T00:00:00.000Z",
            excerpt: "",
            fullStatement: {
              id: "5",
              url: "/documents/mps/2024/MPC_-_Monetary_Policy_Committee_Press_Statement_26_April_2024.pdf",
              filename:
                "MPC_-_Monetary_Policy_Committee_Press_Statement_26_April_2024.pdf",
            },
            category: "mpc",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "2",
            title: "MPC Post Meeting Statement - 4 December 2023",
            date: "2023-12-04T00:00:00.000Z",
            excerpt: "",
            fullStatement: {
              id: "6",
              url: "/documents/mps/2023/Resolutions_of_the_Monetary_Policy_Committee_Meeting_Held_on_1_December_2023_2.pdf",
              filename:
                "Resolutions_of_the_Monetary_Policy_Committee_Meeting_Held_on_1_December_2023_2.pdf",
            },
            category: "mpc",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMpcStatements();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">
          Monetary Policy Committee Statements
        </h2>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </motion.div>
    );
  }

  if (error && mpcStatements.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">
          Monetary Policy Committee Statements
        </h2>
        <div className="text-center py-12 text-red-500">Error: {error}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        Monetary Policy Committee Statements
      </h2>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {mpcStatements.map((statement, index) => (
              <motion.div
                key={statement.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{statement.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(statement.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={statement.fullStatement.url}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/monetary-policy/mpc-statements">
            View All Committee Statements
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

// Main Monetary Policy Page Component
export default function MonetaryPolicyPage() {
  const [activeTab, setActiveTab] = useState("mpc");

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
              <BarChart3 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">Monetary Policy</h1>
              <p className="text-xs md:text-sm text-blue-200">
                Official statements and policy documents
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
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="mpc" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                MPC Statements
              </TabsTrigger>
              <TabsTrigger
                value="statements"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Policy Statements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mpc">
              <MPCStatements />
            </TabsContent>

            <TabsContent value="statements">
              <MonetaryPolicyStatements />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Additional Information Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  About Monetary Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Reserve Bank of Zimbabwe formulates and implements
                  monetary policy to maintain price stability and support
                  sustainable economic growth. Our policies are designed to
                  ensure low and stable inflation while maintaining a stable
                  financial system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Monetary Policy Committee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {`The Monetary Policy Committee (MPC) is responsible for setting
                  monetary policy. The committee meets regularly to assess
                  economic conditions and make decisions aimed at achieving the
                  Bank's inflation targets and maintaining financial stability.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
