import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const ArrowTop = (icon) => {

  const arrowTop = () => {
    window.scrollTo({ top:0, leeft:0, behavior: "smooth" });
  };

  return (
    <div className="wrapper flex-wrap: wrap">
      <div onClick={arrowTop}>ArrowTop
        <FaArrowUp className="scroll-top-btn object-contain" src={icon} alt="star" />ArrowTop
      </div>;
    </div>
  );
};

export default ArrowTop;
