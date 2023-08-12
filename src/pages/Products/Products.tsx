import React, { FC, useEffect, useState } from "react";
import "./Product.scss";

const Products: FC = () => {
  const [mainData, setData] = useState<
    {
      type: string;
      data: {
        name: string;
        description: string;
        image: string;
        price: number;
        productId: string;
      }[];
    }[]
  >([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("http://localhost:5000/products");
      console.log(res);
    };
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then(
        (
          json: [
            {
              name: string;
              description: string;
              image: string;
              price: number;
              productId: string;
            }
          ]
        ) => {
          const plants = json.filter((data: { name: string }) => {
            data.name === "plant";
          });
          const furniture = json.filter((data: { name: string }) => {
            data.name === "furniture";
          });
          setData([
            { type: "plants", data: plants },
            { type: "furniture", data: furniture },
          ]);
          console.log("sasi");
        }
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product">
      <h1>Products</h1>
      <div className="product-cat">
        {mainData.map((data, key) => (
          <div className="product-list" key={key}>
            <h3 className="product-type">{data.type}</h3>
            {data.data.map((item, key) => (
              <p key={key}>{item.name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
