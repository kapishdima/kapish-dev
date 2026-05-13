import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { OpenPanelComponent } from "@openpanel/nextjs";
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
        "main-container antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <TooltipProvider>
        <body className="font-sans">
          {children}
          <Script src="https://ui.sh/ui-picker.js" />
        </body>
      </TooltipProvider>
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
