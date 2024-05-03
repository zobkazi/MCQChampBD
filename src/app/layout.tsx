import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board | Next.js 13.1.5 + Tailwind CSS 3.2.4", 
  description: "Next.js 13.1.5 + Tailwind CSS 3.2.4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
