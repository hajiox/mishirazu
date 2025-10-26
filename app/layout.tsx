import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "【限定200セット】皇室献上の会津みしらず柿5kg｜渋抜き済み・種なし・送料無料｜会津ブランド館",
  description:
    "楽天・メルカリアワード受賞店の会津ブランド館が贈る、皇室献上の極上会津みしらず柿5kg（14～16玉入り）。渋抜き済みで届いてすぐ食べられる、種なし大玉の甘い柿を産地直送でお届けします。限定200セット・送料無料。",
  keywords: [
    "会津みしらず柿",
    "柿",
    "送料無料",
    "産地直送",
    "会津ブランド館",
    "皇室献上",
    "会津美里町",
    "渋抜き済み",
    "種なし",
    "大玉",
    "楽天",
    "メルカリ",
    "秋の果物",
    "ギフト",
    "贈答用",
  ],
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mishirazu.aizu-syokubura.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "【限定200セット】皇室献上の会津みしらず柿5kg｜渋抜き済み・種なし・送料無料",
    description:
      "楽天・メルカリアワード受賞店！皇室献上の極上柿。渋抜き済みで届いてすぐ食べられる、種なし大玉の甘い柿を産地直送でお届けします。",
    url: "https://mishirazu.aizu-syokubura.com",
    siteName: "会津ブランド館 会津みしらず柿専門店",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "皇室献上の会津みしらず柿 - 渋抜き済み・種なし大玉柿",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【限定200セット】皇室献上の会津みしらず柿5kg｜渋抜き済み・送料無料",
    description:
      "楽天・メルカリアワード受賞店！皇室献上の極上柿。渋抜き済みで届いてすぐ食べられる、種なし大玉の甘い柿を産地直送。",
    images: ["/images/ogp.jpg"],
    creator: "@aizubrandhall",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QF0C5C17LW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF0C5C17LW');
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
