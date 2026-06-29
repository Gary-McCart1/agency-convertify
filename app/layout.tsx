import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import CalendlyProvider from "@/components/calendly/CalendlyProvider";
import Script from "next/script";

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

        {/* GoHighLevel Chat Widget - Put your actual widget code or URL snippet here */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="YOUR_ACTUAL_WIDGET_ID_FROM_GHL" 
          strategy="afterInteractive"
        />

        {/* Google Analytics fixed inside the body tag */}
        <GoogleAnalytics gaId="G-LXPZ8NP3QR" />
      </body>
    </html>
  );
}