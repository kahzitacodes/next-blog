import React from 'react'
import { Icon } from '@/components'

import { PropType } from './Tag.types'
import * as S from './Tag.styles'

export const Tag = ({
  icon,
  label,
  dataTestid,
  variant = 'default',
  ...remainingProps
}: PropType) => {
  return (
    <S.TagContainer
      variant={variant}
      data-testid={dataTestid}
      {...remainingProps}
    >
      {icon ? <Icon name={icon} /> : null}
      {label}
    </S.TagContainer>
  )
}
