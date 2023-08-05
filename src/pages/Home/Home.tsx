import { FC, useEffect, useState } from "react";
import { ProductCard, Carousel, Footer } from "../../components";
import "./Home.scss";

const Home: FC = () => {
  const [mainData, setData] = useState<{type:string,datas:{
    name: string;
    description: string;
    photoUrls: string[];
    price: number;
}[]}[]>([]);
 const [flag,setflag] = useState<boolean>(false)
  useEffect(() => {

    const fetchdata = async () => {
      const res = await fetch("http://localhost:5000/products")
      console.log(res)
    }
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then((json:[{
        category:string
        name: string;
        description: string;
        photoUrls: string[];
        price: number;
    }]) =>  {
        const plants = json.filter((data)=>
          // console.log(data)
          data.category === "plant" 
        )
        console.log(plants)
        const furniture = json.filter((data)=>
          data.category === "Furniture" 
        )
        setData([{type:"plants", datas:plants}, {type:"furniture", datas:furniture}])
        console.log("sasi",mainData)
      }
        )
      .catch(error => console.error(error));
  }, [flag]);
  return (
    <div className="home">
      <div className="first-page" onClick={()=>setflag(true)}>Home</div>
      <div className="sections">
        {mainData.map((data, key) => (
          <Carousel key={key} type={data.type}>
            {data.datas.map((item, key) => (
              <div className="margin-provider" key={key}>
                <ProductCard props={item} />
              </div>
            ))}
          </Carousel>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
