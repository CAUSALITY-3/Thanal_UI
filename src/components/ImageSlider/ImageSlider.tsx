import React, { FC, useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { useAppSelector } from "../../Store/hooks";

interface Props {
  slides: string[];
}

export const ImageSlider: FC<Props> = ({ slides }) => {
  const isMobile = useAppSelector((state) => state.app.isMobile);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
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
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    if (isMobile) {
      setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e: any) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    if (isMobile) {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isLeftSwipe || isRightSwipe) {
        console.log("swipe", isLeftSwipe ? "left" : "right");
        isLeftSwipe ? goToNext() : goToPrevious();
      }
    }
  };

  const styles = stylex.create({
    slideStyles: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    arrowStyles:
      mouseOn && slides.length > 1
        ? {
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            height: "100%",
            "align-items": "center",
            "justify-content": "center",
            display: "flex",
            width: "15%",
            fontSize: "45px",
            color: "#B5B5B5",
            zIndex: 1,
            cursor: "pointer",
            "user-select": "none",
          }
        : { display: "none" },
    leftArrowStyles: {
      background: "linear-gradient(to left, transparent, #141414)",
      borderRadius: "10px 0 0 10px",
    },
    rightArrowStyles: {
      right: 0,
      borderRadius: "0 10px 10px 0",
      background: "linear-gradient(to right, transparent, #141414)",
    },
    sliderStyles: {
      position: "relative",
      height: "100%",
    },
    dotsContainerStyles: mouseOn || isMobile ? {
      position: "absolute",
      bottom: "0px",
      left:"50%",
      right: "50%",
      display: "flex",
      justifyContent: "center",
    } : {display: "none"},
    dotStyle: {
      margin: "10px 3px",
      cursor: "pointer",
      fontSize: "20px",
    },
    dotStyleSelect: {
      color: "white",
    },
    slideStylesWidthBackground: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${slides[currentIndex]})`,
    },
  });

  return (
    <div
      {...stylex.props(styles.sliderStyles)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => (!isMobile ? setMouseOn(true) : null)}
      onMouseLeave={() => (!isMobile ? setMouseOn(false) : null)}
    >
      {!isMobile ? (
        <div>
          <div
            onClick={goToPrevious}
            {...stylex.props(styles.arrowStyles, styles.leftArrowStyles)}
          >
            ❰
          </div>
          <div
            onClick={goToNext}
            {...stylex.props(styles.arrowStyles, styles.rightArrowStyles)}
          >
            ❱
          </div>
        </div>
      ) : null}
      <div {...stylex.props(styles.slideStylesWidthBackground)}></div>
      <div {...stylex.props(styles.dotsContainerStyles)}>
        {slides.map((slide, slideIndex: number) => (
          <div
            {...stylex.props(
              styles.dotStyle,
              currentIndex === slideIndex ? styles.dotStyleSelect : null
            )}
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
