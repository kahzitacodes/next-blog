import { Post } from '@/components/post'
import { PostService } from '@/services/post-service'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = PostService.getBySlug(params.slug)

  if (!post) {
    return <p>Post não encontrad</p>
  }

  return <Post {...post} />
}
