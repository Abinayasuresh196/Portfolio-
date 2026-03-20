import { useEffect, useState } from "react";
import { Star, GitFork, Github, GitCommit, GitPullRequest, CircleDot, FolderGit2 } from "lucide-react";

interface RepoData {
  name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  description: string | null;
}

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-400",
  Java: "bg-red-500",
  Python: "bg-green-500",
};

const GitHubActivity = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [stats, setStats] = useState({ totalCommits: 92, totalPRs: 4, totalIssues: 0, contributedTo: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoRes = await fetch("https://api.github.com/users/Abinayasuresh196/repos?sort=updated&per_page=100");
        if (repoRes.ok) {
          const repoData: RepoData[] = await repoRes.json();
          setRepos(repoData.slice(0, 6));
          
          // Calculate contributed repos
          setStats(prev => ({
            ...prev,
            contributedTo: repoData.length
          }));
        }

        // Fetch user data
        const userRes = await fetch("https://api.github.com/users/Abinayasuresh196");
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats(prev => ({
            ...prev,
            contributedTo: userData.public_repos || prev.contributedTo
          }));
        }

        // Fetch PRs count
        const prsRes = await fetch("https://api.github.com/search/issues?q=author:Abinayasuresh196+type:pr+is:merged");
        if (prsRes.ok) {
          const prsData = await prsRes.json();
          setStats(prev => ({
            ...prev,
            totalPRs: prsData.total_count || 4
          }));
        }

        // Fetch Issues count
        const issuesRes = await fetch("https://api.github.com/search/issues?q=author:Abinayasuresh196+type:issue+is:closed");
        if (issuesRes.ok) {
          const issuesData = await issuesRes.json();
          setStats(prev => ({
            ...prev,
            totalIssues: issuesData.total_count || 0
          }));
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center text-muted-foreground">
          <Github size={16} />
        </span>
        <h2 className="font-syne font-extrabold text-3xl text-foreground">GitHub Activity</h2>
      </div>

      {/* Contribution Graph */}
      <div className="bg-card rounded-lg border border-border p-6 mb-3.5 overflow-x-auto">
        {/* Stats Row - Horizontal */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
            <div className="p-2 bg-primary/20 rounded-lg">
              <GitCommit size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-syne font-bold text-xl text-foreground">{stats.totalCommits}</p>
              <p className="text-xs text-muted-foreground">Total Commits</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
            <div className="p-2 bg-primary/20 rounded-lg">
              <GitPullRequest size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-syne font-bold text-xl text-foreground">{stats.totalPRs}</p>
              <p className="text-xs text-muted-foreground">Total PRs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
            <div className="p-2 bg-primary/20 rounded-lg">
              <CircleDot size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-syne font-bold text-xl text-foreground">{stats.totalIssues}</p>
              <p className="text-xs text-muted-foreground">Total Issues</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
            <div className="p-2 bg-primary/20 rounded-lg">
              <FolderGit2 size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-syne font-bold text-xl text-foreground">{stats.contributedTo}</p>
              <p className="text-xs text-muted-foreground">Contributed To</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* GitHub Contribution Graph - Square boxes with blue color */}
          <img
            src="https://ghchart.rshah.org/58a6ff/Abinayasuresh196"
            alt="GitHub Contribution Graph"
            className="w-full max-w-4xl h-auto"
            loading="lazy"
          />
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <a
            href="https://github.com/Abinayasuresh196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Pinned Repos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {!loading && repos.length > 0
          ? repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg border border-border p-4 hover:border-primary/30 transition-colors block"
              >
                <h4 className="font-syne font-bold text-sm text-primary mb-1">{repo.name}</h4>
                {repo.description && (
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{repo.description}</p>
                )}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] || "bg-muted-foreground"}`} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={12} />{repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} />{repo.forks_count}</span>
                </div>
              </a>
            ))
          : !loading && [1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-4 h-20 animate-pulse" />
            ))}
      </div>
    </section>
  );
};

export default GitHubActivity;