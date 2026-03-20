import { useEffect, useMemo, useState } from "react";
import { BadgeCheck } from "lucide-react";

type Certification = {
  emoji: string;
  title: string;
  image?: string;
};

const certifications: Certification[] = [

  { emoji: "🐍", title: "NPTEL — Python Programming", image: "/certificates/nptel-python.png" },
  { emoji: "🏭", title: "NPTEL — Industry 4.0", image: "/certificates/nptel-industry4.png" },
  { emoji: "📜", title: "Prodigy Infotech — Letter of Recommendation" },
  { emoji: "🌐", title: "Web Development Bootcamp", image: "/certificates/fullstack-bootcamp.png" },
  { emoji: "☕", title: "Spring Boot Development Bootcamp", image: "/certificates/springboot-bootcamp.png" },
  { emoji: "📱", title: "Hands-on Workshop — Mobile App Development", image: "/certificates/mobile-app-workshop.png" },
];

const Certifications = () => {
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
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <BadgeCheck size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {certifications.map((cert) => (
          <button
            key={cert.title}
            type="button"
            disabled={!cert.image}
            onClick={() => (cert.image ? setActiveImageSrc(cert.image) : undefined)}
            className={[
              "bg-card rounded-lg border border-border p-5 transition-colors flex items-start gap-4 text-left",
              cert.image ? "hover:border-primary/30 cursor-pointer" : "opacity-90 cursor-default",
            ].join(" ")}
          >
            <span className="text-2xl">{cert.emoji}</span>
            <div className="min-w-0">
              <h3 className="font-syne font-bold text-sm text-foreground leading-snug">{cert.title}</h3>
              {cert.image ? (
                <div className="mt-1 text-xs text-muted-foreground">Click to view</div>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {activeImageSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageSrc(null)}
        >
          <div className="flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
            <img
              key={activeImageKey}
              src={activeImageSrc}
              alt="Certificate"
              className="w-[90vw] h-[78vh] object-contain rounded-lg bg-black shadow-2xl"
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

export default Certifications;
