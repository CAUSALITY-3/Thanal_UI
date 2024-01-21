import { FC, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  content: ReactNode | string;
  width?: string;
  height?: string;
  color?: string;
}

export const Button: FC<Props> = ({ content, color, width, height }) => {
  const styles = stylex.create({
    buttonContainer: {
      width: width || "100px",
      height: height || "40px",
      background: color || "blue",
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
  });

  return <div {...stylex.props(styles.buttonContainer)}>{content}</div>;
};
