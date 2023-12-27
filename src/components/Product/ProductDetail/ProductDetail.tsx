import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../Store/hooks";
import { fetchProduct } from "../ProductCard/productCardSlice";
import "./ProductDetail.scss";
import * as stylex from "@stylexjs/stylex";
import { Carousel } from "../..";

export const ProductDetail: FC = () => {
  const product = useAppSelector((state) => state.product.productData);
  const loading = useAppSelector((state) => state.product.loading);
  const isMobile = useAppSelector((state) => state.app.isMobile);
  const routeLinkText = `Products > ${product.category || loading} > ${
    product.name || loading
  }`;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [images, setImages] = useState<string[]>([]);

  const styles = stylex.create({
    productDetail: {
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      maxWidth: "1800px",
    },
    routeLink: {
      marginBottom: "10px",
      color: "rgb(88, 88, 88)",
      width: "100%",
      maxWidth: "1444px",
    },
    productDetailContainer: {
      maxWidth: "1444px",
      width: "100%",
      borderRadius: "5px",
      height: "auto",
      backgroundColor: "rgb(172, 251, 225)",
      display: "flex",
      justifyContent: "space-around",
      flexFlow: isMobile ? null : "row wrap",
      flexDirection: isMobile ? "column" : null,
      alignItems: isMobile ? null : "center",
    },
    productImage: {
      width: "45%",
      backgroundColor: "aqua",
      display: isMobile ? "flex" : null,
    },
    productImageTag: {
      width: "100%",
    },
    productDetails: {
      height: "100%",
      width: isMobile ? "100%" : "50%",
      backgroundColor: "rgb(22, 116, 116)",
    },
    ss: {
      color: isMobile ? "red" : "blue",
    },
  });

  useEffect(() => {
    if (product?.images) {
      const img = [product.image, ...product.images];

      setImages(img);
    }
  }, [product]);
  useEffect(() => {
    console.log("Ravi");
    window.scrollTo(0, 0);
    if (!product?._id || product._id !== id) {
      dispatch(fetchProduct(id || ""));
    }
  }, []);

  return (
    <div {...stylex.props(styles.productDetail)}>
      <div {...stylex.props(styles.routeLink)}>{routeLinkText}</div>
      <div {...stylex.props(styles.productDetailContainer)}>
        {isMobile ? (
          <Carousel>
            <div {...stylex.props(styles.productImage)}>
              {images.map((image, id) => (
                <img
                  {...stylex.props(styles.productImageTag)}
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </Carousel>
        ) : (
          <div {...stylex.props(styles.productImage)}>
            {images.map((image, id) => (
              <img
                {...stylex.props(styles.productImageTag)}
                src={image}
                alt=""
              />
            ))}
          </div>
        )}

        <div {...stylex.props(styles.productDetails)}>
          <h2 onClick={() => console.log(window.innerWidth)}>{product.name}</h2>
          <h3 {...stylex.props(styles.ss)}>{product.description}</h3>
          <h3 {...stylex.props(styles.ss)}>
            dhjkhddjdn d d jdjhjsjdbdsjnxsj jsmndjsmxndjsmx js mnjs nkmjkm jkj j
            jikjvhvgv hghvg ghvjvyjnbvyjcdrtyjvc
          </h3>
        </div>
      </div>
    </div>
  );
};
