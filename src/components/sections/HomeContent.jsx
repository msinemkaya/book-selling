import React from 'react'
import Container from '../base/Container'
import BookSection from './BookSection'
import useBooksContext from '../../hooks/use-books-context'

export default function HomeContent() {

  const {bookList} = useBooksContext()

  return (
    <Container className='px-6'>
      {bookList.map((list, index )=> <BookSection bookList={list} key={index} />)}
    </Container>
  )
}
