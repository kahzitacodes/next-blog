import { Grid, PostCard, Profile } from '@/components'
import { allPosts } from 'contentlayer/generated'
import { siteConfig } from '@/config'

export default function Home() {
  const posts = allPosts

  const profile = {
    name: siteConfig.name,
    description: siteConfig.description,
    avatar: siteConfig.avatar
  }

  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Profile {...profile} />
      <Grid sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </main>
  )
}
