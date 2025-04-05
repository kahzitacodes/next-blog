import { Logo } from '@/components/logo/Logo'
import { PropTypes } from './Header.types'
import * as S from './Header.styles'

export const Header = ({ children }: PropTypes) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        {children}
      </S.Content>
    </S.Container>
  )
}
