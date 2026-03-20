import { Github, ExternalLink, FileText, LayoutGrid, Linkedin, Star, GitFork, Code, Calendar, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

type Project = {
  name: string;
  status: "Active" | "Completed";
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  techDoc?: string;
  simpleDoc?: string;
  linkedin?: string;
  screenshots: string[];
  demoVideo?: string;
};

interface RepoData {
  name: string;
  full_name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  topics: string[];
  license: { name: string } | null;
}

const projects: Project[] = [
  {
    name: "Women Empowerment",
    status: "Completed",
    desc: "A women empowerment platform focused on resources, community support, and access to opportunities.",
    tech: ["React", "Tailwind", "Netlify"],
    github: "https://github.com/Abinayasuresh196/Women-Awareness_MERN",
    live: "https://keen-sorbet-c9a258.netlify.app/",
    techDoc: "/docs/women-empowerment-technical.pdf",
    simpleDoc: "/docs/women-empowerment-simple.pdf",
    screenshots: [
      "/projects/women-empowerment/women-empowerment-screenshot1.png",
      "/projects/women-empowerment/women-empowerment-screenshot2.png",
      "/projects/women-empowerment/women-empowerment-screenshot3.png",
    ],
    demoVideo: "/projects/women-empowerment/women-empowerment-demo.mp4",
  },
  {
    name: "VisionBoard",
    status: "Active",
    desc: "AI-powered strategy and vision board platform for goal planning and tracking with intelligent suggestions.",
    tech: ["Gemini API", "Firebase", "LLM", "React"],
    github: "https://github.com/Abinayasuresh196/VisionBoardAI",
    live: "https://visionboardai.netlify.app/",
    techDoc: "/docs/visionboard-technical.pdf", 
    simpleDoc: "/docs/visionboard-simple.pdf",
    screenshots: [
      "/projects/visionboard/visionboard-screenshot1.png",
      "/projects/visionboard/visionboard-screenshot2.png",
      "/projects/visionboard/visionboard-screenshot3.png",
    ],
    demoVideo: "/projects/visionboard/visionboard-demo.mp4",
  },
  { 
    name: "Eco-Vision",
    status: "Completed",
    desc: "Carbon footprint calculator and waste tracking platform with AI-driven sustainability insights.",
    tech: ["Next.js", "AI", "React", "Node.js", "Clerk Authentication", "Drizzle ORM"],
    github: "https://github.com/Abinayasuresh196/Eco-Vision",
    techDoc: "/docs/ecovision-technical.pdf",
    simpleDoc: "/docs/ecovision-simple.pdf",
    linkedin: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_ecovision-ai-driven-waste-management-ugcPost-7400458998963040257-FiUV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    screenshots: [
      "/projects/eco-vision/eco-vision-screenshot1.png",
      "/projects/eco-vision/eco-vision-screenshot2.png",
      "/projects/eco-vision/eco-vision-screenshot3.png",
    ],
    demoVideo: "/projects/eco-vision/eco-vision-demo.mp4",
  },
  {
    name: "NEXUS (Instagram Clone)",
    status: "Completed",
    desc: "Social media platform replicating Instagram's core features including posts, stories, and real-time messaging.",
    tech: ["MERN", "Supabase", "Real-time", "Socket.io"],
    github: "https://github.com/Abinayasuresh196/NEXUS-Social-media-app",
    techDoc: "/docs/nexus-technical.pdf",
    simpleDoc: "/docs/nexus-simple.pdf",
    linkedin: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-internshipexperience-task05-ugcPost-7411455144250224640-v_Wz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    screenshots: [
      "/projects/communication/communication-screenshot1.png",
      "/projects/communication/communication-screenshot2.png",
      "/projects/communication/communication-screenshot3.png",
    ],
    demoVideo: "/projects/communication/communication-demo.mp4",
  },
  {
    name: "Real-time Chat App (Telegram Clone)",
    status: "Completed",
    desc: "Real-time messaging application inspired by Telegram with group chats, media sharing and encryption.",
    tech: ["MERN", "Mongo Atlas", "WebSocket", "Node.js"],
    github: "https://github.com/Abinayasuresh196/Real-Time-Chat-Application",
    techDoc: "/docs/chatapp-technical.pdf",
    simpleDoc: "/docs/chatapp-simple.pdf",
    linkedin: "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-fullstackdevelopment-realtimechat-activity-7410937242409426945-g1r9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    screenshots: [
      "/projects/communication1/communication1-screenshot1.png",
      "/projects/communication1/communication1-screenshot2.png",
      "/projects/communication1/communication1-screenshot3.png",
    ],
    demoVideo: "/projects/communication1/communication1-demo.mp4",
  },
  {
    name: "Food Stall Management",
    status: "Completed",
    desc: "Role-based food ordering and stall management system with real-time order tracking.",
    tech: ["React", "Spring Boot", "MySQL", "Role-based"],
    github: "https://github.com/Abinayasuresh196/event-management_foodstall",
    techDoc: "/docs/foodstall-technical.pdf",
    simpleDoc: "/docs/foodstall-simple.pdf",
    screenshots: [
      "/projects/foodstall/foodstall-screenshot1.png",
      "/projects/foodstall/foodstall-screenshot2.png",
      "/projects/foodstall/foodstall-screenshot3.png",
      "/projects/foodstall/foodstall-screenshot4.png",
    ],
    linkedin : "https://www.linkedin.com/posts/pon-abinaya-38ab67290_springboot-reactjs-mysql-activity-7381723019028660225-qETT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    demoVideo: "/projects/foodstall/foodstall-demo.mp4",
  },
  {
    name: "Learn Craft Hub",
    status: "Completed",
    desc: "E-learning platform with role-based access for students, instructors, and admins with course management.",
    tech: ["MERN", "Role-based Auth", "REST API"],
    github: "https://github.com/Abinayasuresh196/learn-craft-hub",
    techDoc: "/docs/learncraft-technical.pdf",
    simpleDoc: "/docs/learncraft-simple.pdf",
    linkedin:"https://www.linkedin.com/posts/pon-abinaya-38ab67290_mernstack-fullstackdeveloper-webdevelopment-activity-7383491004047437824-hWVO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    screenshots: [
      "/projects/learncraft/learncraft-screenshot1.png",
      "/projects/learncraft/learncraft-screenshot2.png",
      "/projects/learncraft/learncraft-screenshot3.png",
    ],
    demoVideo: "/projects/learncraft/learncraft-demo.mp4",
  },
  {
    name: "E-Commerce Platform",
    status: "Completed",
    desc: "Full-featured e-commerce application with role-based access, product management, cart, and payment integration.",
    tech: ["MERN", "Role-based Auth", "Stripe"],
    github: "https://github.com/Abinayasuresh196/Local-Store-E-commerce-Application",
    linkedin : "https://www.linkedin.com/posts/pon-abinaya-38ab67290_prodigyinfotech-fullstackdevelopment-ecommerceapplication-activity-7410935012721885185-Igku?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEamm1oB0e_WuefiXCt-D5RQYxCEpOna_WE",
    techDoc: "/docs/ecommerce-technical.pdf",
    simpleDoc: "/docs/ecommerce-simple.pdf",
    screenshots: [
      "/projects/e-commerce/e-commerce-screenshot1.png",
      "/projects/e-commerce/e-commerce-screenshot2.png",
      "/projects/e-commerce/e-commerce-screenshot3.png",
      "/projects/e-commerce/e-commerce-screenshot4.png",
    ],
    demoVideo: "/projects/e-commerce/e-commerce-demo.mp4",
  },
  
  
];

