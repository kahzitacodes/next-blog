import { PropTypes } from './Pre.types'
import * as S from './Pre.styles'
import React from 'react'

export const Pre = (props: PropTypes) => {
  const { children, dataTestid, ...remainingProps } = props
  const childElement = React.isValidElement(children) ? children : null
  const lang = childElement?.props?.['data-language'] ?? 'shel'

  return (
    <S.Wrapper data-testid={dataTestid}>
      <S.Header>{lang}</S.Header>
      <S.PreStyled className="bg-zinc-800" {...remainingProps}>
        {children}
      </S.PreStyled>
    </S.Wrapper>
  )
}
