import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BookDetail from './BookDetail'
import Navbar from '../sections/Navbar'
import SectionPage from './SectionPage'

export default function ContentPage() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/book-detail/:id' element={<BookDetail/>} />
        <Route path='/section/:id' element={<SectionPage/>} />
      </Routes>
    </>
  )
}
