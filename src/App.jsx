import { Route, Routes } from 'react-router-dom'
import Container from './components/base/Container'
import ContentPage from './components/pages/ContentPage'
import Bubbles from './components/sections/Bubbles'
import Provider from './hooks/books-context'
import Login from './components/sections/Login'


function App() {
  return (
    <Provider>
      <Container className='relative z-50'>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Login/>} />
        </Routes>
        <ContentPage/>
        <Bubbles/>
      </Container>
    </Provider>
  )
}

export default App
