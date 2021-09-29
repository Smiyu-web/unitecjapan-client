import React from "react";
import Link from "next/link";

import ViewMoreBtn from "../ui/ViewMoreBtn";

const News = () => {
  return (
    <div className="relative w-screen h-96 z-40 flex justify-center">
      <div className="news_wrapper">
        <div className="font-roboto font-semibold text-3xl tracking-wider">
          NEWS
        </div>
        <div className="ml-32">
          <div className="flex flex-col">
            <div className="my-5">
              <p className="font-semibold text-color-text2 mb-1">2021.04.05</p>
              <h6 className="border_animation">
                経済産業省の健康経営優良法人認定制度に認定
              </h6>
            </div>
            <div className="my-5">
              <p className="font-semibold text-color-text2 mb-1">2021.04.05</p>
              <h6 className="border_animation">
                プリント基板設計勉強会 IN ベトナム国立ダナン工科大学
              </h6>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/" passHref>
              <ViewMoreBtn button="VIEW MORE" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
