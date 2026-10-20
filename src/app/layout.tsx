import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavan Kalyan Porfolio",
  description:
    "Portfolio of Pavan Kalyan — Associate Technical Consultant and developer building modern web applications with React, Next.js, Django and REST APIs.",
  keywords: [
    "Pavan Kalyan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Full Stack Developer",
  ],
  authors: [
    {
      name: "Pavan Kalyan",
    },
  ],
  openGraph: {
    title: "Pavan Kalyan | Developer Portfolio",
    description:
      "Modern web applications built with React, Next.js and Django.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
