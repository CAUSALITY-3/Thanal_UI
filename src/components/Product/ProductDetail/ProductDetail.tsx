import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../Store/hooks";
import { fetchProduct } from "../ProductCard/productCardSlice";
import "./ProductDetail.scss";
import * as stylex from '@stylexjs/stylex';


export const ProductDetail: FC = () => {

  const styles = stylex.create({
    ss: {
      color:"red"
    },
  });
  

  const product = useAppSelector((state) => state.product.productData);
  const loading = useAppSelector((state) => state.product.loading);
  const routeLinkText = `Products > ${product.category || loading} > ${
    product.name || loading
  }`;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log("Ravi");
    window.scrollTo(0, 0);
    if (!product?._id || product._id !== id) {
      dispatch(fetchProduct(id || ""));
    }
  }, []);

  return (
    <div className="pr0duct-detai1">
      <div className="route-link">{routeLinkText}</div>
      <div className="product-detail-container">
        <div className="product-image">
          <img className="product-image-tag" src={product.images[1]} alt="" />
        </div>
        <div className="product-detail">
          <h2>{product.name}</h2>
          <h3 {...stylex.props(
    styles.ss)}>{product.description}</h3>
        </div>
      </div>
    </div>
  );
};
