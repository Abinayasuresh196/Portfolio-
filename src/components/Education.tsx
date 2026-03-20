import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <GraduationCap size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Education</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-syne font-bold text-foreground">Francis Xavier Engineering College</h3>
              <p className="text-xs text-muted-foreground">Tirunelveli, Tamil Nadu</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            B.Tech — Information Technology
            <br />
            (Specialized in Data Science)
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
              <Calendar size={20} className="text-cyan" />
            </div>
            <div>
              <h3 className="font-syne font-bold text-foreground">CGPA 9.2</h3>
              <p className="text-xs text-muted-foreground">Current Academic Score</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} />
            2023 — 2027
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
