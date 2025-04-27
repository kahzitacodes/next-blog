import { Profile } from '@/components'
import { Pagination } from '@/components/pagination'
import { siteConfig } from '@/config'
import { PostService } from '@/services/post-service'
import { PostList } from '@/widgets'
import { Metadata } from 'next'

type PropTypes = {
  searchParams: { page: string }
}

export function generateMetadata({
  searchParams: { page }
}: PropTypes): Metadata {
  const { posts } = PostService.getAll({ currentPage: Number(page) })
  if (!posts.length) {
    return {
      title: 'There are no posts'
    }
  }

  return {
    title: `Posts | Page ${page || 1}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}?page=${page}`,
      title: `Posts | Page ${page || 1}`,
      description: `Posts | Page ${page || 1}`,
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}${posts[0].$frontMatter.image}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Posts | Page ${page || 1}`,
      description: `Posts | Page ${page || 1}`,
      images: [`${siteConfig.url}${posts[0].$frontMatter.image}`]
    }
  }
}

export default function Posts({ searchParams: { page } }: PropTypes) {
  const { posts, totalPages } = PostService.getAll({
    currentPage: Number(page) || 1
  })

  const profile = {
    name: siteConfig.name,
    description: siteConfig.description,
    avatar: siteConfig.avatar
  }
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Profile {...profile} />
      <PostList posts={posts} />
      <Pagination currentPage={Number(page)} totalPages={totalPages} />
    </main>
  )
}
