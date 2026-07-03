import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, X } from "lucide-react";

type Certification = {
  emoji: string;
  title: string;
  image?: string;
  link?: string;
};

const certifications: Certification[] = [
  { emoji: "🐍", title: "NPTEL — Python Programming", image: "/certificates/nptel-python.png" },
  { emoji: "🏭", title: "NPTEL — Industry 4.0", image: "/certificates/nptel-industry4.png" },
  {
    emoji: "📜",
    title: "Prodigy Infotech — Letter of Recommendation (Full-Stack Development)",
    link: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-letterofrecommendation-fullstackwebdevelopment-activity-7413440215274582016-MHEI",
  },
  { emoji: "🌐", title: "Full-Stack Web Development Bootcamp", image: "/certificates/fullstack-bootcamp.png" },
  { emoji: "☕", title: "Spring Boot Development Bootcamp", image: "/certificates/springboot-bootcamp.png" },
  { emoji: "📱", title: "Hands-on Workshop — Mobile Application Development", image: "/certificates/mobile-app-workshop.png" },
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
        {certifications.map((cert) => {
          const isClickable = Boolean(cert.image || cert.link);

          if (cert.link && !cert.image) {
            return (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg border border-border p-5 transition-colors flex items-start gap-4 text-left hover:border-primary/30 cursor-pointer"
              >
                <span className="text-2xl">{cert.emoji}</span>
                <div className="min-w-0">
                  <h3 className="font-syne font-bold text-sm text-foreground leading-snug">{cert.title}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">View on LinkedIn</div>
                </div>
              </a>
            );
          }

          return (
            <button
              key={cert.title}
              type="button"
              disabled={!isClickable}
              onClick={() => (cert.image ? setActiveImageSrc(cert.image) : undefined)}
              className={[
                "bg-card rounded-lg border border-border p-5 transition-colors flex items-start gap-4 text-left",
                isClickable ? "hover:border-primary/30 cursor-pointer" : "opacity-90 cursor-default",
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
          );
        })}
      </div>

      {activeImageSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageSrc(null)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <button
              type="button"
              onClick={() => setActiveImageSrc(null)}
              aria-label="Close image preview"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition-colors hover:bg-black/85"
            >
              <X size={18} />
            </button>
            <img
              key={activeImageKey}
              src={activeImageSrc}
              alt="Certificate"
              className="w-[90vw] h-[78vh] object-contain rounded-lg bg-black shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
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
