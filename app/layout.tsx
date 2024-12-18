import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Providers from "./providers";

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "JobSpot",
  description: "Job application tracking system for job hunters. JobSpot App create by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}