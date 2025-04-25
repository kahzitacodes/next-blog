import { Button } from '../button'
import { Icon } from '../icon'
import { PropTypes } from './Empty.types'
import * as S from './Empty.styles'

export const Empty = (props: PropTypes) => {
  const { description, title, button } = props

  return (
    <S.Wrapper {...props}>
      <Icon name="Rat" size={80} strokeWidth={1} />
      <S.Content className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-zinc-400">{description}</p>
      </S.Content>
      {button ? <Button {...button} /> : null}
    </S.Wrapper>
  )
}
