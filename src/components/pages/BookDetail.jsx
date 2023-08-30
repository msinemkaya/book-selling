import React from 'react'
import Container from '../base/Container'
import DetailHeading from '../common/DetailHeading'
import OfferList from '../sections/OfferList'
import { useParams } from 'react-router-dom'
import useBooksContext from '../../hooks/use-books-context'

export default function BookDetail() {
  const { id } = useParams()
  const { bookList } = useBooksContext()
  const book = bookList.data.find(item => item.id === id)

  console.log(book)
  return (
    <Container>
      <DetailHeading>{book.title}</DetailHeading>
      <OfferList/>
    </Container>
  )
}
