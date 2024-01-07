import React, { FC } from "react";
import * as stylex from "@stylexjs/stylex";

interface Ratings {
  average: number;
  count: number;
}
interface Props {
  ratings: Ratings;
  size?: "s" | "m" | "l";
  type?: "star" | undefined;
}

export const Ratings: FC<Props> = ({ ratings, size = "m", type }) => {
  const sizes = {
    s: {
      fontSize: "12px",
      height: "12px",
      padding: "2px",
      borderRadius: "1px",
    },
    m: {
      height: "14px",
      fontSize: "14px",
      padding: "3px",
      borderRadius: "1.5px",
    },
    l: {
      fontSize: "18px",
      height: "18px",
      padding: "5px",
      borderRadius: "3px",
    },
  };

  const styles = stylex.create({
    ratingsContainer: {
      display: "flex",
      alignItems: "center",
      height: sizes[size].height,
    },
    starContainer: {
      ...sizes[size],
      background: "rgb(75, 175, 25)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ratingCount: {
      ...sizes[size],
      color: "#A4A3A3",
    },
    svg: {
      marginLeft: "5px",
      color: "#ffd700",
    },
    stars: {
      background: `linear-gradient(to right, rgb(75, 175, 25) ${
        +ratings.average * 20
      }%, #CCCCCC ${100 - +ratings.average * 20}%)`,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "padding-bottom": `${
        size === "m" ? ".18em" : `${size === "l" ? "0" : ".2em"}`
      }`,
      "font-size": `${
        size === "m" ? "1.25em" : `${size === "l" ? "1.7em" : "1.2em"}`
      }`,
    },
  });
  return (
    <div {...stylex.props(styles.ratingsContainer)}>
      {type === "star" ? (
        <>
          {/* <div {...stylex.props(styles.ratingCount)} style={{marginRight: "2px"}}>{ratings.average}</div> */}
          <div {...stylex.props(styles.stars)}>★★★★★</div>
          <div
            {...stylex.props(styles.ratingCount)}
          >{`(${ratings.count})`}</div>
        </>
      ) : (
        <>
          <div {...stylex.props(styles.starContainer)}>
            <div className="">{ratings.average}</div>
            <svg
              {...stylex.props(styles.svg)}
              fill="none"
              height={sizes[size].fontSize}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width={sizes[size].fontSize}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div {...stylex.props(styles.ratingCount)}>
            {ratings.count} ratings
          </div>
        </>
      )}
    </div>
  );
};
