import tw from 'tailwind-styled-components'

export const Wrapper = tw.ul`
  flex
  gap-3
`

export const ListItem = tw.li`
  flex
  gap-2
  font-light
  text-medium
  relative
  [&>a]:hover:text-link
  [&>a]:transition-colors
  [&>a]:duration-200
  [&>svg]:hover:text-link
`

export const ListItemIcon = tw.span`
  flex
  w-6
`
