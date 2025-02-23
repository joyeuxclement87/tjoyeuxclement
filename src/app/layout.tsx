import type { Metadata } from "next";
import { Unica_One, Montserrat } from 'next/font/google';
import "./globals.css";

const unicaOne = Unica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-unica',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Tuyishimire Joyeux Clement - Graphic Designer & Brand Identity Expert",
  description: "Portfolio of Tuyishimire Joyeux Clement - Specialist in brand identity design, visual communication, and UI/UX design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unicaOne.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
