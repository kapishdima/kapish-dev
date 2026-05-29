import { getStargazerCount } from "@/lib/data/get-gh-stars";

interface Project {
  description: string;
  githubUrl?: string;
  name: string;
  stars: () => Promise<number>;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Whichly",
    description: "Visual UI variants picker",
    githubUrl: "https://github.com/kapishdima/whichly",
    websiteUrl: "https://whichly.xyz/",
    stars: () => getStargazerCount("kapishdima/whichly"),
  },
  {
    name: "soundcn",
    description:
      "Large collection of game, interface, retro, and voice sound effects for web applications",
    githubUrl: "https://github.com/kapishdima/soundcn",
    websiteUrl: "https://soundcn.xyz/",
    stars: () => getStargazerCount("kapishdima/soundcn"),
  },
  {
    name: "fonttrio",
    description:
      "Curated font pairing registry for shadcn. Three fonts. One command. Install perfectly configured typography (heading + body + mono) with shadcn add",
    githubUrl: "https://github.com/kapishdima/fonttrio",
    websiteUrl: "https://fonttrio.xyz/",
    stars: () => getStargazerCount("kapishdima/fonttrio"),
  },
  {
    name: "dialectcn",
    description: "A living library of shadcn presets",
    githubUrl: "https://github.com/kapishdima/dialectcn",
    websiteUrl: "https://dialectcn.xyz/",
    stars: () => getStargazerCount("kapishdima/dialectcn"),
  },
  {
    name: "remocn",
    description:
      "Production-ready components for Remotion - text animations, backgrounds, transitions, UI blocks, and full scene compositions",
    githubUrl: "https://github.com/kapishdima/remocn",
    websiteUrl: "https://remocn.dev/",
    stars: () => getStargazerCount("kapishdima/remocn"),
  },
];
