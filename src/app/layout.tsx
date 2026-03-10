import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SafeSpace — AI Stress Regulation Assistant",
  description: "SafeSpace is your AI-powered stress regulation assistant with Lucky the elephant.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex items-center justify-center min-h-screen p-4" style={{ background: "#f3f4f6" }}>
          <div className="phone-frame">{children}</div>
        </div>
      </body>
    </html>
  );
}
