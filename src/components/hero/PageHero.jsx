import React from "react";

const PageHero = ({ title, desc }) => {
  return (
    <div className="relative w-screen h-40 z-40 flex justify-center ">
      <div className="page_hero_desc">
        <h3 className="font-roboto font-semibold tracking-widest text-color-text2">
          {title}
        </h3>
        <h6 className="whitespace-pre-wrap pt-10">{desc}</h6>
      </div>
    </div>
  );
};

export default PageHero;
