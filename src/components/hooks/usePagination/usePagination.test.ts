import { renderHook } from '@testing-library/react'
import { usePagination } from './usePagination'

describe('usePagination', () => {
  it('should defined prev and next page', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 2,
        totalPages: 10,
        pathname: '/posts'
      })
    )

    const { nextPage, prevPage } = result.current

    expect(prevPage).toBe('/posts?page=1')
    expect(nextPage).toBe('/posts?page=3')
  })

  it('should define first page as 1 when current is equal to 1', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 1,
        totalPages: 10,
        pathname: '/posts'
      })
    )

    const { nextPage, prevPage } = result.current

    expect(prevPage).toBe('/posts?page=1')
    expect(nextPage).toBe('/posts?page=2')
  })

  it('should define last page as total page when current is equal to total page', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 10
      })
    )

    const { nextPage, prevPage } = result.current

    expect(prevPage).toBe('?page=9')
    expect(nextPage).toBe('?page=10')
  })
})
