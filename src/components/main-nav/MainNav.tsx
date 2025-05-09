'use client'
import { List } from '@/components/list'
import { useMainNav } from '@/components/hooks'

import { ToogleButton } from './components/toogle-button'
import { PropTypes } from './MainNav.types'
import * as S from './MainNav.styles'

export const MainNav = ({ items }: PropTypes) => {
  const { handleToggleMenu, isMenuOpen } = useMainNav()

  return (
    <>
      <S.Nav>
        <List items={items} />
      </S.Nav>
      <S.Content>
        <ToogleButton isOpen={isMenuOpen} handleToggle={handleToggleMenu} />
      </S.Content>

      {isMenuOpen && (
        <S.MobileContainer>
          <S.MobileNav>
            <S.MobileList>
              {items?.map((item) => (
                <S.MobileItem key={item.title}>
                  <a href={item.href}>{item.title}</a>
                </S.MobileItem>
              ))}
            </S.MobileList>
          </S.MobileNav>
        </S.MobileContainer>
      )}
    </>
  )
}
