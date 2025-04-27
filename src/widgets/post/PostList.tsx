'use client'
import { PostCard } from '@/components/post-card'
import { Grid } from '@/components'
import { Empty } from '@/components/empty'
import { Post } from '@/types'

export const PostList = ({ posts }: { posts: Post[] }) => {
  if (posts.length < 1) {
    return (
      <Empty
        title="There is no post yet :("
        description="Please return another time"
      />
    )
  }

  return (
    <Grid sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
      {posts?.map((post) => <PostCard key={post.id} {...post} />)}
    </Grid>
  )
}
