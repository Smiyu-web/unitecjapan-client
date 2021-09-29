import React from "react";
import Link from "next/link";

import ViewMoreBtn from "../ui/ViewMoreBtn";

const HomeLaos = () => {
  return (
    <div className="relative w-screen h-96">
      <div className="home_laos_wrapper">
        <div className="w-30vw flex flex-col justify-center ml-12">
          <h5>LAOS / ラオス</h5>
          <p className="mr-10 my-8">
            2015年度から弊社はラオス国立大学との業務提携に向けその一環として、
            同大学の学生支援のために奨学金制度を開設いたしました。
          </p>
          <div>
            <Link href="/overseas/laos" passHref>
              <ViewMoreBtn button="VIEW MORE" />
            </Link>
          </div>
        </div>
        <div>
          <img src="/laos.jpeg" alt="laos" className="home_laos_img" />
        </div>
      </div>
    </div>
  );
};

export default HomeLaos;
