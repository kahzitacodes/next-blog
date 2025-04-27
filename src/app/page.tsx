import { Metadata } from 'next'
import { siteConfig } from '@/config'
import { PostService } from '@/services/post-service'
import { HomeContent } from '@/widgets'
import { Profile } from '@/components'

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/assets/images/image-png'
      }
    ]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}'/assets/images/image.png`]
  }
}

export default function Home() {
  const { posts } = PostService.getAll({ currentPage: 1, limit: 6 })

  const profile = {
    name: siteConfig.name,
    description: siteConfig.description,
    avatar: siteConfig.avatar
  }

  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Profile {...profile} />
      <HomeContent posts={posts} />
    </main>
  )
}
