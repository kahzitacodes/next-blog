import tw from 'tailwind-styled-components'

export const Container = tw.header`
  fixed
  z-10
  flex
  h-16
  w-full
  items-center
  bg-primary/50
  shadow-md
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
  px-4
`

export const Nav = tw.nav`
  flex
  items-center
  justify-between
`

export const List = tw.ul`
  flex
  gap-4
`

export const ListItem = tw.li`
  text-md
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`
