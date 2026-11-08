import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const productTitle = "会津みしらず柿5kg箱｜渋抜き済み・11月15日より順次出荷"
const productDescription =
  "会津美里町産の会津みしらず柿5kg箱。2026年11月15日（日）販売開始・順次出荷。税込4,100円、沖縄県のみ送料1,000円追加。会津ブランド館がお届けします。"

export const metadata: Metadata = {
  title: `${productTitle}｜会津ブランド館`,
  description: productDescription,
  keywords: [
    "会津みしらず柿",
    "柿",
    "産地直送",
    "会津ブランド館",
    "皇室献上",
    "会津美里町",
    "渋抜き済み",
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
    title: productTitle,
    description: productDescription,
    url: "https://mishirazu.aizu-syokubura.com",
    siteName: "会津ブランド館 会津みしらず柿専門店",
    images: [
      {
        url: "https://mishirazu.aizu-syokubura.com/images/ogp.jpg",
        width: 1217,
        height: 647,
        alt: "会津みしらず柿",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Aizu_Brand_Kan",
    creator: "@Aizu_Brand_Kan",
    title: productTitle,
    description: productDescription,
    images: [
      {
        url: "https://mishirazu.aizu-syokubura.com/images/ogp.jpg",
        alt: "会津みしらず柿",
        width: 1217,
        height: 647,
      },
    ],
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
