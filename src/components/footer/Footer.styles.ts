import tw from 'tailwind-styled-components'

export const Wrapper = tw.footer`
  flex
  flex-col
  py-8
  border-t
  border-gray-700
`

export const Content = tw.div`
  flex
  w-full
  justify-between
  pb-10
`
export const Section = tw.section`
  flex
  max-w-[12rem]
  flex-col
  gap-6
  md:max-w-[36rem]
`

export const Title = tw.h5`
  font-semibold
`

export const CopyRightContainer = tw.div`
  mt-3
  flex
  w-full
  items-center
  justify-center
  text-gray-500
`

export const LinkList = tw.ul`
  flex
  flex-col
  gap-3
`

export const LinkListItem = tw.li`
  flex
  gap-2
  font-light
  transition-colors
  duration-200
  text-medium
  relative
  hover:text-link
`
