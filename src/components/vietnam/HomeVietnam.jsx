import React from "react";
import Link from "next/link";

import ViewMoreBtn from "../ui/ViewMoreBtn";

const HomeVietnam = () => {
  return (
    <div className="relative w-screen h-96">
      <div className="home_viet_wrapper">
        <div>
          <img src="/danang.jpeg" alt="vietnam" className="home_viet_img" />
        </div>
        <div className="w-30vw flex flex-col justify-center">
          <h5>VIETNAME / ベトナム</h5>
          <p className="mr-12 my-8">
            2013年2月、弊社はベトナムのダナン工科大学のキャンパス内に、ユニテック
            ベトナム株式会社を100%子会社として設立し、当大学との業務連携を通して学生の人材育成のために貢献しています。
          </p>
          <div>
            <Link href="/overseas/vietnam" passHref>
              <ViewMoreBtn button="VIEW MORE" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVietnam;
