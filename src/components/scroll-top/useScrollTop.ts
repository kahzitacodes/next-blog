import { useEffect, useState } from 'react'

export const useScrollTop = () => {
  const [show, setShow] = useState(true)

  const handleControlScroll = () => {
    if (window.pageYOffset > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleControlScroll)

    return () => window.removeEventListener('scroll', handleControlScroll)
  }, [])

  const handleScrollTop = () => window.scrollTo(0, 0)

  return {
    show,
    handleScrollTop
  }
}
