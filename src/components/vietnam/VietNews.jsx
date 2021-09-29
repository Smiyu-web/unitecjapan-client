import React from "react";
import NewsCard from "../ui/NewsCard";
import PageTitle from "../ui/PageTitle";

import { getAllNews } from "../news/news.data";

const VietNews = () => {
  const newsData = getAllNews();

  return (
    <div className="page_section_wrapper">
      <div className="mb-20">
        <PageTitle titleEN="News" titleJP="ブログ" />
      </div>
      <div className="viet_News_wrapper">
        {newsData.map((data, index) => {
          return (
            <div key={index}>
              <NewsCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VietNews;
