import * as LucideIcons from 'lucide-react'

export type StyledProps = {
  variant?: 'ghost'
  full?: boolean
  icon?: keyof typeof LucideIcons
  $animate?: boolean
}

export type PropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
} & StyledProps
