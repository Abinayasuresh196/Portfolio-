import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-syne font-extrabold text-lg text-foreground">
          PA<span className="text-primary">.</span>
        </span>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Abinayasuresh196" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/pon-abinaya-38ab67290" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:ponuzz196@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pon Abinaya S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
