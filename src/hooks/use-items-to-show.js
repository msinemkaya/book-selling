import { useEffect, useState } from 'react';

export default function useItemsToShow(){
  const [count, setCount] = useState(5);
  const [screen, setScreen] = useState(window.innerWidth)

  const screenHandler = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', screenHandler)
    console.log(screen)
    if(screen > 1024) {
      setCount(5)
    } else if (screen <= 1024 && screen > 768) {
      setCount(4)
    } else if (screen <= 768 && screen >= 640) {
      setCount(3)
    }else if (screen < 640 && screen > 425) {
      setCount(2)
    }else {
      setCount(1)
    }
    
    return () => {
      window.removeEventListener('resize', screenHandler)
    }

  }, [screen])

  return count
}