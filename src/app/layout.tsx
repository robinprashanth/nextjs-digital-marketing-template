import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { getSEOTags } from "@/lib/seo";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = getSEOTags({
  canonicalUrlRelative: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        {/* Analytics can go here */}
        
      </head>
      <body
        className={cn(
          "relative font-sans antialiased min-h-screen bg-background" ,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
