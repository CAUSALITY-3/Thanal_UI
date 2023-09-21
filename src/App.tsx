
import Route from './Route'
import { BrowserRouter } from "react-router-dom"
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route />
      <Footer/>
    </BrowserRouter>
  )
}

export default App