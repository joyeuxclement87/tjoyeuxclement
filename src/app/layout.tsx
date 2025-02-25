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
  title: "Tuyishimire Joyeux Clement - Graphic Designer",
  description: "Portfolio of Tuyishimire Joyeux Clement - Specialist in brand identity design, visual communication, and UI/UX design",
  icons: {
    icon: [
      {
        url: "/cc.ico",
        sizes: "any",
      },
      {
        url: "/cc.ico",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/cc.ico",
      sizes: "180x180",
    },
  },
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
