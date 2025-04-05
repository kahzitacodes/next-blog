import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  flex
  gap-6
  flex-col
  items-start
  md:items-center
  md:flex-row
`
export const Content = tw.div`
  flex
  flex-col
  gap-1
  md:self-center
`

export const Title = tw.h1`
  text-3xl
  font-bold
`

export const Subtitle = tw.p`
  text-sm
  text-gray-300
`
