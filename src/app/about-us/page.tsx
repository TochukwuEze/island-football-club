import type { Metadata } from "next";
import { TopBar } from "@/components/landing/TopBar";
import { MainHeader } from "@/components/landing/MainHeader";
import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Island Football Club",
  description:
    "Learn about Island Football Club — our mission, history, coaching staff, and how we inspire and unite the football world from Lekki, Lagos.",
};

export default function AboutUsRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      <Navbar />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
