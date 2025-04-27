import { Metadata } from 'next'
import { siteConfig } from '@/config'
import { AboutContent } from '@/widgets'

export const metadata: Metadata = {
  title: 'About me',
  description: 'About me',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'About me',
    url: '/about',
    description: 'About me',
    siteName: siteConfig.title,
    images: [{ url: `${siteConfig.url}/assets/images/me.png` }]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: 'About me',
    description: siteConfig.description,
    images: [`${siteConfig.url}'/assets/images/me.png`]
  }
}

export default function About() {
  return <AboutContent />
}
