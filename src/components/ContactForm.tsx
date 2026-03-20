import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

emailjs.init("oIvJ8AaL3kwfexZQK");

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(
      "pon_abi112",
      "template_rwsqzdp",
      templateParams,
      "oIvJ8AaL3kwfexZQK"
    )
    .then((response) => {
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, (error) => {
      toast({ title: "Error sending message", description: "Please try again later.", variant: "destructive" });
      setSending(false);
    });
  };

  return (
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <Mail size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Get In Touch</h2>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            maxLength={100}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            maxLength={255}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Suggestions..."
            rows={5}
            maxLength={1000}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
          />
        </div>
        <Button
          type="submit"
          disabled={sending}
          className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground active:scale-95 transition-transform"
        >
          <Send size={16} />
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
