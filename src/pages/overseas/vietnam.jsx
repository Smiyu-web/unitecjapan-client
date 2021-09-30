import React from "react";
import HomeContact from "../../components/contact/HomeContact";
import PageHero from "../../components/hero/PageHero";

import Layout from "../../components/layout";
import VietNews from "../../components/vietnam/VietNews";
import VietStaff from "../../components/vietnam/VietStaff";

const vietnam = () => {
  const description = "";
  const title = "ユニテックベトナム | ユニテックジャパン株式会社";
  return (
    <>
      <Layout description={description} title={title}>
        <PageHero
          title="UNITEC VIETNAM"
          desc={`2013年2月、弊社はベトナムのダナン工科大学のキャンパス内に、\nユニテック ベトナム株式会社を100%子会社として設立しました。`}
        />
        <VietNews />
        <VietStaff />
        <HomeContact />
      </Layout>
    </>
  );
};

export default vietnam;
