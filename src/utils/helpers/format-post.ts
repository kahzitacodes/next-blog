import { Post } from 'contentlayer/generated'
import { slugify } from './slugify'

export const formatPosts = (posts: Post[]) => {
  const formatedPosts = posts.map((post) => ({
    id: post._id,
    body: post.body,
    readingTime: Math.ceil(post.readingTime.minutes),
    slug: slugify(post.slug),
    frontMatter: {
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      image: post.image
    }
  }))

  return formatedPosts.sort((a, b) =>
    a.frontMatter.date < b.frontMatter.date ? 1 : -1
  )
}
