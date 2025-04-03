import React from 'react'
import { PropType } from './Tag.types'
import * as S from './Tag.styles'

export const Tag = ({
  icon,
  label,
  variant = 'default',
  ...remainingProps
}: PropType) => {
  return (
    <S.TagContainer variant={variant} {...remainingProps}>
      {icon ? icon : null}
      {label}
    </S.TagContainer>
  )
}
