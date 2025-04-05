import { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export type PropTypes = LucideProps & {
  dataTestid?: string
  name: keyof typeof LucideIcons
}
