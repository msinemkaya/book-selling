import { useEffect, useState } from 'react'

const useDropdown = (dropdown) => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    const handler = (e) => {
      if (!dropdown.current) {
        return
      }
      if (!dropdown.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return { handleClick, isOpen, setIsOpen }
}

export default useDropdown
