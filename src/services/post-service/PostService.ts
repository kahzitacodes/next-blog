import { allPosts } from 'contentlayer/generated'
import { formatPosts } from '@/utils/helpers'

export const PostService = {
  getAll: () => {
    return {
      posts: formatPosts(allPosts)
    }
  }
}
