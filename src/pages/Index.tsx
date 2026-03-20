import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactChips from "@/components/ContactChips";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import GitHubActivity from "@/components/GitHubActivity";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FadeInSection from "@/components/FadeInSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection delay={100}>
        <ContactChips />
      </FadeInSection>
      <FadeInSection delay={50}>
        <Skills />
      </FadeInSection>
      <FadeInSection delay={50}>
        <Education />
      </FadeInSection>
      <FadeInSection delay={50}>
        <GitHubActivity />
      </FadeInSection>
      <FadeInSection delay={50}>
        <Certifications />
      </FadeInSection>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
