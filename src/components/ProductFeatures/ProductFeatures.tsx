import React, { FC } from "react";
import * as stylex from "@stylexjs/stylex";

interface Feature {
  type: string,
  value: string
}
interface Props {
  features: Feature[];
}

export const ProductFeatures: FC<Props> = ({ features }) => {

  const styles = stylex.create({
    featureContainer:{
        width: "100%",
        margin: "10px 0"
    },
    feature:{
        width: "100%",
        height: "20px",
        margin: "5px 0",
        background: "aqua"
    }
  });
  return (
    <div {...stylex.props(styles.featureContainer)}>
      {
        features.map((feature, index)=>(
            <div {...stylex.props(styles.feature)}>
        {feature.type}: {feature.value}
    </div>
        ))
      }
    </div>
  );
};
