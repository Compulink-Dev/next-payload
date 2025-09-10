"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mail,
  Send,
  CheckCircle,
  Calendar,
  ArrowRight,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

// Types for our news data
interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  link: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

interface NewsData {
  docs: NewsItem[];
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

// Newsletter Component
function Newsletter({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success("Success! You've been subscribed to our newsletter.");

      setEmail("");
      setIsOpen(false);
    } catch (error) {
      toast.error(`Failed to subscribe : ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe to Newsletter
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Subscribe to our Newsletter</DialogTitle>
            <DialogDescription>
              Stay updated with the latest news, reports, and announcements from
              RBZ.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-pulse" />
                  Subscribing...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Subscribe
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// News Section Component
export default function NewsSection() {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/news");

        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }

        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        // Fallback to sample data if API fails
        setNewsData({
          docs: [
            {
              id: "1",
              title: "ZiG Perception and Confidence Survey II",
              date: "2025-08-25T12:00:00.000Z",
              category: "survey",
              link: "https://rbzzigsurvey.com",
              description:
                "A comprehensive survey on ZiG perception and confidence",
              createdAt: "2025-09-09T13:55:26.484Z",
              updatedAt: "2025-09-09T13:55:26.484Z",
            },
            {
              id: "2",
              title: "2024 Annual Report Published",
              date: "2025-08-28T12:00:00.000Z",
              category: "report",
              link: "/documents/ar/2024%20ANNUAL%20REPORT.pdf",
              description:
                "The annual report for the year 2024 has been published",
              createdAt: "2025-09-09T13:54:30.353Z",
              updatedAt: "2025-09-09T13:54:30.353Z",
            },
            {
              id: "3",
              title: "MEFMI Vacancies: Director Positions",
              date: "2025-09-01T12:00:00.000Z",
              category: "notice",
              link: "/documents/public_notice/2025/MEFMI_Advertisement_for_Vacancies_-Director_Positions_September_2025-updated_version.pdf",
              description: "Job vacancies for director positions at MEFMI",
              createdAt: "2025-09-09T13:53:24.459Z",
              updatedAt: "2025-09-09T13:53:24.459Z",
            },
            {
              id: "4",
              title: "Stakeholder Service Charter 2025 - 2030",
              date: "2025-09-02T12:00:00.000Z",
              category: "publication",
              link: "/documents/publications/RBZ_Publications/2025/Stakeholder_Service_Charter_2.09.25__11zon.pdf",
              description: "Service charter for stakeholders from 2025 to 2029",
              createdAt: "2025-09-09T13:50:58.346Z",
              updatedAt: "2025-09-09T13:50:58.347Z",
            },
          ],
          totalDocs: 4,
          limit: 10,
          totalPages: 1,
          page: 1,
          pagingCounter: 1,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: null,
          nextPage: null,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get category icon and color
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "publication":
        return {
          color: "text-blue-600",
          bgColor: "bg-blue-100",
          label: "Publication",
        };
      case "notice":
        return {
          color: "text-amber-600",
          bgColor: "bg-amber-100",
          label: "Notice",
        };
      case "report":
        return {
          color: "text-emerald-600",
          bgColor: "bg-emerald-100",
          label: "Report",
        };
      case "survey":
        return {
          color: "text-purple-600",
          bgColor: "bg-purple-100",
          label: "Survey",
        };
      case "announcement":
        return {
          color: "text-rose-600",
          bgColor: "bg-rose-100",
          label: "Announcement",
        };
      default:
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          label: category,
        };
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest publications, reports, and
              announcements.
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error && !newsData) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest publications, reports, and
              announcements.
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="text-red-500">Error: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest publications, reports, and
            announcements from the Reserve Bank of Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsData?.docs.map((news) => {
                const categoryInfo = getCategoryInfo(news.category);

                return (
                  <Card
                    key={news.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${categoryInfo.bgColor} ${categoryInfo.color}`}
                        >
                          {categoryInfo.label}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(news.date)}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {news.description && (
                        <CardDescription className="mb-4 line-clamp-3">
                          {news.description}
                        </CardDescription>
                      )}
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          View Document
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* View All News Button */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Stay Updated
                </CardTitle>
                <CardDescription>
                  Subscribe to our newsletter to receive the latest news and
                  updates directly in your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Newsletter />
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>
                  Important resources and frequently accessed documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/documents">All Publications</a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/reports">Financial Reports</a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/statistics">Economic Statistics</a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/press">Press Releases</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
