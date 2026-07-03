import { User, Target, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";

const AboutMe = () => {
  return (
    <section id="about-me" className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <User size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <p className="text-muted-foreground leading-relaxed mb-4">{siteConfig.summary}</p>
          <p className="text-muted-foreground leading-relaxed">
            I am pursuing my {siteConfig.degree} at {siteConfig.college} ({siteConfig.graduationYears})
            with a current CGPA of {siteConfig.cgpa}. My work spans deep learning and computer vision projects
            like Veriframe, alongside full-stack MERN applications built during internships at Prodigy Infotech
            and Wizbees Technologies.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target size={16} className="text-primary" />
            <h3 className="font-syne font-bold text-sm text-foreground uppercase tracking-wider">
              Career Objective
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{siteConfig.careerObjective}</p>
        </div>

        <div className="lg:col-span-3 bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart size={16} className="text-primary" />
            <h3 className="font-syne font-bold text-sm text-foreground uppercase tracking-wider">
              Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {siteConfig.softSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
