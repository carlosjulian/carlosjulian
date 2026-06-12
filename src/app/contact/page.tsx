import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Contact | Carlos Julián",
  description: "Get in touch with Carlos Julián for collaborations, engineering projects, or AI-focused work.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <PageTransition>
        <Contact />
      </PageTransition>
      <Footer />
    </main>
  );
}
