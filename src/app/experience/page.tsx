import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Experience | Carlos Julián",
  description: "Carlos Julián's journey across engineering, AI, software development, and digital creation.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <PageTransition>
        <Experience />
      </PageTransition>
      <Footer />
    </main>
  );
}
