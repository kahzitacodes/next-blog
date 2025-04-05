import * as LucideIcons from 'lucide-react'

export type NavItem = {
  title: string
  href: string
  icon?: keyof typeof LucideIcons
}
