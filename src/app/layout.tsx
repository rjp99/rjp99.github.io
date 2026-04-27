import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rani Patel | Software Developer",
  description: "Portfolio of Rani Patel - Software Developer specializing in web development, interactive applications, and creative coding.",
  keywords: ["software developer", "web development", "portfolio", "React", "Next.js"],
  authors: [{ name: "Rani Patel" }],
  openGraph: {
    title: "Rani Patel | Software Developer",
    description: "Portfolio of Rani Patel - Software Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
