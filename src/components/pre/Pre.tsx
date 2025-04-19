import { PropTypes } from './Pre.types'
import * as S from './Pre.styles'

export const Pre = (props: PropTypes) => {
  const { children, dataTestid, ...remainingProps } = props

  const lang = props['data-language'] ?? 'shell'

  return (
    <S.Wrapper data-testid={dataTestid}>
      <S.Header>{lang}</S.Header>
      <S.PreStyled className="bg-zinc-800" {...remainingProps}>
        {children}
      </S.PreStyled>
    </S.Wrapper>
  )
}
