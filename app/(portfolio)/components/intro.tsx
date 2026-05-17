import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Discord } from "@/components/ui/svgs/discord";
import { Github } from "@/components/ui/svgs/github";
import { Telegram } from "@/components/ui/svgs/telegram";
import { XIcon } from "@/components/ui/svgs/x";
import { contacts } from "@/lib/config/portfolio";

export const IntroGrid: React.FC = () => (
  <div className="flex items-center">
    <Button asChild variant="secondary">
      <a href={contacts.twitterDM} rel="noopener" target="_blank">
        <XIcon />
        Twitter DM
      </a>
    </Button>

    <Button asChild variant="secondary">
      <a href={contacts.github} rel="noopener" target="_blank">
        <Github />
        Github
      </a>
    </Button>
    <Button asChild variant="secondary">
      <a href={contacts.discord} rel="noopener" target="_blank">
        <Discord />
        Discord
      </a>
    </Button>
    <Button asChild variant="secondary">
      <a href={`mailto:${contacts.email}`}>
        <HugeiconsIcon
          color="currentColor"
          icon={Mail01Icon}
          size={12}
          strokeWidth={2}
        />
        {contacts.email}
      </a>
    </Button>
    <Button asChild variant="secondary">
      <a href={contacts.telegram} rel="noopener" target="_blank">
        <Telegram />
        Telegram
      </a>
    </Button>
  </div>
);
