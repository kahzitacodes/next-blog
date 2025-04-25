import { Post } from '@/components/post'
import { PostService } from '@/services/post-service'
import { notFound } from 'next/navigation'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = PostService.getBySlug(params.slug)

  if (!post) notFound()

  return <Post {...post} />
}
