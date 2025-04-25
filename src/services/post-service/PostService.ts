import { allPosts } from 'contentlayer/generated'
import { formatPost, formatPosts, paginate } from '@/utils/helpers'
import { IGetAllPosts } from './interface'

export const PostService = {
  getAll: ({ currentPage = 1, limit = 6 }: IGetAllPosts = {}) => {
    const posts = formatPosts(allPosts)
    const { paginatedData, totalPages } = paginate(posts, limit, currentPage)

    return {
      posts: paginatedData,
      totalPages,
      currentPage
    }
  },

  getBySlug: (slug: string) => {
    const post = allPosts.find((post) => post.slug === slug)

    return post ? formatPost(post) : null
  }
}
