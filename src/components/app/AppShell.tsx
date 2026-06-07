"use client";

import WindowRouter from "@/components/app/WindowRouter";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BusinessInquiryModal from "@/components/ui/BusinessInquiryModal";
import InternshipApplicationModal from "@/components/ui/InternshipApplicationModal";
import InteractiveMeshBackground from "@/components/effects/InteractiveMeshBackground";
import { AppProvider } from "@/context/AppContext";

export default function AppShell() {
  return (
    <AppProvider>
      <div className="relative min-h-screen">
        <InteractiveMeshBackground />
        <Navbar />
        <WindowRouter />
        <Footer />
        <BusinessInquiryModal />
        <InternshipApplicationModal />
      </div>
    </AppProvider>
  );
}

