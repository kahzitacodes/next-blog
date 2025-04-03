import tw from 'tailwind-styled-components'

export const PostContainer = tw.article`
  flex
  flex-col
`

export const PostImage = tw.div`
  relative
  h-80
  w-full
  mb-5
  rounded-lg
  overflow-hidden
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
