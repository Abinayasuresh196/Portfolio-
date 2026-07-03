import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/data/site";

const stats = [
  { label: "CGPA", value: siteConfig.cgpa },
  { label: "Projects", value: "9" },
  { label: "Internships", value: "3" },
];

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs text-emerald-400 font-medium tracking-wide uppercase">
          Available for opportunities
        </span>
      </div>

      <h1
        className="font-syne font-extrabold text-5xl md:text-7xl leading-tight mb-4 gradient-text animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(239 84% 67%), hsl(187 94% 54%), hsl(330 90% 72%), hsl(239 84% 67%))",
          backgroundSize: "300% auto",
        }}
      >
        {siteConfig.name}
      </h1>

      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
        {siteConfig.tagline}
      </div>

      <div className="mb-6 flex flex-wrap gap-2 max-w-2xl">
        {["TensorFlow", "Deep Learning", "Computer Vision", "MERN Stack"].map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mb-4">
        {siteConfig.summary}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-sm text-muted-foreground">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <Mail size={14} />
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} />
          {siteConfig.location} · {siteConfig.timezone}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-2 border-primary pl-4 py-2">
            <div className="font-syne font-extrabold text-2xl text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 active:scale-95 transition-transform cursor-pointer">
              <Download size={16} />
              Download Resume
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-popover border border-border rounded-md shadow-lg p-1 min-w-[220px] z-50"
          >
            <DropdownMenuItem
              asChild
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground p-2 rounded focus:bg-accent focus:text-accent-foreground"
            >
              <a
                href={siteConfig.resumes.mern.path}
                download="PON ABINAYA S RESUME.pdf"
                className="flex items-center gap-2 w-full text-sm"
              >
                <Download size={14} />
                {siteConfig.resumes.mern.label}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground p-2 rounded focus:bg-accent focus:text-accent-foreground"
            >
              <a
                href={siteConfig.resumes.ml.path}
                download="PON ABINAYA S RESUME(ML).pdf"
                className="flex items-center gap-2 w-full text-sm"
              >
                <Download size={14} />
                {siteConfig.resumes.ml.label}
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" className="gap-2 active:scale-95 transition-transform" asChild>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            View GitHub
          </a>
        </Button>
        <Button variant="outline" className="gap-2 active:scale-95 transition-transform" asChild>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" className="gap-2 active:scale-95 transition-transform" asChild>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={16} />
            Email Me
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
