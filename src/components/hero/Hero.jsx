import React from "react";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="absolute top-0 z-10">
        <img src="/sky3.jpeg" alt="hero" className="hero_img" />
      </div>
      <div className="absolute top-0 z-20 w-screen h-screen">
        <Particles />
      </div>
      <div className="absolute top-1/3 left-20 z-30 text-white">
        <h1 className="pb-4 border-b-2 border-white">挑戦の先へ、</h1>
        <h5 className="pt-4">プリント基板製造の会社</h5>
      </div>
    </div>
  );
};

export default Hero;
