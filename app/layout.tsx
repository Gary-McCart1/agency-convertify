import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import CalendlyProvider from "@/components/calendly/CalendlyProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convertify",
  description: "Turning Clicks Into Customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        geistSans.variable,
        geistMono.variable,
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <CalendlyProvider>
          <Navbar />
          {children}
          <Footer />
        </CalendlyProvider>
      </body>

      <GoogleAnalytics gaId="G-LXPZ8NP3QR" />
    </html>
  );
}