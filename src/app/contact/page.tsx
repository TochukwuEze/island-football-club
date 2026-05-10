import type { Metadata } from "next";
import { TopBar } from "@/components/landing/TopBar";
import { MainHeader } from "@/components/landing/MainHeader";
import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ContactPage from "@/components/landing/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Island Football Club",
  description:
    "Get in touch with Island Football Club. Reach out for membership enquiries, training information, sponsorship opportunities, or any other football-related queries.",
};

export default function ContactRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
