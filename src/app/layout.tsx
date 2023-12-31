import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import Head from "next/head";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebona AI",
  description: "Your AI powered education mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
