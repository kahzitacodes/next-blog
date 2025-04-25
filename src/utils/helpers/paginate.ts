export const paginate = <T>(data: T[], limit = 10, page = 1) => {
  const totalPages = Math.ceil(data.length / limit)
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const paginatedData = data.slice(startIndex, endIndex)

  return { paginatedData, totalPages }
}
