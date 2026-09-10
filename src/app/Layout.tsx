import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme";
import Header from "@/components/ui/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </ThemeProvider>
  );
}

function MainContent() {
  return (
    <main className="min-h-screen">
      {/* Spacer to account for fixed header */}
      <div className="pt-20" />
      {children}
    </main>
  );
}
