import React from 'react'
import Container from '../base/Container'
import SectionTitle from '../common/SectionTitle'
import BookSlider from './BookSlider'

export default function BookSection() {
  return (
    <Container>
      <SectionTitle route='new-offers'>
        New offers
      </SectionTitle>
      <BookSlider/>
    </Container>
  )
}
