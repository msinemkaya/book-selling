import Container from './components/base/Container'
import ContentPage from './components/pages/ContentPage'
import Bubbles from './components/sections/Bubbles'
import Provider from './hooks/books-context'


function App() {

  return (
    <Provider>
      <Container className='relative z-50'>
        <ContentPage/>
        <Bubbles/>
      </Container>
    </Provider>
  )
}

export default App
