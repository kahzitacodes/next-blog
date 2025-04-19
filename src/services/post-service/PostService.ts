import { allPosts } from 'contentlayer/generated'
import { formatPost, formatPosts } from '@/utils/helpers'

export const PostService = {
  getAll: () => {
    return {
      posts: formatPosts(allPosts)
    }
  },

  getBySlug: (slug: string) => {
    const post = allPosts.find((post) => post.slug === slug)

    return post ? formatPost(post) : null
  }
}
