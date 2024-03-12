import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const WorkSans = Work_Sans({ subsets: ["latin"], variable: '--font-work-sans', weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "FIGGO CLONE",
  description: "A minimalist using figma clone using fabric.js and liveblock for real time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <TooltipProvider>{children}</TooltipProvider> */}
      <body className={`${WorkSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
