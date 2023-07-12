
import Home from './pages/Home/Home'
import { useRoutes } from 'react-router-dom'
import { Login, Product, Contact } from './pages'

const Route = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Login",
            element: <Login />,
        },
        {
            path: "/Product",
            element: <Product />,
        },
        {
            path: "/Contact",
            element: <Contact />,
        },
    ])

    return element
}

export default Route