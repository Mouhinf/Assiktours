import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { AIAssistant } from '@/components/layout/ai-assistant';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Assirik Tours - Votre Passeport pour le Monde',
  description: "Découvrez le monde avec Assirik Tours, votre agence de confiance à Dakar. Billets d'avion, séjours sur mesure, et assistance visa. L'aventure vous attend.",
  keywords: "agence de voyage Dakar, billets d’avion Sénégal, Assirik Voyage Dakar, packages touristiques Sénégal, Merveille Voyage Dakar, voyage sur mesure",
  icons: {
    icon: '/Assiriklogo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <AIAssistant />
      </body>
    </html>
  );
}