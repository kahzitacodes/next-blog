import tw from 'tailwind-styled-components'
import { StyleProps } from './Tag.types'

const getVariant = (props: StyleProps) => {
  switch (props.variant) {
    case 'default':
      return 'bg-gray-300 text-gray-700'
    default:
      return 'bg-gray-300 text-gray-700'
  }
}
export const TagContainer = tw.span<StyleProps>`
  flex
  flex-col
  rounded-full
  px-2
  py-0.5
  text-sm
  font-medium
  cursor-default
  transition-all

  ${(props) => getVariant(props)}
  ${({ onClick }) => onClick && 'cursor-pointer hover:bg-gray-400  text-gray-800'}
`
