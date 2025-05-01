import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { StyledProps } from './PostCard.types'

export const PostContainer = tw.article<StyledProps>`
  flex
  flex-col
  gap-5

  ${({ $isMain }) => $isMain && 'md:flex-row gap-0 w-full bg-gray-950 rounded-lg'}
`
export const PostImageContainer = tw(Link)<StyledProps>`
  relative
  h-80
  w-full
  rounded-lg
  overflow-hidden

  ${({ $isMain }) => $isMain && 'rounded-b-none md:rounded-r-none md:w-2/3'}
`

export const PostImage = tw(Image)`
  object-cover
  object-center
  transition-all
  hover:scale-105
`
export const PostContent = tw.div<StyledProps>`
  flex
  flex-col

  ${({ $isMain }) => $isMain && 'p-6 md:p-8'}
`
export const TagsWrap = tw.ul`
  mb-4
  flex
  flex-wrap
  gap-2
`

export const Details = tw.div`
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
