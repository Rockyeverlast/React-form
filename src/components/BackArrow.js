import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftarrow from "../images/leftarrow.png";
import "./backarrow.scss";

const BackArrow = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 10) {
        setState(true);
        console.log(window.scrollY);
      } else {
        setState(false);
      }
    });
  }, []);

  return (
    <div className={state ? "colorChange" : "back_arrow"}>
      <Link to="/">
        <img src={leftarrow} alt="back-arrow" />
      </Link>
    </div>
  );
};

export default BackArrow;
