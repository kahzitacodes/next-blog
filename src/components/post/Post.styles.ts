import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  flex
  flex-col
  gap-6
  md:gap-8
  w-full
`

export const ImageContainer = tw.div`
  relative
  h-56
  sm:h-72
  md:h-96
  w-full
`

export const Heading = tw.div`
  mx-auto
  w-full
  md:max-w-[920px]
`

export const Content = tw.div`
  mx-auto
  w-full
  md:max-w-[920px]
`

export const PostDetails = tw.div`
  flex
  text-gray-400
  text-sm
  gap-3
`

export const PostTitle = tw.h1`
  mb-6
  text-3xl
  sm:text-4xl
  font-bold
  leading-tight

  md:text-6xl
`

export const PostDescription = tw.p`
  mb-8
  text-xl
  text-gray-400
`

export const TagsWrap = tw.ul`
  flex
  flex-wrap
  gap-2
`
