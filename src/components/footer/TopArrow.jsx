import React from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute bottom-10 right-10 cursor-pointer"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} size="3x" />
    </div>
  );
};

export default TopArrow;
