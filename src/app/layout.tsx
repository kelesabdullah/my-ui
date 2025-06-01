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
  title: "Abdullah Keleş - DevOps Engineer & Full Stack Developer",
  description: "Abdullah Keleş' personal portfolio website. DevOps engineering, infrastructure automation, and modern web development expertise.",
  keywords: ["Abdullah Keleş", "DevOps Engineer", "Full Stack Developer", "Kubernetes", "Docker", "CI/CD", "NestJS", "NextJS", "TypeScript", "Azure"],
  authors: [{ name: "Abdullah Keleş" }],
  creator: "Abdullah Keleş",
  openGraph: {
    title: "Abdullah Keleş - DevOps Engineer & Full Stack Developer",
    description: "Passionate engineer developing scalable systems with modern technologies and DevSecOps practices",
    url: "https://abdullahkeles.dev",
    siteName: "Abdullah Keleş Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Keleş - DevOps Engineer & Full Stack Developer",
    description: "Passionate engineer developing scalable systems with modern technologies and DevSecOps practices",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
