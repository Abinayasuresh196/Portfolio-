import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import ContactChips from "@/components/ContactChips";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageIntro
        eyebrow="Contact"
        title="Let’s Connect"
        description="Open to internships, collaborative projects, and opportunities in full-stack development, machine learning, and AI-focused product building."
      />
      <ContactChips />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;

