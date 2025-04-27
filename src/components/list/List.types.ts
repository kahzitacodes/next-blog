import { NavItem } from '@/types'
import { HTMLAttributes } from 'react'

export type StyledProps = {
  direction?: 'horizontal' | 'vertical'
}

export type PropTypes = HTMLAttributes<HTMLUListElement> & {
  items: NavItem[]
} & StyledProps
