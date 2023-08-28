import React from 'react'
import Container from '../base/Container'
import BookSection from './BookSection'

export default function HomeContent() {

  return (
    <Container className='px-6'>
      <BookSection sectionTitle='new offers'/>
    </Container>
  )
}
