import tw from 'tailwind-styled-components'

export const Container = tw.header`
  fixed
  z-10
  flex
  h-16
  w-full
  items-center
  bg-primary/50
  border-b
  border-gray-950/50
  backdrop-blur-md
  transition-all
  duration-300
  ease-out
`

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-between
  bg-primary/50
  px-6
`
