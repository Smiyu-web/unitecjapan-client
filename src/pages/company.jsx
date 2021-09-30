import React from "react";
import Greeting from "../components/company/Greeting";
import CompanyHistory from "../components/company/CompanyHistory";
import Outline from "../components/company/Outline";
import PageHero from "../components/hero/PageHero";
import Layout from "../components/layout";
import Access from "../components/company/Access";
import HomeContact from "../components/contact/HomeContact";

const company = () => {
  const description = "";
  const title = "会社情報 | ユニテックジャパン株式会社";
  return (
    <>
      <Layout description={description} title={title}>
        <PageHero
          title="COMPANY"
          desc={`電子機器の目覚しい普及に伴い、私たちは更なる技術革新を進め、\nグローバル化社会への大きなチャレンジも行っております。`}
        />
        <Greeting />
        <CompanyHistory />
        <Outline />
        <Access />
        <HomeContact />
      </Layout>
    </>
  );
};

export default company;
