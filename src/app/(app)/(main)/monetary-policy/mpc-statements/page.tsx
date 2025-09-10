// app/(frontend)/monetary-policy/mpc-statements/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";

const allMPCStatements = [
  {
    title: "MPC Post Meeting Statement - 26 April 2024",
    link: "/documents/mps/2024/MPC_-_Monetary_Policy_Committee_Press_Statement_26_April_2024.pdf",
    size: "147 KB",
  },
  {
    title: "2024 Monetary Policy Statement at a Glance - 5 April 2024",
    link: "/documents/mps/2024/2024_Monetary_Policy_Statement_at_a_Glance.pdf",
    size: "350KB",
  },
  {
    title: "MPC Post Meeting Statement - 4 December 2023",
    link: "/documents/mps/2023/Resolutions_of_the_Monetary_Policy_Committee_Meeting_Held_on_1_December_2023_2.pdf",
    size: "890 KB",
  },
  {
    title: "MPC Post Meeting Statement - 24 October 2023",
    link: "/documents/press/2023/October/Press_Statement-_MPC_Resolutions_-_23-10-2023_print_.pdf",
    size: "194 KB",
  },
  {
    title: "MPC Post Meeting Statement - 28 July 2023",
    link: "/documents/press/2023/July/Monetary_Policy_Committee_Meeting_-_28_July_2023.pdf",
    size: "677 KB",
  },
  // 👉 Add more here as needed...
];

export default function MPCStatementsPage() {
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
              <Link
                href="/monetary-policy/statements"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Monetary Policy
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold">MPC Statements</h1>
          <p className="text-blue-200">
            Full list of Monetary Policy Committee statements
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {allMPCStatements.map((statement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{statement.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {statement.size}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={statement.link}
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
        </div>
      </main>
    </div>
  );
}
