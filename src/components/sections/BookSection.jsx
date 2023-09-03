import React from 'react'
import Container from '../base/Container'
import SectionTitle from '../common/SectionTitle'
import BookSlider from './BookSlider'
import useBooksContext from '../../hooks/use-books-context'

export default function BookSection({type}) {
  const {bookList} = useBooksContext()
  const listItems = bookList.filter(book => book.type.includes(type))
  console.log(bookList)

  return (
    <Container>
      {/* <SectionTitle route={bookList.id}>
        {bookList.title}
      </SectionTitle>
      <BookSlider bookList={bookList.data}/> */}
      <SectionTitle route={type}>
        {type}
      </SectionTitle>
      <BookSlider bookList={listItems}/>
    </Container>
  )
}
