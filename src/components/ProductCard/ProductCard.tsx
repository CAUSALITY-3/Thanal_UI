import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import "./ProductCard.scss";

interface Props {
  props: {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
}

const ProductCard: FC<Props> = ({ props }) => {
  let checkForDrag: number;
  const mouseDownCoords = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    checkForDrag = e?.clientX;
  };
  const clickOrDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouseUp = e.clientX;
    if (mouseUp < checkForDrag + 5 && mouseUp > checkForDrag - 5) {
      // window.open('https://google.com', "_blank");
      console.log("hello");
    }
  };

  return (
    <div
      className="poduct-box"
      onMouseDown={(e) => mouseDownCoords(e)}
      onMouseUp={(e) => clickOrDrag(e)}
    >
      <img className="card-image" src={props.imageUrl}></img>

<div className="product-details">
      <p className="product-title">{props.title}</p>
      <p className="product-desc">{props.description}</p>
      <p className="product-price">Rs. <span className="product-price-number">{props.price}</span></p>
      </div>

    </div>
  );
};

export default ProductCard;
