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
  const currentPage = Number(page) || 1

  const { posts } = PostService.getAll({ currentPage: currentPage })

  if (!posts.length) {
    return {
      title: 'There are no posts'
    }
  }

  return {
    title: `Posts | Page ${currentPage}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}?page=${page}`,
      title: `Posts | Page ${currentPage}`,
      description: `Posts | Page ${currentPage}`,
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}${posts[0].$frontMatter.image}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Posts | Page ${currentPage}`,
      description: `Posts | Page ${currentPage}`,
      images: [`${siteConfig.url}${posts[0].$frontMatter.image}`]
    }
  }
}

export default function Posts({ searchParams: { page } }: PropTypes) {
  const currentPage = Number(page) || 1

  const { posts, totalPages } = PostService.getAll({
    currentPage: currentPage
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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  )
}
