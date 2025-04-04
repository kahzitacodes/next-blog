import { Logo } from '@/components/logo/Logo'

import { HeaderProps } from './Header.types'

import * as Style from './Header.styles'

export const Header = ({ items }: HeaderProps) => {
  return (
    <Style.Container>
      <Style.Content>
        <Logo />

        <Style.Nav>
          <Style.List>
            {items.mainNav.map((item) => (
              <Style.ListItem key={item.title}>
                <a href={item.href}>{item.title}</a>
              </Style.ListItem>
            ))}
          </Style.List>
        </Style.Nav>
      </Style.Content>
    </Style.Container>
  )
}
