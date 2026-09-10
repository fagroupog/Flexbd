import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Hotel Sikder Residential – হোটেল শিকদার আবাসিক",
  description:
    "Budget-friendly residential hotel in Mirpur-1, Dhaka. From BDT 1,869/night. Air-conditioned rooms, free Wi-Fi, breakfast, pool, and parking.",
  keywords:
    "Hotel Sikder Residential, হোটেল শিকদার আবাসিক, hotel in Mirpur 1 Dhaka, budget hotel in Dhaka, affordable hotel Mirpur, residential hotel Mirpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}