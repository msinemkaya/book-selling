import React from 'react'
import Container from '../base/Container'
import SectionTitle from '../common/SectionTitle'
import BookSlider from './BookSlider'

export default function BookSection({sectionTitle, bookList}) {
  return (
    <Container>
      <SectionTitle route={sectionTitle}>
        {sectionTitle}
      </SectionTitle>
      <BookSlider bookList={bookList}/>
    </Container>
  )
}
