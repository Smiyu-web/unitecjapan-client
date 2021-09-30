import React from "react";
import HomeContact from "../../components/contact/HomeContact";
import PageHero from "../../components/hero/PageHero";
import LaosNews from "../../components/laos/LaosNews";
import LaosStudent from "../../components/laos/LaosStudent";
import Layout from "../../components/layout";

const Laos = () => {
  const description = "";
  const title = "ラオス国立大学 | ユニテックジャパン株式会社";
  return (
    <>
      <Layout description={description} title={title}>
        <PageHero
          title="LAOS UNIVERSITY"
          desc={`2015年度から弊社はラオス国立大学との業務提携に向けその一環として、\n同大学の学生支援のために奨学金制度を開設いたしました。`}
        />
        <LaosNews />
        <LaosStudent />
        <HomeContact />
      </Layout>
    </>
  );
};

export default Laos;
