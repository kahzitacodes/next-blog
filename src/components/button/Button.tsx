import { Icon } from '../icon'
import * as S from './Button.styles'
import { PropTypes } from './Button.types'

export const Button = ({
  children,
  variant = 'ghost',
  icon,
  ...remainingProps
}: PropTypes) => (
  <S.Container variant={variant} {...remainingProps}>
    {icon && <Icon name={icon} />}
    {children}
  </S.Container>
)
