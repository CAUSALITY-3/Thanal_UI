import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
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

export const ProductCard: FC<Props> = ({ props }) => {
  const navigate = useNavigate();
  const linkTo = `/product/${props.productId}`;

  const handleClick = () => {
    navigate({ pathname: linkTo });
  };
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
        onClick={handleClick}
      >
        <img className="card-image" src={props.image}></img>

        <div className="product-details">
          <p className="product-name">{props.name}</p>
          <p className="product-desc">{props.description}</p>
          <p className="product-price">
            Rs. <span className="product-price-number">{props.price}</span>
          </p>
        </div>
      </div>
  );
};
