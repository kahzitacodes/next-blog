import tw from 'tailwind-styled-components'

export const Wrapper = tw.header`
  pointer-events-none
  fixed
  inset-0
  5-50
  h-full
  main-h-screen
  w-full
`

export const Button = tw.button`
  pointer-events-auto
  absolute
  bottom-8
  right-8
  flex
  items-center
  justify-center
  h-12
  w-12
  rounded-full
  bg-primary/70
  transition-colors
  duration-200
  text-white
  hover:bg-primary

  [&>svg]:transition-translate
  [&>svg]:duration-200
  [&>svg]:hover:-translate-y-0.5
`
