import Route from "./Route";
import { BrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "./components";
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./Store/hooks";
import { checkScreenWidth } from "./AppSlice";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    dispatch(checkScreenWidth(window.innerWidth));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Route />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
