const inspirations = [
  { name: "chanhdai.com", href: "https://chanhdai.com" },
  { name: "ui.shadcn.com", href: "https://ui.shadcn.com" },
];

export const Footer: React.FC = () => (
  <footer className="mt-16 border-border/60 border-t py-6">
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
