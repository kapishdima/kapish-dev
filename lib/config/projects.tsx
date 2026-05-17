import { getStargazerCount } from "@/lib/data/get-gh-stars";

interface Project {
  description: string;
  githubUrl?: string;
  logo: React.ReactNode;
  name: string;
  stars: () => Promise<number>;
  websiteUrl?: string;
}

const SoundcnLogo = () => (
  <svg
    fill="none"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="currentColor" height="9.9" rx="1.5" width="3" x="0" y="8.1" />
    <rect
      fill="currentColor"
      height="16.2"
      rx="1.5"
      width="3"
      x="3.75"
      y="1.8"
    />
    <rect
      fill="currentColor"
      height="6.3"
      rx="1.5"
      width="3"
      x="7.5"
      y="11.7"
    />
    <rect
      fill="currentColor"
      height="13.5"
      rx="1.5"
      width="3"
      x="11.25"
      y="4.5"
    />
    <rect fill="currentColor" height="8.1" rx="1.5" width="3" x="15" y="9.9" />
  </svg>
);

const FonttrioLogo = () => (
  <svg
    fill="none"
    height="64"
    viewBox="0 0 64 64"
    width="64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#141414" height="64" rx="8" width="64" />
    <path
      d="M23.66 47.616C20.5507 47.616 18.204 46.868 16.62 45.372C15.0653 43.8467 14.288 41.2947 14.288 37.716V29.752H12.352V22.536C13.4667 22.536 14.3027 22.2573 14.86 21.7C15.4173 21.1133 15.696 20.3213 15.696 19.324V17.344H25.024V22.536H30.964V29.752H25.024V36.968C25.024 37.936 25.2293 38.6547 25.64 39.124C26.08 39.564 26.7253 39.784 27.576 39.784C28.6907 39.784 29.908 39.652 31.228 39.388V46.296C30.4067 46.6187 29.292 46.912 27.884 47.176C26.5053 47.4693 25.0973 47.616 23.66 47.616ZM43.5116 47.616C40.4022 47.616 38.0556 46.868 36.4716 45.372C34.9169 43.8467 34.1396 41.2947 34.1396 37.716V29.752H32.2036V22.536C33.3182 22.536 34.1542 22.2573 34.7116 21.7C35.2689 21.1133 35.5476 20.3213 35.5476 19.324V17.344H44.8756V22.536H50.8156V29.752H44.8756V36.968C44.8756 37.936 45.0809 38.6547 45.4916 39.124C45.9316 39.564 46.5769 39.784 47.4276 39.784C48.5422 39.784 49.7596 39.652 51.0796 39.388V46.296C50.2582 46.6187 49.1436 46.912 47.7356 47.176C46.3569 47.4693 44.9489 47.616 43.5116 47.616Z"
      fill="white"
    />
    <rect fill="white" height="7.20545" width="5" x="29.5" y="22.536" />
    <path
      d="M35.9548 43.8232C34.883 44.6496 31.2651 45.7749 31.2651 45.7749L31.1765 39.9152C31.1765 39.9152 34.6401 39.2419 36.8651 38.0282C38.2077 37.2959 38.9932 41.5015 38.9932 41.5015C38.9932 41.5015 36.9525 43.054 35.9548 43.8232Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

const RemocnLogo = () => (
  <svg
    fill="none"
    height="100"
    viewBox="0 0 100 100"
    width="100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="black" height="100" rx="14" width="100" />
    <path
      d="M83.9141 45.7661C86.9141 47.4982 86.9141 51.829 83.9141 53.561L31.4141 83.8716C28.4141 85.6036 24.6641 83.4382 24.6641 79.9741L24.6641 19.353C24.6641 15.8889 28.4141 13.7235 31.4141 15.4556L83.9141 45.7661Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M68.998 31.3979C68.998 50.3798 68.998 63.307 68.998 67.3979"
      stroke="black"
      stroke-width="10"
    />
    <path
      d="M53.0625 16.75C53.0625 48.2803 53.0625 69.7535 53.0625 76.5488"
      stroke="black"
      stroke-width="10"
    />
    <path
      d="M37.127 9.88379C37.127 51.1081 37.127 79.1833 37.127 88.0679"
      stroke="black"
      stroke-width="10"
    />
    <path
      d="M31.1318 15.8618L43.1074 22.7646"
      stroke="white"
      stroke-width="2"
    />
    <path d="M63.291 34.439L75.2617 41.3579" stroke="white" stroke-width="2" />
    <path d="M46.6641 74.4712L59.208 67.2573" stroke="white" stroke-width="2" />
    <path
      d="M76.0205 57.5371L82.9848 53.5226"
      stroke="white"
      stroke-width="2"
    />
  </svg>
);

const DialectcnLogo = () => (
  <svg
    color="currentColor"
    fill="none"
    height="14"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const projects: Project[] = [
  {
    name: "soundcn",
    description:
      "Large collection of game, interface, retro, and voice sound effects for web applications",
    githubUrl: "https://github.com/kapishdima/soundcn",
    websiteUrl: "https://soundcn.xyz/",
    logo: <SoundcnLogo />,
    stars: () => getStargazerCount("kapishdima/soundcn"),
  },
  {
    name: "fonttrio",
    description:
      "Curated font pairing registry for shadcn. Three fonts. One command. Install perfectly configured typography (heading + body + mono) with shadcn add",
    githubUrl: "https://github.com/kapishdima/fonttrio",
    websiteUrl: "https://fonttrio.xyz/",
    logo: <FonttrioLogo />,
    stars: () => getStargazerCount("kapishdima/fonttrio"),
  },
  {
    name: "dialectcn",
    description: "A living library of shadcn presets",
    githubUrl: "https://github.com/kapishdima/dialectcn",
    websiteUrl: "https://dialectcn.xyz/",
    logo: <DialectcnLogo />,
    stars: () => getStargazerCount("kapishdima/dialectcn"),
  },
  {
    name: "remocn",
    description:
      "Production-ready components for Remotion - text animations, backgrounds, transitions, UI blocks, and full scene compositions",
    githubUrl: "https://github.com/kapishdima/remocn",
    websiteUrl: "https://remocn.dev/",
    logo: <RemocnLogo />,
    stars: () => getStargazerCount("kapishdima/remocn"),
  },
];
