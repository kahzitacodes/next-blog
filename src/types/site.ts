import { NavItem } from './navigation'

export type Site = {
  name: string
  avatar: string
  description: string
  title: string
  subtitle: string
  url: string
  links: NavItem[]
}
