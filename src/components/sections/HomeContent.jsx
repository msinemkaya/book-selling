import React from 'react'
import Container from '../base/Container'
import BookSection from './BookSection'
import PopularSections from './PopularSections'
import useBooksContext from '../../hooks/use-books-context'

export default function HomeContent() {

  const {types} = useBooksContext()

  return (
    <Container className='px-6'>
      {/* {bookList.slice(0,2).map((list, index )=> <BookSection bookList={list} key={index} />)} */}
      {types.slice(0,2).map((type, index)=> <BookSection type={type} key={index}/>)}
    </Container>
  )
}
