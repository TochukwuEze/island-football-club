import type { Metadata } from "next";
import { TopBar } from "@/components/landing/TopBar";
import { MainHeader } from "@/components/landing/MainHeader";
import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PartnersPageContent from "@/components/partners/PartnersPage";

export const metadata: Metadata = {
  title: "Our Partners | Island Football Club",
  description:
    "Meet the partners and sponsors who support Island Football Club's mission to inspire growth for players and clubs across Nigeria and beyond.",
};

export default function PartnersRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      <Navbar />
      <main className="flex-1">
        <PartnersPageContent />
      </main>
      <Footer />
    </div>
  );
}
