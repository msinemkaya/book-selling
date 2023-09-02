import React from 'react'
import Form from '../base/Form'
import Input from '../base/Input'
import { VscSearch } from 'react-icons/vsc'
import Container from '../base/Container'

export default function SearchBar() {
  return (
    <Form className='min-w-0'>
      <Container className='relative'>
        <Input
          className='w-full bg-transparent rounded-full border-2 border-yellow text-purple  font-semibold box-shadow placeholder-purple focus:outline-none pl-3 pr-9 h-8 leading-8'
          placeholder='Search...'
        />
        <VscSearch className='text-orange absolute h-8 top-0 right-3' strokeWidth={2}/>
      </Container>
    </Form>
  )
}
