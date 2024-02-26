import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { dancingScript, montserrat } from "@/lib/utils";
import Topbar from "@/components/navs/Topbar";
import Footer from "@/components/navs/Footer";
import Script from "next/script";

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
      <body className={`${montserrat.className}`}>
        {/* <Script src="/scripts/themeScript.js" strategy="beforeInteractive" /> */}
        <Providers>
          <div className="h-24">
            <Topbar />
          </div>
          <div className="min-h-[calc(100vh-6rem)] ">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