// Extract repo name from GitHub URL
const getRepoName = (githubUrl: string): string | null => {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? match[1] : null;
};

// Language colors
const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-400",
  Java: "bg-red-500",
  Python: "bg-green-500",
  Shell: "bg-green-300",
};

// Project Detail Modal Component
const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    if (!project || !isOpen) {
      setRepoData(null);
      return;
    }

    const fetchRepoData = async () => {
      const repoName = getRepoName(project.github);
      if (!repoName) return;

      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/repos/${repoName}`);
        if (res.ok) {
          const data = await res.json();
          setRepoData(data);
        }
      } catch (error) {
        console.error("Failed to fetch repo data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [project, isOpen]);

  useEffect(() => {
    if (project?.screenshots?.length) {
      setActiveScreenshot(0);
    }
  }, [project]);

  if (!project) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 gap-0 bg-card border-border overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-card border-b border-border px-6 py-4">
          <DialogHeader>
            <div className="flex items-center justify-between pr-8">
              <div className="flex items-center gap-3">
                <DialogTitle className="font-syne font-bold text-xl text-foreground">
                  {project.name}
                </DialogTitle>
                <Badge variant={project.status === "Active" ? "default" : "secondary"} className="text-[10px]">
                  {project.status}
                </Badge>
              </div>
            </div>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1 h-[calc(90vh-80px)]">
          <div className="px-6 py-4">
            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>

            {/* Demo Video */}
            {project.demoVideo && (
              <div className="mb-6">
                <h3 className="font-syne font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Demo Video
                </h3>
                <div className="relative rounded-lg overflow-hidden bg-black">
                  <video
                    src={project.demoVideo}
                    className="w-full aspect-video object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            )}

            {/* Tabs for Details */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4 bg-secondary/50">
                <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                <TabsTrigger value="screenshots" className="text-xs">Screenshots</TabsTrigger>
                <TabsTrigger value="github" className="text-xs">GitHub</TabsTrigger>
                <TabsTrigger value="docs" className="text-xs">Documentation</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-0">
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-syne font-semibold text-sm text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h4 className="font-syne font-semibold text-sm text-foreground mb-3">Links</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-9 gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} /> View Code
                        </a>
                      </Button>
                      {project.live && project.live !== "#" && (
                        <Button size="sm" className="h-9 gap-2 bg-primary hover:bg-primary/90" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        </Button>
                      )}
                      {project.linkedin && (
                        <Button variant="outline" size="sm" className="h-9 gap-2" asChild>
                          <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} /> LinkedIn Post
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Screenshots Tab */}
              <TabsContent value="screenshots" className="mt-0">
                {project.screenshots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.screenshots.map((src, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden bg-secondary/30">
                        <img
                          src={src}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">No screenshots available</p>
                )}
              </TabsContent>

              {/* GitHub Tab */}
              <TabsContent value="github" className="mt-0">
                {loading ? (
                  <div className="space-y-3">
                    <div className="h-8 w-48 bg-secondary/50 rounded animate-pulse" />
                    <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-secondary/50 rounded animate-pulse" />
                  </div>
                ) : repoData ? (
                  <div className="space-y-4">
                    {/* Repo Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                          <Star size={14} />
                          <span className="text-xs">Stars</span>
                        </div>
                        <p className="font-syne font-bold text-lg text-foreground">{repoData.stargazers_count}</p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                          <GitFork size={14} />
                          <span className="text-xs">Forks</span>
                        </div>
                        <p className="font-syne font-bold text-lg text-foreground">{repoData.forks_count}</p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                          <Code size={14} />
                          <span className="text-xs">Language</span>
                        </div>
                        <p className="font-syne font-bold text-sm text-foreground flex items-center justify-center gap-1.5">
                          {repoData.language && (
                            <span className={`w-2.5 h-2.5 rounded-full ${langColors[repoData.language] || "bg-gray-400"}`} />
                          )}
                          {repoData.language || "N/A"}
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                          <Calendar size={14} />
                          <span className="text-xs">Updated</span>
                        </div>
                        <p className="font-syne font-bold text-xs text-foreground">{formatDate(repoData.updated_at)}</p>
                      </div>
                    </div>

                    {/* Topics */}
                    {repoData.topics && repoData.topics.length > 0 && (
                      <div>
                        <h4 className="font-syne font-semibold text-sm text-foreground mb-2">Topics</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {repoData.topics.map((topic) => (
                            <span key={topic} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* License */}
                    {repoData.license && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">License:</span>
                        <span>{repoData.license.name}</span>
                      </div>
                    )}

                    {/* Open Issues & Watchers */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{repoData.open_issues_count} open issues</span>
                      <span>{repoData.watchers_count} watchers</span>
                    </div>

                    {/* Created Date */}
                    <div className="text-xs text-muted-foreground">
                      Created on {formatDate(repoData.created_at)}
                    </div>

                    {/* Link to GitHub */}
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> Open in GitHub
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Github size={40} className="mx-auto mb-3 text-muted-foreground/50" />
                    <p className="text-muted-foreground text-sm mb-3">Unable to fetch GitHub data</p>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> View Repository
                      </a>
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Documentation Tab */}
              <TabsContent value="docs" className="mt-0">
                <div className="space-y-3">
                  {project.techDoc && (
                    <a
                      href={project.techDoc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          Technical Documentation
                        </h4>
                        <p className="text-xs text-muted-foreground">Detailed technical specs and architecture</p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.simpleDoc && (
                    <a
                      href={project.simpleDoc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          Simple Documentation
                        </h4>
                        <p className="text-xs text-muted-foreground">Quick overview and getting started guide</p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                  {!project.techDoc && !project.simpleDoc && (
                    <div className="text-center py-8">
                      <FileText size={40} className="mx-auto mb-3 text-muted-foreground/50" />
                      <p className="text-muted-foreground text-sm">No documentation available</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

// Simplified Project Card
const ProjectCard = ({
  project,
  onReadMore,
}: {
  project: Project;
  onReadMore: (project: Project) => void;
}) => {
  return (
    <div className="gradient-border-top bg-card rounded-lg border border-border overflow-hidden hover:-translate-y-[3px] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      {/* Video Preview */}
      {project.demoVideo ? (
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          <video
            src={project.demoVideo}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ) : project.screenshots[0] ? (
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={project.screenshots[0]}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ) : null}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-syne font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <Badge variant={project.status === "Active" ? "default" : "secondary"} className="text-[10px] shrink-0">
            {project.status}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>

        <Button
          onClick={() => onReadMore(project)}
          className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <LayoutGrid size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onReadMore={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;