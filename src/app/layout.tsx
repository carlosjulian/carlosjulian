import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Carlos Julián | Mechatronics Engineer, AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Carlos Julián - mechatronics engineer focused on AI engineering, software development, and practical digital products.",
  keywords: [
    "Carlos Julián",
    "Mechatronics Engineer",
    "IA Engineer",
    "AI Developer",
    "Open Source",
    "React",
    "Next.js",
    "Python",
    "Automation",
    "Software Development",
    "Chiapas",
    "México",
  ],
  authors: [{ name: "Carlos Julián" }],
  icons: {
    icon: "/99024517.jpeg",
    shortcut: "/99024517.jpeg",
    apple: "/99024517.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://carlosjulian.dev",
    title: "Carlos Julián | Mechatronics Engineer, IA Engineer & Developer",
    description:
      "Portfolio of Carlos Julián with projects, experience, and links across GitHub and personal platforms.",
    siteName: "Carlos Julián Portfolio",
    images: [
      {
        url: "https://github.com/carlosjulian.png",
        width: 400,
        height: 400,
        alt: "Carlos Julián",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Carlos Julián | Mechatronics Engineer, IA Engineer & Developer",
    description:
      "Portfolio of Carlos Julián with projects, experience, and contact links.",
    images: ["https://github.com/carlosjulian.png"],
    creator: "@carlosjuliandev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
