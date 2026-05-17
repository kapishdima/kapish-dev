import { OpenSourceList } from "@/app/(portfolio)/components/open-source-list";
import { contacts } from "@/lib/config/portfolio";
import { getCachedOpenPullRequests } from "@/lib/data/get-cached-open-prs";

export const OpenSource: React.FC = async () => {
  const prs = await getCachedOpenPullRequests("kapishdima");

  if (prs.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="mb-6 text-pretty text-sm">
        Open pull requests across the OSS projects I currently contribute to —
        live from{" "}
        <a
          className="underline underline-offset-3"
          href={`${contacts.github}?tab=overview&from=2025-01-01`}
          rel="noopener"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <OpenSourceList prs={prs} />
    </div>
  );
};
