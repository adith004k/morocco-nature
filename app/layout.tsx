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
  title:
    "Best Beauty Parlour in Meenchanda, Calicut | Bridal Makeup & Skincare",

  description:
    "Looking for the best beauty parlour in Meenchanda, Calicut? Morocco Nature Beauty Clinic offers bridal makeup, facials, hair styling, skincare, threading, manicure, pedicure & student beauty offers.",

  keywords: [
    "best beauty parlour in Calicut",
    "beauty parlour in Meenchanda",
    "bridal makeup Calicut",
    "facial treatment Calicut",
    "hair styling Calicut",
    "beauty clinic Meenchanda",
    "student beauty offers Calicut",
  ],

  metadataBase: new URL("https://morocco-nature.vercel.app"),

  openGraph: {
    title:
      "Morocco Nature Beauty Clinic | Best Beauty Parlour in Calicut",

    description:
      "Premium beauty parlour in Meenchanda, Calicut offering bridal makeup, facials, skincare and student offers.",

    url: "https://morocco-nature.vercel.app",
    siteName: "Morocco Nature Beauty Clinic",
    locale: "en_IN",
    type: "website",
  },

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
        {/* Local Business SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Morocco Nature Beauty Clinic",
              telephone: "+91 9961667296",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Galeela Tower, Mini Bypass Road",
                addressLocality: "Meenchanda",
                addressRegion: "Kerala",
                postalCode: "673018",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 09:30-18:30",
              url: "https://morocco-nature.vercel.app",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}