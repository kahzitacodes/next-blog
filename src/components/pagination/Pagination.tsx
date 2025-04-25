'use client'
import { Button } from '@/components/button'
import { PropTypes } from './Pagination.types'
import { usePathname, useRouter } from 'next/navigation'
import { usePagination } from '../hooks/usePagination'
import * as S from './Pagination.styles'

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
        variant="ghost"
        onClick={() => router.push(prevPage)}
        $animate
        icon="ArrowLeft"
        disabled={isFirst}
      >
        Previous page
      </Button>

      <S.CurrentInfo>
        {currentPage} de {totalPages}
      </S.CurrentInfo>

      <Button
        variant="ghost"
        onClick={() => router.push(nextPage)}
        $animate
        iconAfter="ArrowRight"
        disabled={isLast}
      >
        Next page
      </Button>
    </S.Wrapper>
  )
}
