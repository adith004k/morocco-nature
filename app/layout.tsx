import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Best Beauty Parlour in Calicut | Morocco Nature",

  description:
    "Morocco Nature is a premium beauty parlour in Calicut offering bridal makeup, hair styling, facials, skincare, and student beauty packages.",

  verification: {
    google: "RLXTe07bxK949cU7JTYryEJJLYxigzvsyYSUCxJfnsA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${notoSerif.variable} ${manrope.variable} bg-surface font-body text-on-surface selection:bg-primary-container antialiased`}
      >
        {children}
      </body>
    </html>
  );
}