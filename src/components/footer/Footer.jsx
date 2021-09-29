import React from "react";
import Menu from "../navbar/Menu";
import Office from "./Office";
import TopArrow from "./TopArrow";

const Footer = () => {
  return (
    <div className="relative bg-color-footer text-white py-28 pl-20">
      <Office />
      <Menu />
      <p className="text-color-text2 font-roboto font-semibold ml-4 mt-4">
        &copy; 2021 UNITEC JAPAN
      </p>
      <TopArrow />
    </div>
  );
};

export default Footer;
