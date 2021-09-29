import React from "react";
import Link from "next/link";

import Title from "../ui/Title";
import ViewMoreBtn from "../ui/ViewMoreBtn";

const AboutUs = () => {
  return (
    <div className="h-70vh flex flex-col items-center justify-center text-center">
      <Title title="ABOUT US" />
      <h4 className="pt-10 pb-5">グローバル化社会での技術革新</h4>
      <h6 className="pb-10">
        電子機器の目覚しい普及に伴い、私たちは更なる技術革新を進め、
        <br />
        グローバル化社会への大きなチャレンジも行っております。
      </h6>
      <Link style={{ outline: "none" }} href="/company" passHref>
        <ViewMoreBtn button="VIEW MORE" />
      </Link>
    </div>
  );
};

export default AboutUs;
