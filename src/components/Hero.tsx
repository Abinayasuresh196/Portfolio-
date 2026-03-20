import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "CGPA", value: "9.2" },
  { label: "Projects", value: "5+" },
  { label: "Internships", value: "3" },
];

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      {/* Available badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs text-emerald-400 font-medium tracking-wide uppercase">
          Available for opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="font-syne font-extrabold text-5xl md:text-7xl leading-tight mb-4 gradient-text animate-shimmer"
        style={{ backgroundImage: "linear-gradient(135deg, hsl(239 84% 67%), hsl(187 94% 54%), hsl(330 90% 72%), hsl(239 84% 67%))", backgroundSize: "300% auto" }}
      >
        Pon Abinaya S
      </h1>

      {/* Role badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
        <span className="text-sm text-primary font-semibold">Full Stack Developer</span>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mb-10">
        Passionate MERN stack developer with a knack for building modern applications
        and scalable web platforms. Currently pursuing B.Tech IT at Francis Xavier Engineering College
        with a strong foundation in modern web technologies.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-md mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-l-2 border-primary pl-4 py-2"
          >
            <div className="font-syne font-extrabold text-2xl text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 active:scale-95 transition-transform"
          asChild
        >
          <a href="/resume.pdf" download>
            <Download size={16} />
            Download Resume
          </a>
        </Button>
        <Button variant="outline" className="gap-2 active:scale-95 transition-transform" asChild>
          <a href="https://github.com/Abinayasuresh196" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            View GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
