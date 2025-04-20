'use client'

import { Icon } from '@/components'
import { useScrollTop } from '@/components/hooks'
import * as S from './ScrollTop.styles'

export const ScrollTop = () => {
  const { show, handleScrollTop } = useScrollTop()

  return (
    show && (
      <S.Wrapper>
        <S.Button
          onClick={handleScrollTop}
          aria-label="voltar ao topo"
          title="voltar ao topo"
        >
          <Icon name="ArrowUp" />
        </S.Button>
      </S.Wrapper>
    )
  )
}
