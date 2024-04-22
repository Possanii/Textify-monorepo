import { Toaster } from "@ui/components/ui/Sonner";
import "dotenv/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "ui/styles.css";
import Providers from "../lib/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Textify App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
