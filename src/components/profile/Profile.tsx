import Image from 'next/image'

import { PropTypes } from './Profile.types'
import * as S from './Profile.styles'

export const Profile = (props: PropTypes) => {
  const { avatar, name, description } = props

  return (
    <S.Wrapper {...props}>
      <Image
        src={avatar}
        alt="profile image"
        title="profile image"
        width={100}
        height={100}
        className="w-20 self-start rounded-full border-2 border-white md:self-center"
        priority
      />
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Subtitle>{description}</S.Subtitle>
      </S.Content>
    </S.Wrapper>
  )
}
