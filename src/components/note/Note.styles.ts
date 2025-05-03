import tw from 'tailwind-styled-components'
import { NoteType, StyledProps } from './Note.types'

const Color: Record<NoteType, string> = {
  note: 'blue',
  warning: 'yellow',
  tip: 'violet'
}

const getColor = (props: StyledProps) => {
  const noteType = props?.type || 'note'
  return Color[noteType]
}

export const Wrapper = tw.div<StyledProps>`
  flex
  rounded-md
  gap-3
  p-3
  my-6
  border

  ${(props) => `bg-${getColor(props)}-800/20 text-${getColor(props)}-400 border-${getColor(props)}-900`}
`

export const Title = tw.h4`
  font-semibold
`

export const Icon = tw.span`
  mt-0.5
`
export const ContentWrapper = tw.div`
  flex
  flex-col
  gap-1
`

export const Content = tw.div`
  text-zinc-300
`
