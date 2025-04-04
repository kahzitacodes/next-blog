import Image from 'next/image'
import * as S from './Logo.styles'

export const Logo = () => {
  return (
    <S.Container>
      <Image src="assets/images/logo.svg" alt="Logo" width={28} height={21} />
    </S.Container>
  )
}
