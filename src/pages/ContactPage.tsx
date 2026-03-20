import Navbar from "@/components/Navbar";
import ContactChips from "@/components/ContactChips";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <ContactChips />
        <ContactForm />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;

