"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      {
        label: "About the Bank",
        href: "/about-us",
      },
      {
        label: "Divisions",
        href: "/about-us/divisions",
      },
      {
        label: "Coporate Governance",
        href: "/about-us/coporate-governance",
      },
    ],
  },
  {
    label: "Monetary Policy",
    children: [
      { label: "Statements", href: "/monetary-policy/statements" },
      {
        label: "Committee Statements",
        href: "/monetary-policy/committee-statements",
      },
    ],
  },
  {
    label: "Regulation",
    children: [
      { label: "Bank Supervision", href: "/regulation/bank-supervision" },
      {
        label: "Capital Flows Management",
        href: "/regulation/capital-flow-management",
      },
    ],
  },
  {
    label: "Research & Statistics",
    children: [
      { label: "Statistics", href: "/research/statistics" },
      { label: "Economic Reaserch", href: "/research/economic-research" },
    ],
  },
  {
    label: "Financial Inclusion",
    children: [
      { label: "Financial Inclusion", href: "/financial-inclusion/statistics" },
      {
        label: "Credit Registry",
        href: "/financial-inclusion/credit-registry",
      },
      {
        label: "Collateral Registry",
        href: "/financial-inclusion/collateral-registry",
      },
      { label: "Basel Il & III", href: "/financial-inclusion/basell&III" },
    ],
  },
  {
    label: "Publications",
    children: [
      { label: "Publications", href: "/publication-notices/publications" },
      {
        label: "Notices",
        href: "/publication-notices/notices",
      },
    ],
  },
  {
    label: "Financial Markets",
    children: [
      {
        label: "National Payment System",
        href: "/financial-markets/national-payment-system",
      },
      {
        label: "Foreign Exchange Auction Trading System",
        href: "/financial-markets/foreign-exchange-auction-trading-system",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-900">
          <Image alt="" src="/rbz_mobile.gif" width={60} height={60} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-72 overflow-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <span className="text-lg font-semibold">RBZ</span>
              </div>
              <MobileNav items={navItems} close={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Desktop Dropdown ---------------- */
function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-700">
        <span>{item.label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg border p-2"
          >
            <ul className="space-y-2">
              {item.children?.map((child) =>
                child.children ? (
                  <li key={child.label}>
                    <DesktopDropdown item={child} />
                  </li>
                ) : (
                  <li key={child.label}>
                    <Link
                      href={child.href ?? "#"}
                      className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {child.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Mobile Nav ---------------- */
function MobileNav({ items, close }: { items: NavItem[]; close: () => void }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col">
      {items.map((item, i) =>
        item.children ? (
          <div key={item.label} className="border-b">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-gray-700"
            >
              {item.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openIndexes.includes(i) ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndexes.includes(i) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6"
                >
                  <MobileNav items={item.children} close={close} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href ?? "#"}
            onClick={close}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-700"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}
