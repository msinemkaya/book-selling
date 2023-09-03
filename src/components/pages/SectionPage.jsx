import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../base/Container'
import DetailHeading from '../common/DetailHeading'
import BookList from '../sections/BookList'
import useBooksContext from '../../hooks/use-books-context'

export default function SectionPage() {
  const { id } = useParams()
  const { bookList } = useBooksContext()
  const list = bookList.filter(book => book.type.includes(id))

  console.log(list)

  return (
    <Container>
      <DetailHeading>
        {id}
      </DetailHeading>
      <BookList bookList={list}/>
    </Container>
  )
}
