import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import buyIcon from "../../assets/buy_icon.svg";
import cartIcon from "../../assets/cart_icon.svg";

interface Props {
  type: "buy" | "cart";
  width?: string;
  height?: string; 
}

export const BuyCartButton: FC<Props> = ({ type, width, height }) => {

  const styles = stylex.create({
    buttonContainer: {
      width: width ? width : "200px",
      height: height ? height : "60px",
      background: type === "buy" ? "orange" : "yellow",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "3px",
      ":hover": {
        cursor: "pointer",
        "box-shadow": "3px 3px 6px 1px rgb(41, 41, 41, .2)",
        transform: "translate(.5px, -.5px)",
      },
    },
    buttonIcon: {
      width: "1.2em",
      height: "1.2em",
      marginRight: "3px",
    },
    buttonName: {},
  });

  return (
    <div {...stylex.props(styles.buttonContainer)}>
      <div {...stylex.props(styles.buttonIcon)}>
        {type === "buy" ? (
          <img src={buyIcon} alt="" />
        ) : (
          <img src={cartIcon} alt="" />
        )}
      </div>
      <div {...stylex.props(styles.buttonName)}>
        {type === "buy" ? "Buy Now" : "Add To Cart"}
      </div>
    </div>
  );
};
