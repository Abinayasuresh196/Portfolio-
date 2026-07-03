import { Briefcase } from "lucide-react";

type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  technologies: string[];
  lorLink?: string;
  details: string[];
};

const experiences: ExperienceEntry[] = [
  {
    id: "prodigy-fullstack-2025",
    role: "Full-Stack Developer Intern",
    company: "Prodigy Infotech",
    period: "2025",
    type: "Internship",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "MERN Stack"],
    lorLink:
      "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-letterofrecommendation-fullstackwebdevelopment-activity-7413440215274582016-MHEI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    details: [
      "Developed both frontend and backend for production-ready web applications",
      "Built full-stack projects using the MERN stack, focusing on clean architecture and code quality",
      "Designed, implemented, and integrated REST APIs for reliable data communication",
      "Delivered responsive, user-friendly interfaces optimized for performance and accessibility",
      "Received a Letter of Recommendation for consistently high performance",
    ],
  },
  {
    id: "prodigy-web-2025",
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "2025",
    type: "Internship",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "REST APIs"],
    lorLink:
      "https://www.linkedin.com/posts/pon-abinaya-38ab67290_webdevelopment-internship-careergrowth-activity-7351170917474951168-GfAJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    details: [
      "Built responsive web applications using HTML, CSS, and JavaScript",
      "Developed full-stack features with the MERN stack",
      "Designed and consumed REST APIs for secure data exchange",
      "Awarded a Letter of Recommendation (LoR) for internship performance",
    ],
  },
  {
    id: "wizbees-frontend-2024",
    role: "Frontend Development Intern",
    company: "Wizbees Technologies",
    period: "2024",
    type: "Internship",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Responsive UI/UX"],
    details: [
      "Created modern, reusable UI components with React.js",
      "Implemented responsive UI/UX designs across devices and screen sizes",
      "Collaborated closely with design and backend teams to ship features on time",
    ],
  },
];

const Experience = () => {
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
          <div key={exp.id} className="relative">
            <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="font-syne font-bold text-lg text-foreground">{exp.role}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    {exp.type}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums">{exp.period}</span>
                </div>
              </div>
              <p className="text-sm text-primary font-semibold mb-3">{exp.company}</p>

              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-1.5">
                {exp.details.map((d, i) => {
                  const isLorLine = d.toLowerCase().includes("letter of recommendation");
                  return (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {isLorLine && exp.lorLink ? (
                        <a
                          href={exp.lorLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 decoration-primary/60 hover:text-primary transition-colors"
                        >
                          {d} <span className="text-[11px] text-muted-foreground">(View on LinkedIn)</span>
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
    </section>
  );
};

export default Experience;
