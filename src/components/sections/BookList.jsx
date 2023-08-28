import React from 'react'
import FlexBox from '../base/FlexBox'
import useBooksContext from '../../hooks/use-books-context'
import BookCard from '../common/BookCard'
import Container from '../base/Container'

export default function BookList() {
  const { bookList } = useBooksContext()
  return (
    <Container className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {bookList.map(book => <BookCard book={book} key={book.id} />)}
    </Container>
  )
}
