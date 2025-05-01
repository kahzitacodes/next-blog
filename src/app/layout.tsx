import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { navigationConfig, siteConfig } from '@/config'
import { Container, Header, ScrollTop } from '@/components'
import { MainNav } from '@/components/main-nav'
import { Footer } from '@/components/footer'

import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Karine Pereira',
    default: 'Karine Pereira'
  },
  description: siteConfig.description,
  manifest: '/manifest.json'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      <body className={`${inter.className} bg-primary text-gray-100`}>
        <Header>
          <MainNav items={navigationConfig} />
        </Header>
        <Container>
          <div className="pb-12 pt-24">{children}</div>
        </Container>
        <ScrollTop />
        <Footer items={navigationConfig} />
      </body>
    </html>
  )
}
