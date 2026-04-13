import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  DM_Mono,
} from "next/font/google";
import "./globals.css";

/*
 * Cormorant Garamond — high-contrast serif for hero name and section headings.
 * Used via font-display Tailwind utility / CSS variable.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

/*
 * DM Sans — geometric humanist sans-serif for body, UI, and button text.
 * Weight 300 for prose, 400 for secondary UI, 500 for emphasis.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

/*
 * DM Mono — monospaced for labels, dates, skill tags, and metadata.
 */
const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: "Kalyani Krishnan | MSc Finance & Management",
  description:
    "Personal portfolio of Kalyani Krishnan — MSc Finance & Management student at University of Strathclyde, aspiring investment professional with experience in financial analysis and MIS reporting.",
  keywords: [
    "Kalyani Krishnan",
    "Finance Graduate",
    "Investment Management",
    "MSc Finance",
    "Strathclyde",
    "Portfolio",
    "UK Finance Jobs",
  ],
  authors: [{ name: "Kalyani Krishnan" }],
  openGraph: {
    title: "Kalyani Krishnan | MSc Finance & Management",
    description:
      "Aspiring investment professional with a background in financial analysis and MIS reporting.",
    type: "website",
    locale: "en_GB",
    url: "https://your-domain.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kalyani Krishnan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalyani Krishnan | MSc Finance & Management",
    description: "Aspiring investment professional — MSc Finance, Strathclyde.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Apply stored theme before first paint to prevent colour-scheme flash.
         * Falls back to system preference if no stored value.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s&&d))document.documentElement.classList.add('dark');}catch(_){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
