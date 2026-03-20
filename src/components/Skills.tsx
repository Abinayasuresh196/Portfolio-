import { Code2, Trophy, Code } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    color: "bg-indigo/15 text-indigo border-indigo/20",
    skills: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "bg-cyan/15 text-cyan border-cyan/20",
    skills: ["Node.js", "Express.js", "Java Spring Boot", "REST APIs"],
  },
  {
    title: "Database",
    color: "bg-pink/15 text-pink border-pink/20",
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "Tools",
    color: "bg-indigo/15 text-indigo border-indigo/20",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Virtual Box"],
  },
  {
    title: "AI & Cloud",
    color: "bg-cyan/15 text-cyan border-cyan/20",
    skills: ["Gemini API", "Firebase", "LLM Integration"],
  },
  {
    title: "Core Competencies",
    color: "bg-pink/15 text-pink border-pink/20",
    skills: ["C", "Java", "Full Stack Development (MERN)", "Responsive Design", "API Development & Integration"],
  },
];

const codingPractices = [
  {
    name: "SkillRack",
    icon: Trophy,
    stat: "Coding Practice",
    link: "http://www.skillrack.com/profile/444945/919a9d785160fa2c4c246c5830417b396c75cd40",
  },
  {
    name: "CodeChef",
    icon: Code2,
    stat: "Competitive Programming",
    link: "https://www.codechef.com/users/abinaya_196",
  },
];

const Skills = () => {
  return (
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <Code size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-12">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-card rounded-lg border border-border p-5">
            <h3 className="font-syne font-bold text-sm text-foreground mb-3 uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs px-3 py-1 rounded-full border ${cat.color} font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Coding Practices */}
      <div className="mb-2">
        <h3 className="font-syne font-bold text-xl text-foreground mb-4">Coding Practices</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {codingPractices.map((p) => {
            const content = (
              <div className="flex items-center gap-4 bg-card rounded-lg border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-syne font-bold text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground font-mono tabular-nums">{p.stat}</div>
                </div>
              </div>
            );

            return p.link ? (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={p.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
