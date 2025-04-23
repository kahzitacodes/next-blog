'use client'
import { useSearchParams } from 'next/navigation'
import { Profile } from '@/components'
import { Pagination } from '@/components/pagination'

import { siteConfig } from '@/config'
import { PostService } from '@/services/post-service'
import { ArticlesList } from '@/widgets'

export default function Home() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const { posts, totalPages } = PostService.getAll({ currentPage })

  const profile = {
    name: siteConfig.name,
    description: siteConfig.description,
    avatar: siteConfig.avatar
  }

  if (posts.length < 1) {
    return <p>não há posts</p>
  }

  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Profile {...profile} />
      <ArticlesList posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  )
}
