import type { Metadata, Viewport } from "next"
import { Geist_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { SITE } from "@/lib/site-config"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  areaServed: "GB",
  serviceType: "Custom e-commerce development for UK jewelry brands",
  knowsAbout: [
    "Jewelry e-commerce development",
    "Custom inventory management systems",
    "GIA certificate integration",
    "Consignment inventory tracking",
    "Ring configurator development",
    "Shopify alternative platforms",
  ],
}

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Custom Jewelry E-commerce Developer`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "jewelry e-commerce developer UK",
    "custom jewelry website",
    "jewelry inventory management system",
    "Shopify alternative jewelry",
    "GIA certificate integration",
    "consignment inventory jewelry",
    "ring configurator developer",
    "bespoke jewelry platform",
    "one-of-a-kind jewelry tracking",
    "UK jewelry brand website",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · Custom Jewelry E-commerce Developer`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Custom Jewelry E-commerce Developer`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c1017" },
    { media: "(prefers-color-scheme: light)", color: "#0c1017" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`dark ${jakarta.variable} ${syne.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c1017] text-foreground">
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  )
}
