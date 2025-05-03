import React from 'react'

export type NoteType = 'note' | 'warning' | 'tip'

export type StyledProps = {
  type?: NoteType
}

export type PropTypes = {
  dataTestid?: string
  children: React.ReactNode
} & StyledProps
