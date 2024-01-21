import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "../Buttons/Button";
import buyIcon from "../../assets/buy_icon.svg";
import cartIcon from "../../assets/cart_icon.svg";

interface Props {}

export const BuyOrAdd: FC<Props> = ({}) => {
  const styles = stylex.create({
    container: {
      width: "100%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonBox: {
      width: "48%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonIcon: {
      width: "1.2em",
      height: "1.2em",
      marginRight: "3px",
    },
    buttonName: {},
  });

  const data = [
    {
      icon: cartIcon,
      text: "Add To Cart",
      width: "100%",
      height: "95%",
      color: "yellow",
    },
    {
      icon: buyIcon,
      text: "Buy Now",
      width: "100%",
      height: "95%",
      color: "orange",
    },
  ];

  return (
    <div {...stylex.props(styles.container)}>
      {data.map((type, index) => (
        <div {...stylex.props(styles.buttonBox)} key={index}>
          <Button
            content={
              <>
                <div {...stylex.props(styles.buttonIcon)}>
                  <img src={type.icon} alt="" />
                </div>
                <div {...stylex.props(styles.buttonName)}>{type.text}</div>
              </>
            }
            width={type.width}
            height={type.height}
            color={type.color}
          />
        </div>
      ))}
    </div>
  );
};
