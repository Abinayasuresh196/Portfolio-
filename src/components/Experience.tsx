import { useEffect, useMemo, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Development",
    company: "Prodigy Infotech",
    period: "2025",
    lorLink: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-letterofrecommendation-fullstackwebdevelopment-activity-7413440215274582016-MHEI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    lorImage: "/lor/prodigy-2025-lor.png",
    details: [
      "Developed both frontend and backend of web applications",
      "Used MERN stack for building full-stack projects",
      "Created and used APIs for data communication",
      "Built responsive and user-friendly interfaces",
      "Received Letter of Recommendation for performance",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "2025",
    lorLink: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_webdevelopment-internship-careergrowth-activity-7351170917474951168-GfAJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    lorImage: "/lor/prodigy-2024-lor.png",
    details: [
      "Built responsive web applications using HTML, CSS, and JavaScript",
      "Developed full-stack projects with the MERN stack",
      "Designed and consumed REST APIs",
      "Awarded Letter of Recommendation (LoR)",
    ],
  },
  
  {
    role: "Frontend Development Intern",
    company: "Wizbees Technologies",
    period: "2024",
    details: [
      "Created modern UI components with React.js",
      "Implemented responsive UI/UX designs",
      "Collaborated with design and backend teams",
    ],
  },
];

const Experience = () => {
  const [activeImageSrc, setActiveImageSrc] = useState<string | null>(null);
  const activeImageKey = useMemo(() => activeImageSrc ?? "no-image", [activeImageSrc]);

  useEffect(() => {
    if (!activeImageSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImageSrc]);

  return (
    <section id="experience" className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <Briefcase size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Experience</h2>
      </div>

      <div className="relative pl-8 border-l-2 border-border space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            {/* Dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-syne font-bold text-lg text-foreground">{exp.role}</h3>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">{exp.period}</span>
              </div>
              <p className="text-sm text-primary font-semibold mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.details.map((d, i) => {
                  const isLorLine = d.toLowerCase().includes("letter of recommendation");
                  return (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {isLorLine && exp.lorImage ? (
                        <button
                          type="button"
                          onClick={() => setActiveImageSrc(exp.lorImage)}
                          className="underline underline-offset-2 decoration-primary/60 hover:text-primary transition-colors text-left"
                        >
                          {d} <span className="text-[11px] text-muted-foreground">(View proof)</span>
                        </button>
                      ) : isLorLine && exp.lorLink ? (
                        <a
                          href={exp.lorLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 decoration-primary/60 hover:text-primary transition-colors"
                        >
                          {d}
                        </a>
                      ) : (
                        <span>{d}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {activeImageSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageSrc(null)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              key={activeImageKey}
              src={activeImageSrc}
              alt="Letter of Recommendation"
              className="w-full rounded-lg bg-black shadow-2xl object-contain max-h-[85vh]"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Experience;
