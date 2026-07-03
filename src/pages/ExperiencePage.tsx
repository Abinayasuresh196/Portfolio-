import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageIntro
        eyebrow="Career"
        title="Experience & Internships"
        description="Hands-on experience across frontend, full-stack, and product development roles, with a focus on building reliable applications, clean interfaces, and scalable features."
      />
      <Experience />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ExperiencePage;

