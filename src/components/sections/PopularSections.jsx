import React from 'react'
import Container from '../base/Container'
import PopularSectionCard from './PopularSectionCard'
import H2 from '../base/H2'

export default function PopularSections() {
  return (
    <Container>
      <H2 className='colorful text-3xl capitalize font-bold text-center'>Popular Categories</H2>
      <Container className='grid grid-cols-2'>
        <PopularSectionCard/>
      </Container>
    </Container>
  )
}
