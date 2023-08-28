import { useContext } from 'react'
import { BookContext } from './books-context'

const useBooksContext = () => {
  return useContext(BookContext)
}

export default useBooksContext