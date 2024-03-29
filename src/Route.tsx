
import Home from './pages/Home/Home'
import { useRoutes } from 'react-router-dom'
import { Login, SignUp, Products, Contact } from './pages'
import { ProductDetail } from './components/Product/ProductDetail/ProductDetail'

const Route = () => {
    const element = useRoutes([
        
        {
            path: "/Login",
            element: <Login />,
        },
        {
            path: "/SignUp*",
            element: <SignUp />,
        },
        {
            path: "/Products/*",
            element: <Products />,
        },
        {
            path: "/Product/:id",
            element: <ProductDetail/>
        },
        {
            path: "/Contact/*",
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