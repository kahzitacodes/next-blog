import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  flex
  flex-col
  gap-4
`

export const ImageContainer = tw.div`
  relative
  h-96
  w-full
  sm:h[30rem]
`

export const Content = tw.div`
  w-full
  max-w-5xl
`

export const PostDetails = tw.p`
  mb-4
  text-gray-400
`

export const PostTitle = tw.h1`
  mb-4
  text-5xl
  font-bold
  sm:text-6xl
`

export const PostDescription = tw.p`
  mb-8
  text-2xl
  text-gray-400
`
