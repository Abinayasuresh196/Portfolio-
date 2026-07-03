import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageIntro
        eyebrow="Portfolio"
        title="Selected Projects"
        description="A curated collection of full-stack, machine learning, and product-focused work built to solve real problems with thoughtful design and solid engineering."
      />
      <Projects />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectsPage;

