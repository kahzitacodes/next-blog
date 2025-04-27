import tw from 'tailwind-styled-components'
import { StyledProps } from './List.types'

const getDirection = ({ direction }: StyledProps) => {
  switch (direction) {
    case 'horizontal':
      return 'gap-6 font-medium flex-row'
    case 'vertical':
      return 'gap-3 flex-col'
  }
}

export const Wrapper = tw.ul<StyledProps>`
  flex

  ${(props) => getDirection(props)}
`

export const ListItem = tw.li`
  flex
  gap-2
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
