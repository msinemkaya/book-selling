import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useFindLocation = () => {
  const location = useLocation()
  const [isHome, setIsHome]= useState(true)

  useEffect(() => {
    if(location.pathname === '/') {
      setIsHome(true)
    }else{
      setIsHome(false)
    }
  }, [location.pathname])

  return isHome
}

export default useFindLocation