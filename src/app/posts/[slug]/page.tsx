import { Post } from '@/components/post'
import { siteConfig } from '@/config'
import { PostService } from '@/services/post-service'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  const { posts } = PostService.getAll()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = PostService.getBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post not found'
    }
  }

  return {
    title: post.$frontMatter.title,
    description: post.$frontMatter.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${post.slug}`,
      title: post.$frontMatter.title,
      description: post.$frontMatter.description,
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}${post.$frontMatter.image}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.$frontMatter.title,
      description: post.$frontMatter.description,
      images: [`${siteConfig.url}'${post.$frontMatter.image}`]
    }
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug)

  if (!post) notFound()

  return <Post {...post} />
}
