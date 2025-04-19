'use client'

import { Icon } from '../icon'
import * as S from './ScrollTop.styles'
import { useScrollTop } from './useScrollTop'

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
