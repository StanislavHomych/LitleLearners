import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import { Providers } from "./Providers/storeProviders.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased py-[50px]`}
      >
        <Providers>
          <div className="px-[50px]">
            <Navigation />
          </div>
          <div className="px-[50px] md:px-[70px] lg-[160px]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
