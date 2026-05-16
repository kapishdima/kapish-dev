import { BaseUi } from "@/components/ui/svgs/base-ui";
import { Docker } from "@/components/ui/svgs/docker";
import { Figma } from "@/components/ui/svgs/figma";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Nextjs } from "@/components/ui/svgs/nextjs";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Nuxt } from "@/components/ui/svgs/nuxt";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { RadixUi } from "@/components/ui/svgs/radix-ui";
import { React } from "@/components/ui/svgs/react";
import { ShadcnUi } from "@/components/ui/svgs/shadcn-ui";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Tauri } from "@/components/ui/svgs/tauri";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Vue } from "@/components/ui/svgs/vue";

interface TechStackItem {
  img: React.ReactNode;
  name: string;
  website: string;
}

export const techStack: TechStackItem[] = [
  {
    name: "Javascript",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: <Javascript />,
  },
  {
    name: "TypeScript",
    website: "https://www.typescriptlang.org",
    img: <Typescript />,
  },
  {
    name: "React",
    website: "https://react.dev",
    img: <React />,
  },
  {
    name: "Vue.js",
    website: "https://vuejs.org",
    img: <Vue />,
  },
  {
    name: "Next.js",
    website: "https://nextjs.org",
    img: <Nextjs />,
  },
  {
    name: "Nuxt.js",
    website: "https://nuxtjs.org",
    img: <Nuxt />,
  },
  {
    name: "Node.js",
    website: "https://nodejs.org",
    img: <Nodejs />,
  },
  {
    name: "Tauri",
    website: "https://tauri.app",
    img: <Tauri />,
  },
  {
    name: "React Native",
    website: "https://reactnative.dev",
    img: <React />,
  },

  {
    name: "Laravel",
    website: "https://laravel.com",
    img: <Laravel />,
  },
  {
    name: "shadcn/ui",
    website: "https://ui.shadcn.com",
    img: <ShadcnUi />,
  },
  {
    name: "Radix UI",
    website: "https://www.radix-ui.com",
    img: <RadixUi />,
  },
  {
    name: "Base UI",
    website: "https://base-ui.com",
    img: <BaseUi />,
  },

  {
    name: "Tailwind CSS",
    website: "https://tailwindcss.com",
    img: <Tailwindcss />,
  },
  {
    name: "Docker",
    website: "https://www.docker.com",
    img: <Docker />,
  },
  {
    name: "PostgreSQL",
    website: "https://www.postgresql.org",
    img: <Postgresql />,
  },
  {
    name: "Figma",
    website: "https://www.figma.com",
    img: <Figma />,
  },
];
