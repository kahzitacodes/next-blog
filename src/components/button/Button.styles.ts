import tw from 'tailwind-styled-components'
import { StyledProps } from './Button.types'

const getVariant = (props: StyledProps) => {
  switch (props.variant) {
    case 'ghost':
      return 'bg-transparent px-0 hover:text-link disabled:pointer-events-none'
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
  group
  disabled:text-zinc-600
  disabled:pointer-events-none
  disabled:cursor-default

  ${(props) => getVariant(props)}

  ${({ full }) => full && 'w-full'}

  ${({ $animate }) => $animate && 'group'}
`

export const Icon = tw.div`
  shrink-0
  transition-transform duration-200'
`

export const IconStart = tw(Icon)`
  group-hover:-translate-x-0.5
`

export const IconEnd = tw(Icon)`
  group-hover:translate-x-0.5
`
