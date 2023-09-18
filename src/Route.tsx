
import Home from './pages/Home/Home'
import { useRoutes, useParams } from 'react-router-dom'
import { Login, Products, Contact } from './pages'
import { ProductDetail } from './components/Product/ProductDetail/ProductDetail'

const Route = () => {
    const element = useRoutes([
        
        {
            path: "/Login",
            element: <Login />,
        },
        {
            path: "/Products",
            element: <Products />,
        },
        {
            path: "/Product/:id",
            element: <ProductDetail/>
        },
        {
            path: "/Contact",
            element: <Contact />,
        },
        {
            path: "*",
            element: <Home />,
        },
    ])

    return element
}

export default Route