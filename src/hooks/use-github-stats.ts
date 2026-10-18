import { useState, useEffect } from "react";

export interface RepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  lastUpdated: string;
  isLoading: boolean;
}

const DEFAULT_STATS: Record<string, RepoStats> = {
  "vibes-plug": {
    stars: 77,
    forks: 19,
    openIssues: 0,
    lastUpdated: "2026-10-18",
    isLoading: false,
  },
  "API-Wilayah-2024": {
    stars: 21,
    forks: 10,
    openIssues: 0,
    lastUpdated: "2026-10-18",
    isLoading: false,
  },
  sinapsai: {
    stars: 4,
    forks: 3,
    openIssues: 0,
    lastUpdated: "2026-10-18",
    isLoading: false,
  },
  centaury: {
    stars: 12,
    forks: 4,
    openIssues: 0,
    lastUpdated: "2026-10-18",
    isLoading: false,
  },
};

export function useGitHubRepoStats(repoName: string): RepoStats {
  const [stats, setStats] = useState<RepoStats>(
    DEFAULT_STATS[repoName] || {
      stars: 0,
      forks: 0,
      openIssues: 0,
      lastUpdated: "2026-10-18",
      isLoading: true,
    },
  );

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `gh_stats_${repoName}`;

    // Check sessionStorage cache to save rate limits
    if (typeof window !== "undefined") {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          // If cached within the last 15 minutes, use it
          if (Date.now() - parsed.timestamp < 15 * 60 * 1000) {
            setStats({ ...parsed.data, isLoading: false });
            return;
          }
        } catch {
          // ignore cache error
        }
      }
    }

    async function fetchStats() {
      try {
        const res = await fetch(`https://api.github.com/repos/roedyrustam/${repoName}`);
        if (!res.ok) {
          // Fallback to default stats if rate limited (403) or not found
          return;
        }
        const data = await res.json();
        if (isMounted && data && typeof data.stargazers_count === "number") {
          const updated: RepoStats = {
            stars: data.stargazers_count,
            forks: data.forks_count,
            openIssues: data.open_issues_count,
            lastUpdated: data.updated_at ? data.updated_at.split("T")[0] : "2026-10-18",
            isLoading: false,
          };
          setStats(updated);
          if (typeof window !== "undefined") {
            sessionStorage.setItem(
              cacheKey,
              JSON.stringify({ timestamp: Date.now(), data: updated }),
            );
          }
        }
      } catch {
        // Fallback silently without throwing
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [repoName]);

  return stats;
}
