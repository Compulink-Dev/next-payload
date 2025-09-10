import { Button } from "@/components/ui/button";
import { ArrowLeft, Landmark } from "lucide-react";
import Link from "next/link";
import React from "react";

function Credit() {
  return (
    <div>
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
                Back to Financial Inclusion
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Landmark className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">Credit Registry</h1>
              <p className="text-blue-200 text-xs md:text-sm">
                Regulating foreign exchange and capital movements
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Credit;
