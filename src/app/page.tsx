import { Grid, PostCard, Profile } from '@/components'
import { siteConfig } from '@/config'
import { PostService } from '@/services'

export default function Home() {
  const { posts } = PostService.getAll()

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
          <PostCard key={post.id} {...post} />
        ))}
      </Grid>
    </main>
  )
}
