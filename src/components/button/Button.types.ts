import * as LucideIcons from 'lucide-react'

export type StyledProps = {
  dataTestid?: string
  variant?: 'ghost' | 'secondary'
  full?: boolean
  icon?: keyof typeof LucideIcons
  iconAfter?: keyof typeof LucideIcons
  $animate?: boolean
  disabled?: boolean
}

export type PropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | React.ReactNode
} & StyledProps
