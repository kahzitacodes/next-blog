import { NavItem } from '@/types'
import { HTMLAttributes } from 'react'

export type PropTypes = HTMLAttributes<HTMLUListElement> & {
  items: NavItem[]
}
