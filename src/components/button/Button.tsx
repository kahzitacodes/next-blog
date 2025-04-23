import { Icon } from '@/components'
import * as S from './Button.styles'
import { PropTypes } from './Button.types'

export const Button = ({
  children,
  variant = 'ghost',
  icon,
  iconAfter,
  ...remainingProps
}: PropTypes) => (
  <S.Container variant={variant} {...remainingProps}>
    {icon && (
      <S.IconStart>
        <Icon name={icon} />
      </S.IconStart>
    )}
    {children}
    {iconAfter && (
      <S.IconEnd>
        <Icon name={iconAfter} />
      </S.IconEnd>
    )}
  </S.Container>
)
