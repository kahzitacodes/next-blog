export type StyleProps = {
  variant?: 'default'
  onClick?: () => void
}

export type PropType = {
  label: string
  icon?: React.ReactNode
  className?: string
} & StyleProps
