import * as LucideIcons from 'lucide-react'

export type StyleProps = {
  variant?: 'default'
  onClick?: () => void
}

export type PropType = {
  label: string
  icon?: keyof typeof LucideIcons
  className?: string
  dataTestid?: string
} & StyleProps
