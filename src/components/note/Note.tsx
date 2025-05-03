import * as LucideIcons from 'lucide-react'
import { Icon } from '../icon'
import { NoteType, PropTypes } from './Note.types'
import * as S from './Note.styles'

const icons: Record<NoteType, keyof typeof LucideIcons> = {
  note: 'FileText',
  warning: 'AlertTriangle',
  tip: 'Lightbulb'
}

const title: Record<NoteType, string> = {
  note: 'Note',
  warning: 'Warning',
  tip: 'Tip'
}

export const Note = (props: PropTypes) => {
  const { dataTestid, children, type = 'note' } = props

  return (
    <S.Wrapper {...props} type={type} data-testid={dataTestid}>
      <S.Icon>
        <Icon size={20} name={icons[type]} />
      </S.Icon>
      <S.ContentWrapper>
        <S.Title>{title[type]}</S.Title>
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
