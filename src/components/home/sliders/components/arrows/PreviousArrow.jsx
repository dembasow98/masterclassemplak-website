import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const PreviousArrow = (props) => {
  const { classNameProp, style, onClick } = props;
  return (
    <div
      className={`${classNameProp} absolute top-1/2 left-4 transform -translate-y-1/2 z-10`}
      style={{ ...style, width: "30px", height: "30px", zIndex: "1" }}
      onClick={onClick}
    >
      <BsArrowLeftCircleFill className="h-full w-full" />
    </div>
  );
};

  
export default PreviousArrow;