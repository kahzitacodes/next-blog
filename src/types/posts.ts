export type Post = {
  id: string
  $readingTime: number
  slug: string
  body: {
    code: string
    raw: string
  }
  $frontMatter: {
    title: string
    description: string
    date: string
    tags?: string[] | undefined
    image: string
  }
}
