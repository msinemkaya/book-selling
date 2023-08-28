import React from 'react'
import Span from '../base/Span'
import Container from '../base/Container'

export default function ItemInfo({ title, children}) {
  return (
    <Container className='items-center gap-2'>
      <Span className='text-dark font-medium capitalize'>{title}: </Span><Span className='capitalize text-blue-400 font-medium'>{children}</Span>
    </Container>
  )
}
