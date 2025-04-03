import { Grid, PostCard } from '@/components'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  const posts = allPosts

  return (
    <main className="flex min-h-screen flex-col">
      <Grid sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </main>
  )
}
