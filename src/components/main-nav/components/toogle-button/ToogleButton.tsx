import { Icon } from '@/components/icon'
import { PropTypes } from './ToogleButton.types'
import * as S from './ToogleButton.styles'

export const ToogleButton = (props: PropTypes) => {
  const { isOpen, handleToggle } = props

  const title = isOpen ? 'Close menu' : 'Open menu'

  return (
    <S.Wrapper onClick={handleToggle} title={title}>
      {isOpen && <Icon name="X" data-testid="icon-close" />}
      {!isOpen && <Icon name="AlignJustify" data-testid="icon-open" />}
    </S.Wrapper>
  )
}
