import { act, renderHook } from '@testing-library/react'
import { useScrollTop } from './useScrollTop'

describe('useScrollTop', () => {
  it('should be defined', () => {
    const { result } = renderHook(() => useScrollTop())
    const { handleScrollTop, show } = result.current

    expect(show).toBe(true)
    expect(typeof handleScrollTop).toBe('function')
  })

  it('should scroll to top after click', () => {
    const { result } = renderHook(() => useScrollTop())
    expect(result.current.show).toBe(true)

    act(() => result.current.handleScrollTop())

    expect(result.current.show).toBe(false)
  })
})
