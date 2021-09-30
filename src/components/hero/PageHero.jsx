import React from "react";

const PageHero = ({ title, desc }) => {
  return (
    // <div className="relative top-28 w-screen h-90vh z-20">
    //   <div>
    //     <img src="/company.jpeg" alt="" className="w-80vw h-96" />
    //   </div>
    //   <div className="page_hero_title">
    //     <h2>{title}</h2>
    //   </div>
    //   <div className="page_hero_desc">
    //     <h6 className="whitespace-pre-wrap">{desc}</h6>
    //   </div>
    // </div>
    <div className="relative top-28 w-screen h-screen">
      <div className="page_hero">
        <h1 className="text-white font-roboto font-semibold tracking-widest">
          {title}
        </h1>
      </div>
      <div className="page_hero_desc">
        <h6 className="whitespace-pre-wrap mb-10">{desc}</h6>
      </div>
    </div>
  );
};

export default PageHero;
