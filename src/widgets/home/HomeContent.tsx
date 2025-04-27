'use client'
import { Grid } from '@/components'
import { Button } from '@/components/button'
import { PostCard } from '@/components/post-card'
import { Post } from '@/types'
import { useRouter } from 'next/navigation'

type PropTypes = {
  posts: Post[]
}

export const HomeContent = ({ posts }: PropTypes) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-12">
      <Grid sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
        {posts?.map((post) => <PostCard key={post.id} {...post} />)}
      </Grid>
      <Button onClick={() => router.push('/posts')}>See all posts</Button>
    </div>
  )
}
