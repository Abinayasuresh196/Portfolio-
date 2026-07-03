import { describe, it, expect } from "vitest";
import { siteConfig } from "@/data/site";

describe("siteConfig", () => {
  it("contains valid contact information", () => {
    expect(siteConfig.email).toMatch(/@/);
    expect(siteConfig.phone).toMatch(/\+91/);
    expect(siteConfig.linkedin).toContain("linkedin.com");
    expect(siteConfig.github).toContain("github.com");
  });

  it("has consistent academic information", () => {
    expect(siteConfig.cgpa).toBe("9.2");
    expect(siteConfig.college).toContain("Francis Xavier");
    expect(siteConfig.softSkills.length).toBeGreaterThan(0);
  });
});
