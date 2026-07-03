import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="font-syne font-extrabold text-lg text-foreground">
            PA<span className="text-primary">.</span>
          </span>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Full-Stack and Machine Learning Portfolio
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
