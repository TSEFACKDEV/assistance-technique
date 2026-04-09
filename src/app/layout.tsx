import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `AssisTechnique — Assistance Microsoft Windows Lyon`,
  description: `Expert en assistance technique Microsoft Windows à Lyon. Installation, maintenance, antivirus Avast. Contactez-nous au ${COMPANY.phones[0]}.`,
  keywords: ["assistance technique", "Windows", "Microsoft", "Lyon", "antivirus", "Avast", "dépannage informatique"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}