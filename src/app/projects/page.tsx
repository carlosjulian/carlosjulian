import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/page-transition";
import { getDynamicProjects, getCategories } from "@/lib/data";

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "Projects | Carlos Julián",
  description: "Explore Carlos Julián's GitHub projects, experiments, and engineering work across AI and software development.",
};

export default async function ProjectsPage() {
  const projects = await getDynamicProjects();
  const categories = getCategories(projects);

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <PageTransition>
        <Projects projects={projects} categories={categories} />
      </PageTransition>
      <Footer />
    </main>
  );
}
