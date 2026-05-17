import { IconArrowUpRight } from "@tabler/icons-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
  TestimonialVerifiedBadge,
} from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { xShareUrl } from "@/lib/config/portfolio";
import { testimonials } from "@/lib/config/testimonials";

export const Testimonials: React.FC = () => (
  <div>
    <p className="mb-6 text-pretty text-sm">
      I’ll be collecting and showing reviews from different projects here. I’ll
      probably need to make a separate page for all the reviews :DDD{" "}
      <a
        className="text-pretty underline underline-offset-3"
        href={xShareUrl}
        rel="noopener"
        target="_blank"
      >
        If you want, you can say a few nice words about me
      </a>
    </p>
    <Marquee className="[&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch! border-line border-y">
      <MarqueeContent>
        {testimonials.map((testimonial) => (
          <MarqueeItem
            className="group relative mx-0 h-full w-xs border-line border-r"
            key={testimonial.avatar}
          >
            <Testimonial>
              <Button
                asChild
                className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100"
                size="icon-sm"
                variant="secondary"
              >
                <a href={testimonial.url} rel="noopener" target="_blank">
                  <IconArrowUpRight />
                </a>
              </Button>
              <TestimonialQuote>{testimonial.content}</TestimonialQuote>

              <TestimonialAuthor>
                <TestimonialAvatar>
                  <TestimonialAvatarImg
                    alt={testimonial.name}
                    src={testimonial.avatar}
                  />
                  <TestimonialAvatarRing />
                </TestimonialAvatar>

                <TestimonialAuthorName>
                  {testimonial.name}
                  <TestimonialVerifiedBadge />
                </TestimonialAuthorName>
                <TestimonialAuthorTagline>
                  {testimonial.username}
                </TestimonialAuthorTagline>
              </TestimonialAuthor>
            </Testimonial>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
