import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h2 className="font-roboto font-bold text-color-text2 tracking-wider">
        {title}
      </h2>
    </div>
  );
};

export default Title;
