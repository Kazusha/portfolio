import type { Metadata } from "next";
import { JetBrains_Mono  } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "MIDJIE LIMAN ROMARIC Portoflio",
  description: "Portofolio de midjie liman romaric",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  return (
    <html lang="fr">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
