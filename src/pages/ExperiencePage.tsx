import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <Experience />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ExperiencePage;

