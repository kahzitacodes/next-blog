import { allPosts } from 'contentlayer/generated'
import { formatPost, formatPosts, pagination } from '@/utils/helpers'
import { IGetAllPosts } from './interface'

export const PostService = {
  getAll: ({ currentPage = 1, limit = 6 }: IGetAllPosts = {}) => {
    const { paginatedData, totalPages } = pagination(
      allPosts,
      limit,
      currentPage
    )

    return {
      posts: formatPosts(paginatedData),
      totalPages,
      currentPage
    }
  },

  getBySlug: (slug: string) => {
    const post = allPosts.find((post) => post.slug === slug)

    return post ? formatPost(post) : null
  }
}
