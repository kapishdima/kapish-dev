import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <TooltipProvider>
            <div className="main-container">{children}</div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
      <OpenPanelComponent
        apiUrl="https://op.kapish.dev/api"
        clientId="444418ad-9ec7-443c-86b6-c9d294ccc426"
        trackAttributes={true}
        trackOutgoingLinks={true}
        trackScreenViews={true}
      />
    </html>
  );
}
