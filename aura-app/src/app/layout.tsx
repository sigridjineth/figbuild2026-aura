import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aura — Pre-Conscious Stress Forecasting",
  description:
    "Sense your stress before it arrives. A speculative wellness tool that detects pre-conscious stress signals and empowers preemptive intervention.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F0B1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="phone-frame">{children}</div>
        </div>
      </body>
    </html>
  );
}
