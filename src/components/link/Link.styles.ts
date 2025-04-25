import tw from 'tailwind-styled-components'

export const Wrapper = tw.a`
  group
  text-link
  transition-all
  duration-300
  ease-in-out
`

export const Content = tw.span`
  bg-gradient-to-r
  from-link
  to-link
  bg-[length:0%_1px]
  bg-left-bottom
  bg-no-repeat
  transition-all
  duration-400
  ease-out
  group-hover:bg-[length:100%_1px]
`
