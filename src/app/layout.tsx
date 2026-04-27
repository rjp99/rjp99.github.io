import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rani Patel | Frontend Engineer",
  description: "Frontend Engineer specializing in React, TypeScript, and building accessible, performant web applications.",
  keywords: ["frontend engineer", "software developer", "React", "TypeScript", "accessibility", "web development"],
  authors: [{ name: "Rani Patel" }],
  openGraph: {
    title: "Rani Patel | Frontend Engineer",
    description: "Frontend Engineer specializing in React, TypeScript, and building accessible web applications.",
    type: "website",
    url: "https://rani-patel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rani Patel | Frontend Engineer",
    description: "Frontend Engineer specializing in React, TypeScript, and building accessible web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
