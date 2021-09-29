import React from "react";
import Link from "next/link";

import ViewMoreBtn from "./ViewMoreBtn";

const NewsCard = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.topImg} alt="danang" />
      </div>
      <div>
        <p className="font-semibold my-3">{data.date}</p>
        <h6 className="whitespace-pre-wrap mb-5">{data.title}</h6>
        <Link href={`/news/${data.id}`} passHref>
          <ViewMoreBtn button="VIEW MORE" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
