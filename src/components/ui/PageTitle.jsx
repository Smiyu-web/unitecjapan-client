import React from "react";

const PageTitle = ({ titleEN, titleJP }) => {
  return (
    <div>
      <h3 className="font-semibold ">{titleEN}</h3>
      <h6 className="text-color-text2">{titleJP}</h6>
    </div>
  );
};

export default PageTitle;
