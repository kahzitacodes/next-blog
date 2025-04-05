import { act, renderHook } from '@testing-library/react'
import { useMainNav } from './useMainNav'

describe('useMainNav', () => {
  it('should be defined', () => {
    const { result } = renderHook(() => useMainNav())
    const { isMenuOpen, handleToggleMenu } = result.current

    expect(isMenuOpen).toBe(false)
    expect(typeof handleToggleMenu).toBe('function')
  })

  it('should change isOpenMenu when handleToggleMenu is called', () => {
    const { result } = renderHook(() => useMainNav())

    act(() => result.current.handleToggleMenu())

    expect(result.current.isMenuOpen).toBe(true)

    act(() => result.current.handleToggleMenu())

    expect(result.current.isMenuOpen).toBe(false)
  })
})
