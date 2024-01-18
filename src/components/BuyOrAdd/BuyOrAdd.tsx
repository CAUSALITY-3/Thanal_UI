import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { BuyCartButton } from "../Buttons/BuyCartButton";

interface Props { 
}

export const BuyOrAdd: FC<Props> = ({  }) => {

  const styles = stylex.create({
    container:{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonBox:{
        width:"48%",
        height:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    }
  });

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.buttonBox)}><BuyCartButton type="cart" width="100%" height="95%"/></div>
      <div {...stylex.props(styles.buttonBox)}><BuyCartButton type="buy" width="100%" height="95%"/></div>
    </div>
  );
};
