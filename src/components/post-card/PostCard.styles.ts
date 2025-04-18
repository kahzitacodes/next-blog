import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

export const PostContainer = tw.article`
  flex
  flex-col
`
export const PostImageContainer = tw(Link)`
  relative
  h-80
  w-full
  mb-5
  rounded-lg
  overflow-hidden
`

export const PostImage = tw(Image)`
  object-cover
  object-center
  transition-all
  hover:scale-105
`

export const TagsWrap = tw.div`
  mb-4
  flex
  flex-wrap
  gap-2
`

export const Time = tw.div`
  text-sm
  text-gray-400
  mb-2
`

export const Content = tw(Link)`
  cursor-pointer
  [&>h3]:hover:text-link
  [&>p]:hover:text-white
`

export const Title = tw.h3`
  mt-2
  max-w-md
  text-ellipsis
  text-2xl
  font-medium
  text-gray-50
  transition-colors
`

export const Summary = tw.p`
  mt-3
  text-gray-400
`
