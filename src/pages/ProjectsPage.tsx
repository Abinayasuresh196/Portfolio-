import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <Projects />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectsPage;

