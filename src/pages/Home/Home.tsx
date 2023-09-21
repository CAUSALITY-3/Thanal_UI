import { FC, useEffect, useState } from "react";
import { ProductCard, Carousel } from "../../components";
import { useAppSelector, useAppDispatch } from '../../Store/hooks'
import { fetchProducts } from './homeSlice'
import "./Home.scss";



const Home: FC = () => {
  const mainData = useAppSelector(state => state.home.productMainList)
  const loading = useAppSelector(state => state.home.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="home">
      <div className="first-page">
        Home
        <div>{loading?"loading":"Got it"}</div>
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
    </div>
  );
};

export default Home;
