import React from "react";
import {BsArrowRightCircleFill } from "react-icons/bs";
const NextArrow = (props) => {
  const { classNameProp, style, onClick } = props;
  return (
    <div
      className={`${classNameProp} absolute top-1/2 right-4 transform -translate-y-1/2 z-10`}
      style={{ ...style, width: "30px", height: "30px", zIndex: "1" }}
      onClick={onClick}
    >
      <BsArrowRightCircleFill className="h-full w-full" />
    </div>
  );
};

export default NextArrow;


  