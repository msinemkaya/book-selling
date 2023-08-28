import ContentPage from './components/pages/ContentPage'
import Provider from './hooks/books-context'


function App() {

  return (
    <Provider>
      <ContentPage/>
    </Provider>
  )
}

export default App
