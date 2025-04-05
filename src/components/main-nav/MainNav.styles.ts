import tw from 'tailwind-styled-components'
import * as ListStyles from '../list/List.styles'

export const Wrapper = tw.header``

export const Nav = tw.nav`
  items-center
  justify-between
  hidden
  lg:flex
`

export const Content = tw.div`
  flex
  z-50
  lg:hidden
`

export const MobileContainer = tw.div`
  fixed
  left-0
  top-0
  z-30
  w-full
  min-h-screen
  overflow-hidden
  bg-primary/90
  lg:hidden
  backdrop-blur-lg
  pt-[4rem]
  px-6
`

export const MobileNav = tw.nav`
  mx-auto
  flex

  items-center
  justify-center
  rounded-lg
  border
  border-gray-700
  bg-primary
  shadow-2xl
`

export const MobileList = tw(ListStyles.Wrapper)`
  w-full
  flex-col
  items-center
  justify-center
  px-5
`
export const MobileItem = tw(ListStyles.ListItem)`
  border-b
  border-gray-700
  py-4
  w-full
  last:border-b-0
  text-md
`
