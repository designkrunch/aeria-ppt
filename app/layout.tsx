import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aeria — Asia's First AI-Native Property Experience Platform",
  description:
    "One platform that turns a disconnected building into a self-operating asset — lowering operating cost while compounding the experience and commerce that defend rent.",
  openGraph: {
    title: "Aeria — Asia's First AI-Native Property Experience Platform",
    description:
      "Live across 15M sq ft, two flagship campuses, 12 months post-MVP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`no-js ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Remove the no-js flag as early as possible so scroll-reveal runs,
            but leave content visible if JavaScript is disabled. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');",
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
