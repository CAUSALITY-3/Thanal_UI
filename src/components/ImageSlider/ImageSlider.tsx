import React, { FC, useState } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
    slides: String[];
  }

  export const ImageSlider: FC<Props> = ({ slides }) => {
    

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseOn, setMouseOn] = useState(false);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseEnter = () => {
    setTimeout(()=>{

    },)
  }

  const styles = stylex.create({
    slideStyles : {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      rightArrowStyles : mouseOn ? {
        position: "absolute",
        top: "50%",
        right:0,
        transform: "translate(0, -50%)",
        background: "linear-gradient(to right, transparent, gray)",
        height:"100%",
        "align-items": "center",
        "justify-content": "center",
        display: "flex",
        width: "20%",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        "user-select": "none"
      } : {display: "none" },
      leftArrowStyles : mouseOn ? {
        position: "absolute",
        background: "linear-gradient(to left, transparent, gray)",
        height:"100%",
        top: "50%",
        transform: "translate(0, -50%)",
        "align-items": "center",
        "justify-content": "center",
        display: "flex",
        width: "20%",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        "user-select": "none"
      } : {display: "none" },
      sliderStyles : {
        position: "relative",
        height: "100%",
      },
      dotsContainerStyles : {
        display: "flex",
        justifyContent: "center",
      },
      dotStyle : {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
      },
      slideStylesWidthBackground :{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex]})`,
      }
    })

  return (
    <div {...stylex.props(styles.sliderStyles)} onMouseEnter={()=>setMouseOn(true)} onMouseLeave={()=>setMouseOn(false)}>
      <div>
        <div onClick={goToPrevious} {...stylex.props(styles.leftArrowStyles)}>
          ❰
        </div>
        <div onClick={goToNext} {...stylex.props(styles.rightArrowStyles)}>
          ❱
        </div>
      </div>
      <div {...stylex.props(styles.slideStylesWidthBackground)}></div>
      <div {...stylex.props(styles.dotsContainerStyles)}>
        {slides.map((slide, slideIndex:number) => (
          <div
          {...stylex.props(styles.dotStyle)}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
