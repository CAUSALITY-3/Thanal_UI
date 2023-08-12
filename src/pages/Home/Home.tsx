import { FC, useEffect, useState } from "react";
import { ProductCard, Carousel, Footer } from "../../components";
import "./Home.scss";

type ProductMainListType = {
  type: string;
  data: {
    category: string;
    name: string;
    description: string;
    image: string;
    price: number;
    productId: string;
  }[];
};

const Home: FC = () => {
  const [mainData, setData] = useState<ProductMainListType[]>([]);
  const [flag, setflag] = useState<boolean>(false);
  useEffect(() => {
    async function getMainData() {
      const res = await fetch(
        "https://lovely-pugs-deny.loca.lt/products/productMainList"
      );
      if (!res.ok) throw new Error("Error while fetching mainData");

      const data: ProductMainListType[] = await res.json();
      console.log("res", data);
      setData(data);
      return res.json();
    }
    getMainData();
  }, [flag]);
  return (
    <div className="home">
      <div className="first-page" onClick={() => setflag(true)}>
        Home
      </div>
      <div className="sections">
        {mainData.map((item, key) => (
          <Carousel key={key} type={item.type}>
            {item.data.map((item, key) => (
              <div className="margin-provider" key={key}>
                <ProductCard props={item} />
              </div>
            ))}
          </Carousel>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
