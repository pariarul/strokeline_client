import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Strokeline Design Services",
    template: "%s | Strokeline Design Services",
  },

  description:
    "Ultra-premium boutique design studio specializing in Financial Publishing, Language Localization, and Digital Conversion services for global businesses.",

  keywords: [
    "Financial Publishing",
    "Localization Services",
    "Digital Conversion",
    "Publishing Design",
    "Corporate Design Services",
    "Typesetting Services",
    "XML Conversion",
    "Financial Report Design",
  ],

  authors: [{ name: "Strokeline Design Services" }],

  creator: "Strokeline",

  metadataBase: new URL("https://strokeline.com"),

  openGraph: {
    title: "Strokeline Design Services",
    description:
      "Boutique financial publishing and localization design studio delivering ultra-premium corporate publishing solutions.",
    url: "https://strokeline.com",
    siteName: "Strokeline",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Strokeline Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strokeline Design Services",
    description:
      "Premium Financial Publishing, Localization and Digital Conversion Services.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {/* Background Noise Effect */}
        <div className="noise-overlay"></div>

        {/* Main Website Content */}
        {children}
      </body>
    </html>
  );
}