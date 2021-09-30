import React from "react";
import PageHero from "../components/hero/PageHero";
import Layout from "../components/layout";
import HomeContact from "../components/contact/HomeContact";
import Design from "../components/service/Design";
import Create from "../components/service/Create";
import Sale from "../components/service/Sale";

const service = () => {
  const description = "";
  const title = "業務内容 | ユニテックジャパン株式会社";
  return (
    <>
      <Layout description={description} title={title}>
        <PageHero desc="お客様のニーズに合わせ、最初から最後までサポートさせて頂きます。" />
        <Design />
        <Create />
        <Sale />
        <HomeContact />
      </Layout>
    </>
  );
};

export default service;
