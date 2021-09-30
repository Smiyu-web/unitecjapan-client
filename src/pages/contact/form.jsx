import React from "react";
import PageHero from "../../components/hero/PageHero";
import Layout from "../../components/layout";
import ContactForm from "../../components/contact/ContactForm";

const contact = () => {
  const description = "";
  const title = "お問い合わせ | ユニテックジャパン株式会社";
  return (
    <>
      <Layout description={description} title={title}>
        <PageHero
          title="CONTACT"
          desc={`お問い合わせ内容の確認後、担当者よりご連絡させていただきます。\n平日10時〜17時はお電話(0798-64-1902)でのお問い合わせも承っております。\n※尚弊社への営業を目的としたお問い合わせはご遠慮ください。`}
        />
        <ContactForm />
      </Layout>
    </>
  );
};

export default contact;
