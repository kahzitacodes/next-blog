import Image from 'next/image'
import * as S from './Logo.styles'
import { PropTypes } from './Logo.types'

export const Logo = ({ dataTestid }: PropTypes) => {
  return (
    <S.Container>
      <Image
        src="assets/images/logo.svg"
        alt="Logo"
        width={28}
        height={21}
        data-testid={dataTestid}
      />
    </S.Container>
  )
}
