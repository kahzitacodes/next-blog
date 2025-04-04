import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  flex
  gap-6
  flex-col
  items-center
  md:flex-row
`

export const ProfileImage = tw(Image)`
  w-20
  self-start
  rounded-full
  border-2
  border-white
  md:self-center
`

export const Content = tw.div`
  flex
  flex-col
  gap-1
  justify-center
`

export const Title = tw.h1`
  text-3xl
  font-bold
`

export const Subtitle = tw.p`
  text-sm
  text-gray-300
`
