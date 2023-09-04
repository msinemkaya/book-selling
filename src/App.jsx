import { Route, Routes } from 'react-router-dom'
import Container from './components/base/Container'
import ContentPage from './components/pages/ContentPage'
import Bubbles from './components/sections/Bubbles'
import Login from './components/sections/Login'
import useBooksContext from './hooks/use-books-context'


function App() {
  const { isLogged } = useBooksContext()
  return (
    <>
      <Container className='relative z-50'>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Login/>} />
        </Routes>
        {isLogged && <ContentPage/>}
        <Bubbles/>
      </Container>
    </>
  )
}

export default App
