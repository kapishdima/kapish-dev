import Link from "next/link";
import { contacts } from "@/lib/config/portfolio";

const inspirations = [
  { name: "chanhdai.com", href: "https://chanhdai.com" },
  { name: "ui.shadcn.com", href: "https://ui.shadcn.com" },
];

export const Footer: React.FC = () => (
  <footer className="mt-16 space-y-2 border-border/60 border-t py-6">
    <p className="text-muted-foreground text-xs">
      <Link
        className="underline-offset-4 hover:text-foreground hover:underline"
        href="/privacy-terms"
      >
        Privacy &amp; Terms
      </Link>
      {" | Support: "}
      <a
        className="underline-offset-4 hover:text-foreground hover:underline"
        href={`mailto:${contacts.email}`}
      >
        {contacts.email}
      </a>
    </p>
    <p className="text-muted-foreground text-xs">
      Inspired by{" "}
      {inspirations.map((item, i) => (
        <span key={item.name}>
          <a
            className="underline-offset-4 hover:text-foreground hover:underline"
            href={item.href}
            rel="noopener"
            target="_blank"
          >
            {item.name}
          </a>
          {i < inspirations.length - 1 ? " | " : ""}
        </span>
      ))}
    </p>
  </footer>
);
