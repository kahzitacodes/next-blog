import * as LucideIcons from 'lucide-react'
import { PropTypes } from './Icon.types'

export const Icon = (props: PropTypes) => {
  const { dataTestid = props.name, name, size = 24, ...remainingProps } = props

  const LucideIcon = LucideIcons[name] as React.ElementType

  return <LucideIcon data-testid={dataTestid} size={size} {...remainingProps} />
}
