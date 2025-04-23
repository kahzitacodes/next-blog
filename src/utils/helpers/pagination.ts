export const pagination = <T>(data: T[], limit: number, page: number) => {
  const totalPages = Math.ceil(data.length / limit)
  let paginatedData: T[] = []

  if (page === 1) {
    paginatedData = data.slice(0, limit)
  }

  if (page === 2) {
    paginatedData = data.slice(limit + 1, limit * page)
  }

  if (page > 2) {
    paginatedData = data.slice(limit * page - limit, limit * page)
  }

  return { paginatedData, totalPages }
}
