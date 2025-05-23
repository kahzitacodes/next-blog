import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  text-md
  w-full
  my-6
  overflow-x-auto
  rounded-lg
  bg-zinc-900
  `

export const PreStyled = tw.pre`
  p-4
  overflow-x-auto
  text-base
  bg-zinc-900
  [&>code]:bg-transparent
`

export const Header = tw.div`
  flex
  w-full
  justify-between
  rounded-t-lg
  border-zinc-950
  border-b
  text-zinc-500
  px-6
  py-3
`
