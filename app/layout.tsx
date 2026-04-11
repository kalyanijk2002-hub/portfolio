import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Inter — clean, modern sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Playfair Display — elegant serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // Replace with your actual deployed domain before going live
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
    // Replace with your deployed URL and a real OG image before going live
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
  // The favicon is at /public/favicon.ico (replace with your own)
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
    /*
     * The `dark` class on <html> is toggled by the ThemeToggle component.
     * We suppress hydration warnings because the class is set client-side
     * from localStorage before the first paint via an inline script injected
     * in ThemeProvider.
     */
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Inline script to apply the stored theme BEFORE the page renders,
         * preventing a flash of the wrong colour scheme on load.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
