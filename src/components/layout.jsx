import React from "react";
import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ description, title, children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
