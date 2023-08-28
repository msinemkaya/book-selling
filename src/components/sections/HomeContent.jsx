import React from 'react'
import Container from '../base/Container'
import BookSection from './BookSection'
import useBooksContext from '../../hooks/use-books-context'

export default function HomeContent() {

  const {newOffers, romance} = useBooksContext()
  console.log(newOffers, romance)

  return (
    <Container className='px-6'>
      <BookSection sectionTitle='new offers' bookList={newOffers}/>
      <BookSection sectionTitle='romance' bookList={romance}/>
    </Container>
  )
}
