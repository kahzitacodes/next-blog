export type usePaginationProps = {
  currentPage: number
  totalPages: number
  pathname: string | null
}
export const usePagination = ({
  currentPage,
  totalPages,
  pathname
}: usePaginationProps) => {
  const params = new URLSearchParams()
  const page = Number(currentPage)
  const prevPage = page === 1 ? 1 : page - 1
  const nextPage = page === totalPages ? totalPages : page + 1

  const paginationPath = (pageNumber: number) => {
    params.set('page', pageNumber.toString())
    return `${pathname ?? ''}?page=${pageNumber.toString()}`
  }

  return {
    nextPage: paginationPath(nextPage),
    prevPage: paginationPath(prevPage)
  }
}
