import {
  DiscordIcon,
  GithubIcon,
  Link03Icon,
  Location01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

import { GithubGraph } from "@/app/(portfolio)/components/github-graph";
import { IntroItem } from "@/app/(portfolio)/components/intro";
import { ProfileAvatar } from "@/app/(portfolio)/components/profile-avatar";
import { contacts } from "@/lib/config/portfolio";

export default function Page() {
  return (
    <main className="">
      <header className="flex items-center justify-between border-gray-200 border-b pb-4">
        <ProfileAvatar />
      </header>

      <div>{/* <Stack /> */}</div>

      <div className="my-5">
        <p className="text-balance text-sm">
          Dima. 25 years old...
          <br />
          <br /> At 14, I became interested in web design. I honestly don’t even
          remember how it happened, but it did. I wanted it so badly that I
          literally “begged” the course creator to give me access to the course
          - that was back in 2013. I completed it
          <br />
          <br />
          After that, I started programming - C++, Java, PHP and only later
          JavaScript. I enrolled in college and even taught some of the
          professors there :DD
          <br />
          <br />
          And now I’ve been working at an agency for more than 6 years. During
          that time, I managed to start and shut down my own agency, worked as a
          freelancer, got married, procrastinated, and buried myself in work
          <br />
          <br />
          Right now, I’m still working at an agency, contributing to Open
          Source, and trying to build my own product that will generate income.
          <br />
          <br />
          Yogi. Chinese tea enthusiast
        </p>
      </div>

      <div className="mb-10 grid grid-cols-3 gap-2">
        <IntroItem
          href={contacts.location}
          icon={Location01Icon}
          text="Ukraine, Odessa"
        />
        <IntroItem
          href={`mailto:${contacts.email}`}
          icon={Mail01Icon}
          text={contacts.email}
        />
        <IntroItem
          href={contacts.website}
          icon={Link03Icon}
          text={contacts.website}
        />
        <IntroItem
          href={contacts.twitter}
          icon={NewTwitterIcon}
          text="@kapish_dima"
        />
        <IntroItem
          href={contacts.github}
          icon={GithubIcon}
          text="github.com/kapishdima"
        />
        <IntroItem
          href={contacts.discord}
          icon={DiscordIcon}
          text="discord.com/kapishdima"
        />
      </div>

      <GithubGraph />
    </main>
  );
}
