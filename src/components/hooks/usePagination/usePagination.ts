export type usePaginationProps = {
  currentPage: number
  totalPages: number
  pathname?: string
}
export const usePagination = ({
  currentPage,
  totalPages,
  pathname
}: usePaginationProps) => {
  const params = new URLSearchParams()
  const prevPage = currentPage === 1 ? 1 : currentPage - 1
  const nextPage = currentPage === totalPages ? totalPages : currentPage + 1

  const paginationPath = (pageNumber: number) => {
    params.set('page', pageNumber.toString())
    return `${pathname ?? ''}?page=${pageNumber.toString()}`
  }

  return {
    nextPage: paginationPath(nextPage),
    prevPage: paginationPath(prevPage)
  }
}
