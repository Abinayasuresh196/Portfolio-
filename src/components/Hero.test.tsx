import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Hero from "@/components/Hero";
import { siteConfig } from "@/data/site";

const renderHero = () =>
  render(
    <ThemeProvider attribute="class" defaultTheme="dark">
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    </ThemeProvider>
  );

describe("Hero", () => {
  it("renders name and professional summary", () => {
    renderHero();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(siteConfig.name);
    expect(screen.getByText(siteConfig.summary)).toBeInTheDocument();
  });

  it("displays contact email and LinkedIn link", () => {
    renderHero();
    expect(screen.getByText(siteConfig.email)).toBeInTheDocument();
    const linkedinLinks = screen.getAllByRole("link", { name: /linkedin/i });
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks[0]).toHaveAttribute("href", siteConfig.linkedin);
  });

  it("shows CGPA and project stats", () => {
    renderHero();
    expect(screen.getByText(siteConfig.cgpa)).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
