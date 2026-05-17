export const timeZone = "Europe/Kiev";
export const contacts = {
  email: "kapishdima@gmail.com",
  github: "https://github.com/kapishdima",
  twitter: "https://x.com/kapish_dima",
  website: "https://kapish.dev",
  discord: "https://discord.com/users/dimafd_39367",
  location:
    "https://www.google.com/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.3908987,30.7350452,14z/data=!4m6!3m5!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.4845702!4d30.7326047!16zL20vMGZmbXA?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
} as const;

interface Project {
  description: string;
  githubUrl?: string;
  name: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    name: "soundcn",
    description:
      "Large collection of game, interface, retro, and voice sound effects for web applications",
    githubUrl: "https://github.com/kapishdima/soundcn",
    websiteUrl: "https://soundcn.xyz/",
  },
  {
    name: "fonttrio",
    description:
      "Curated font pairing registry for shadcn. Three fonts. One command. Install perfectly configured typography (heading + body + mono) with shadcn add",
    githubUrl: "https://github.com/kapishdima/fonttrio",
    websiteUrl: "https://fonttrio.xyz/",
  },
  {
    name: "dialectcn",
    description: "A living library of shadcn presets",
    githubUrl: "https://github.com/kapishdima/dialectcn",
    websiteUrl: "https://dialectcn.xyz/",
  },
  {
    name: "remocn",
    description:
      "Production-ready components for Remotion - text animations, backgrounds, transitions, UI blocks, and full scene compositions",
    githubUrl: "https://github.com/kapishdima/remocn",
    websiteUrl: "https://remocn.dev/",
  },
];
