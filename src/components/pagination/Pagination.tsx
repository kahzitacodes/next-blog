'use client'
import { Button } from '@/components'
import { PropTypes } from './Pagination.types'
import * as S from './Pagination.styles'
import { usePathname, useRouter } from 'next/navigation'
import { usePagination } from '../hooks/usePagination'

export const Pagination = (props: PropTypes) => {
  const { currentPage, totalPages, dataTestId, ...remainingProps } = props
  const pathname = usePathname()
  const router = useRouter()

  const { nextPage, prevPage } = usePagination({
    currentPage,
    totalPages,
    pathname
  })

  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  return (
    <S.Wrapper data-testid={dataTestId} {...remainingProps}>
      <Button
        onClick={() => router.push(prevPage)}
        $animate
        icon="ArrowLeft"
        disabled={isFirst}
      >
        Página anterior
      </Button>

      <S.CurrentInfo>
        {currentPage} de {totalPages}
      </S.CurrentInfo>

      <Button
        onClick={() => router.push(nextPage)}
        $animate
        iconAfter="ArrowRight"
        disabled={isLast}
      >
        Próxima página
      </Button>
    </S.Wrapper>
  )
}
