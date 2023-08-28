import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BookDetail from './BookDetail'
import Navbar from '../sections/Navbar'
import SectionPage from './SectionPage'
import Container from '../base/Container'

export default function ContentPage() {
  return (
    <Container className='z-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/book-detail/:id' element={<BookDetail/>} />
        <Route path='/section/:id' element={<SectionPage/>} />
      </Routes>
    </Container>
  )
}
