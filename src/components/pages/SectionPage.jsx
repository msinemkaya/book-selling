import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../base/Container'
import DetailHeading from '../common/DetailHeading'
import BookList from '../sections/BookList'

export default function SectionPage() {
  const { id } = useParams()
  return (
    <Container>
      <DetailHeading>
        new offers
      </DetailHeading>
      <BookList/>
    </Container>
  )
}
