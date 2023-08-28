import React from 'react'
import Container from '../base/Container'
import Bubble from './Bubble'

export default function Bubbles() {
  return (
    <Container className='absolute inset-0 -z-10 h-full w-full'>
      <Container className='relative w-full h-full overflow-hidden'>
        <Bubble className='w-[20rem] h-[20rem] -top-20 -left-10'/>
        <Bubble className='w-[30rem] h-[30rem] top-0 right-0'/>
        <Bubble className='w-[25rem] h-[25rem] top-1/2 left-1/2'/>
        <Bubble className='w-[40rem] h-[40rem] top-1/2 left-0'/>
        <Bubble className='w-[15rem] h-[15rem] top-[10rem] left-[30%]'/>
        <Bubble className='w-[15rem] h-[15rem] -bottom-[10rem] right-0'/>
      </Container>
    </Container>
  )
}
