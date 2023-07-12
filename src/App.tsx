
import Route from './Route'
import { BrowserRouter } from "react-router-dom"
import { Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route />
    </BrowserRouter>
  )
}

export default App