import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgricultureNavbar from "./components/AgricultureNavbar";
import FooterSection from "./components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quality SRJ Polymers LLP",
  description: "Mulching Paper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AgricultureNavbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
