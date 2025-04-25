import { PropTypes } from './Link.types'
import * as S from './Link.styles'

export const Link = (props: PropTypes) => {
  const { children, ...remainingProps } = props
  return (
    <S.Wrapper {...remainingProps}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
