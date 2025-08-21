import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Recipe Master - Sobeys Cooking Challenge',
  description: 'Test your culinary knowledge with our interactive recipe guessing game! Discover new dishes and ingredients available at Sobeys.',
  keywords: 'recipe game, cooking, sobeys, ingredients, food challenge, culinary quiz',
  authors: [{ name: 'Sobeys' }],
  creator: 'Sobeys',
  publisher: 'Sobeys',
  robots: 'index, follow',
  openGraph: {
    title: 'Recipe Master - Sobeys Cooking Challenge',
    description: 'Test your culinary knowledge with our interactive recipe guessing game!',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Sobeys Recipe Master',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recipe Master - Sobeys Cooking Challenge',
    description: 'Test your culinary knowledge with our interactive recipe guessing game!',
    creator: '@Sobeys',
  }
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#00a651',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}