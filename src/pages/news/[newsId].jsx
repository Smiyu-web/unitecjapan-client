import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import HomeContact from "../../components/contact/HomeContact";

import { getNewsById } from "../../components/news/news.data";
import NewsDetail from "../../components/news/NewsDetail";

const newsDetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  const news = getNewsById(newsId);

  console.log(news);

  return (
    <>
      <Layout>
        <NewsDetail news={news} />
        <HomeContact />
      </Layout>
    </>
  );
};

export default newsDetailPage;
