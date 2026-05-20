import { IconCpu, IconServer } from "@tabler/icons-react";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  infrastructureOps,
  infrastructureServices,
  vpsSpecs,
} from "@/lib/config/infrastructure";

const StatusDot = () => (
  <span
    className="relative inline-flex size-1.5"
    role="status"
    title="Operational"
  >
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
  </span>
);

export const Infrastructure: React.FC = () => (
  <section className="space-y-4">
    <p className="text-pretty text-sm">
      Self-hosted on a single Hetzner VPS - production, staging, monitoring,
      analytics, and alerts run end-to-end.
    </p>

    <Card size="sm">
      <CardHeader className="border-b">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <IconServer className="size-4" />
            </div>
            <div className="min-w-0">
              <CardTitle className="flex items-center gap-1.5 text-sm">
                {vpsSpecs.provider} VPS
                <StatusDot />
              </CardTitle>
              <CardDescription className="text-xs">
                {vpsSpecs.tagline}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <Badge variant="secondary">
              <IconCpu />
              {vpsSpecs.cpu}
            </Badge>
            <Badge variant="secondary">{vpsSpecs.ram}</Badge>
            <Badge variant="secondary">{vpsSpecs.storage}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ItemGroup>
          {infrastructureServices.map((service) => (
            <Item asChild key={service.name} size="sm" variant="outline">
              <a href={service.websiteUrl} rel="noopener" target="_blank">
                <ItemMedia variant="icon">{service.icon}</ItemMedia>
                <ItemContent>
                  <ItemTitle>{service.name}</ItemTitle>
                  <ItemDescription className="text-xs">
                    {service.description}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="text-xs" variant="outline">
                    Self-hosted
                  </Badge>
                </ItemActions>
              </a>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-2">
        <div className="flex flex-wrap items-center gap-1">
          {infrastructureOps.map((op) => (
            <Badge key={op.label} variant="secondary">
              {op.icon}
              {op.label}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground/80 text-xs">
          Preview Deployments deliberately skipped - unnecessary friction for a
          solo workflow.
        </p>
      </CardFooter>
    </Card>
  </section>
);
