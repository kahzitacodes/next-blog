'use client'
import { Button } from '@/components'
import { PropTypes } from './Pagination.types'
import * as S from './Pagination.styles'
import { usePathname, useRouter } from 'next/navigation'

export const Pagination = (props: PropTypes) => {
  const { currentPage, totalPages, dataTestId, ...remainingProps } = props
  const pathname = usePathname()
  const router = useRouter()

  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const params = new URLSearchParams()

  const paginationPath = (pageNumber: number) => {
    params.set('page', pageNumber.toString())
    return `${pathname}?page=${pageNumber.toString()}`
  }

  return (
    <S.Wrapper data-testid={dataTestId} {...remainingProps}>
      <Button
        onClick={() => router.push(paginationPath(currentPage - 1))}
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
        onClick={() => router.push(paginationPath(currentPage + 1))}
        $animate
        iconAfter="ArrowRight"
        disabled={isLast}
      >
        Próxima página
      </Button>
    </S.Wrapper>
  )
}
