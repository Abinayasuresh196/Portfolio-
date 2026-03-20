import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const chips = [
  { icon: Mail, label: "ponuzz196@gmail.com", href: "mailto:ponuzz196@gmail.com" },
  { icon: Phone, label: "+91 9360625774", href: "tel:+919360625774" },
  { icon: Linkedin, label: "Pon Abinaya", href: "https://www.linkedin.com/in/pon-abinaya-38ab67290" },
  { icon: Github, label: "Abinayasuresh196", href: "https://github.com/Abinayasuresh196" },
  { icon: MapPin, label: "Tirunelveli", href: "#" },
];

const ContactChips = () => {
  return (
    <section id="contact" className="px-6 pb-16 max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-3">
        {chips.map((chip) => (
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
        ))}
      </div>
    </section>
  );
};

export default ContactChips;
