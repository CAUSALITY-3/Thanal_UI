import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../Store/hooks";
import { fetchProduct } from "../ProductCard/productCardSlice";
import "./ProductDetail.scss";
import * as stylex from "@stylexjs/stylex";
import { ImageSlider } from "../../ImageSlider/ImageSlider";
import { Ratings } from "../../Ratings/Ratings";

export const ProductDetail: FC = () => {
  const product = useAppSelector((state) => state.product.productData);
  const loading = useAppSelector((state) => state.product.loading);
  const isMobile = useAppSelector((state) => state.nav.isMobile);
  const routeLinkText = `Products > ${product.category || loading} > ${
    product.name || loading
  }`;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [images, setImages] = useState<string[]>([]);

  const styles = stylex.create({
    productDetailOuter: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    productDetail: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "95vw",
    },
    routeLink: {
      margin: "10px 0",
      padding: "0 0 0 10px",
      color: "rgb(88, 88, 88)",
      width: "100%",
    },
    productDetailContainer: {
      borderRadius: "5px",
      width: "100%",
      height: "auto",
      background: "#e1f4e1",
      display: "flex",
      justifyContent: isMobile ? "center" : "space-around",
      flexDirection: isMobile ? "column" : "row",
    },
    productImage: {
      width: "100%",
      margin: "0 5px",
      display: isMobile ? "flex" : null,
    },
    productImageTag: {
      width: "100%",
      "-webkit-user-drag": "none",
    },
    productDetails: {
      width: isMobile ? "100%" : "45vw",
    },
    carouselWrap: {
      width: "98%",
      display: "flex",
      justifyContent: "space-around",
    },
    imagesdiv: {
      display: "flex",
    },
    imageWrap: {
      display: "flex",
      "scroll-snap-type": "x mandatory",
    },
    image: {
      width: "95vw",
      height: "300px",
      borderRadius: "5px",
      margin: "10px 5px",
      "scroll-snap-align": "center",
      "-webkit-user-drag": "none",
    },
    imageSliderContainerStyles: isMobile
      ? {
          width: "97vw",
          height: "60vh",
          margin: "10px 0",
        }
      : {
          width: "45vw",
          height: "50vw",
          maxHeight: "600px",
          margin: "10px 0",
          position: "sticky",
          top: "5px",
        },
    productName: {
      color: "#232323",
      fontSize: "x-large",
      fontWeight: "bolder",
      margin: "10px 0",
    },
  });

  useEffect(() => {
    if (product?.images) {
      const img = [product.image, ...product.images];

      setImages(img);
    }
  }, [product]);
  useEffect(() => {
    console.log("Ravi", isMobile);
    window.scrollTo(0, 0);
    if (!product?._id || product._id !== id) {
      dispatch(fetchProduct(id || ""));
    }
  }, []);

  return (
    <div {...stylex.props(styles.productDetailOuter)}>
      <div {...stylex.props(styles.productDetail)}>
        <div {...stylex.props(styles.routeLink)}>{routeLinkText}</div>
        <div {...stylex.props(styles.productDetailContainer)}>
          <div {...stylex.props(styles.imageSliderContainerStyles)}>
            <ImageSlider slides={images} />
          </div>
          <div {...stylex.props(styles.productDetails)}>
            <div {...stylex.props(styles.productName)}>{product.name}</div>
            <Ratings ratings={product.ratings} size="s" />
          </div>
        </div>
      </div>
    </div>
  );
};
