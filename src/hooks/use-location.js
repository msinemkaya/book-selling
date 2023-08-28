import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useFindLocation = () => {
  const location = useLocation()
  const [isHome, setIsHome]= useState(true)

  useEffect(() => {
    if(location.pathname === '/') {
      setIsHome(true)
      console.log(isHome)
    }else{
      setIsHome(false)
      console.log(isHome)
    }
  }, [location.pathname])

  return isHome
}

export default useFindLocation