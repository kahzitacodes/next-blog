import tw from 'tailwind-styled-components'
import { StyledProps } from './Button.types'

const getVariant = (props: StyledProps) => {
  switch (props.variant) {
    case 'ghost':
      return 'bg-transparent px-0 hover:text-link'
    default:
      return 'bg-gray-300 text-gray-700'
  }
}

export const Container = tw.button<StyledProps>`
  flex
  items-center
  gap-1
  text-white
  font-medium
  h-[40px]
  px-3
  rounded-md
  w-fit
  transition-colors
  duration-200

  ${(props) => getVariant(props)}

  ${({ full }) => full && 'w-full'}

  ${({ $animate }) => $animate && '[&_svg]:shrink-0 [&_svg]:hover:-translate-x-0.5 [&_svg]:transition-transform [&_svg]:duration-200'}
`
