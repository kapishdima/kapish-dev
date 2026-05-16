import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/config/tech-stack";

export const TechStack = () => (
  <div className="mb-5 flex flex-wrap gap-1 pb-5">
    {techStack.map((item) => (
      <Badge
        className="flex h-6 items-center gap-x-1 py-2"
        key={item.name}
        variant="secondary"
      >
        {item.img}
        {item.name}
      </Badge>
    ))}
  </div>
);
