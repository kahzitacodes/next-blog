import { siteConfig } from '@/config'

import { List } from '@/components/list'
import { Logo } from '@/components/logo'
import { Container } from '@/components/container'

import { PropTypes } from './Footer.types'
import * as S from './Footer.styles'

export const Footer = ({ items }: PropTypes) => {
  const fullYear = new Date().getFullYear()
  return (
    <Container>
      <S.Wrapper>
        <S.Content>
          <S.Section role="contentinfo">
            <Logo dataTestid="logo" />
            <p>{siteConfig.title}</p>
          </S.Section>

          <S.Section
            className="flex max-w-[8rem] flex-col gap-6 sm:max-w-lg"
            role="contentinfo"
          >
            <S.Title>Social</S.Title>
            <List items={siteConfig.links} className="flex-col" />
          </S.Section>

          <S.Section
            className="flex max-w-[8rem] flex-col gap-6 sm:max-w-lg"
            role="contentinfo"
          >
            <S.Title>Sitemap</S.Title>
            <List items={items} className="flex-col" />
          </S.Section>
        </S.Content>

        <S.CopyRightContainer>
          <p>All rights reserved © Karine Pereira {fullYear}</p>
        </S.CopyRightContainer>
      </S.Wrapper>
    </Container>
  )
}
