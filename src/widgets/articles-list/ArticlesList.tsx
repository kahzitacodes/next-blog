import { Grid } from '@/components'
import { PostCard } from '@/components/post-card'
import { Post } from '@/types'

export const ArticlesList = ({ posts }: { posts: Post[] }) => {
  return (
    <Grid sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
      {posts?.map((post) => <PostCard key={post.id} {...post} />)}
    </Grid>
  )
}
