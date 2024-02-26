import { FC, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  content: ReactNode | string;
  width?: string;
  height?: string;
  color?: string;
  type?: string;
}

export const Button: FC<Props> = ({ content, color, width, height }) => {
  const styles = stylex.create({
    buttonContainer: {
      width: width || "100px",
      height: height || "40px",
      background: color || "#77DD77",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "3px",
      "-webkit-transition-property": "box-shadow",
      "-webkit-transition-duration": "400ms ",
      ":hover": {
        cursor: "pointer",
        "box-shadow": "3px 3px 6px 1px rgb(41, 41, 41, .2)"
      },
    },
  });

  return <div  {...stylex.props(styles.buttonContainer)}>{content}</div>;
};
