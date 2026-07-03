import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const chips = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "Pon Abinaya", href: siteConfig.linkedin },
  { icon: Github, label: "Abinayasuresh196", href: siteConfig.github },
  { icon: MapPin, label: siteConfig.location, href: undefined },
];

const ContactChips = () => {
  return (
    <section id="contact" className="px-6 pb-16 max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-3">
        {chips.map((chip) =>
          chip.href ? (
            <a
              key={chip.label}
              href={chip.href}
              target={chip.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <chip.icon size={14} />
              {chip.label}
            </a>
          ) : (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground"
            >
              <chip.icon size={14} />
              {chip.label}
            </span>
          )
        )}
      </div>
    </section>
  );
};

export default ContactChips;
