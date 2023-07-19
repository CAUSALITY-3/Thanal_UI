import { FC } from "react";
import { ProductCard, Carousel } from '../../components'
import "./Home.scss"


const Home:FC = () => {
    const data = [{name:"a",price:10},{name:"b",price:20},{name:"c",price:30},{name:"d",price:40}, {name:"a",price:10},{name:"b",price:20},{name:"c",price:30},{name:"d",price:40}, {name:"a",price:10},{name:"b",price:20},{name:"c",price:30},{name:"d",price:40}, {name:"a",price:10},{name:"b",price:20},{name:"c",price:30},{name:"d",price:40}]
    return (
        <div className="home">
            <div className="first-page">Home</div>
            <Carousel>
                {
                    data.map((item,key)=>(
                        <div className="margin-provider" key={key}>
                            <ProductCard props={item}  />
                        </div>
                        
                    ))
                }
                
            </Carousel>
        </div>
    )
}

export default Home