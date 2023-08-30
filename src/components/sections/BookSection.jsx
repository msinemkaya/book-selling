import React from 'react'
import Container from '../base/Container'
import SectionTitle from '../common/SectionTitle'
import BookSlider from './BookSlider'

export default function BookSection({bookList}) {

  return (
    <Container>
      <SectionTitle route={bookList.id}>
        {bookList.title}
      </SectionTitle>
      <BookSlider bookList={bookList.data}/>
    </Container>
  )
}
