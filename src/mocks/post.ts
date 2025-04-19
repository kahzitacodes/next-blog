import { Post } from '@/types'

export const postMock: Post = {
  $frontMatter: {
    date: '2025-04-04',
    description: 'Description',
    image: '/assets/images/image.png',
    title: 'Post title',
    tags: ['react']
  },
  $readingTime: 3,
  body: {
    code: '',
    raw: ''
  },
  id: '1',
  slug: 'post-3'
}
