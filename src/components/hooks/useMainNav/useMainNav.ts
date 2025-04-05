import { useCallback, useState } from 'react'

export const useMainNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState)
  }, [])

  return {
    isMenuOpen,
    handleToggleMenu
  }
}
