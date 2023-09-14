import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from '../../Store/hooks'
import { fetchProduct } from './productCardSlice'
import "./ProductCard.scss";

interface Props {
  props: {
    name: string;
    description: string;
    image: string;
    price: number;
productId: string;
  };
}

const ProductCard: FC<Props> = ({ props }) => {

  const product = useAppSelector(state => state.product.productData)
  const loading = useAppSelector(state => state.product.loading)
  const dispatch = useAppDispatch()
  // console.log(props)
  let checkForDrag: number;
  const mouseDownCoords = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    checkForDrag = e?.clientX;
  };
  const clickOrDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouseUp = e.clientX;
    if (mouseUp < checkForDrag + 5 && mouseUp > checkForDrag - 5) {
      console.log("hello");
    }
  };

  return (
    <div
      className="poduct-box"
      onMouseDown={(e) => mouseDownCoords(e)}
      onMouseUp={(e) => clickOrDrag(e)}
      onClick={()=>dispatch(fetchProduct(props.productId))}
    >
      <img className="card-image" src={props.image}></img>

<div className="product-details">
      <p className="product-name">{props.name}</p>
      <p>{loading?"isloading":`Got it ${product.priority}`}</p>
      <p className="product-desc">{props.description}</p>
      <p className="product-price">Rs. <span className="product-price-number">{props.price}</span></p>
      </div>

    </div>
  );
};

export default ProductCard;
