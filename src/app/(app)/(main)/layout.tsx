import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "./_components/ContactSection";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <ContactSection />
      <Footer />
    </div>
  );
}
