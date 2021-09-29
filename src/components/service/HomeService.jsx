import React from "react";
import Link from "next/link";

import Title from "../ui/Title";
import ViewMoreBtn from "../ui/ViewMoreBtn";
import ServiceCard from "./ServiceCard";

const HomeService = () => {
  return (
    <section id="home_service" className="home_service_wrapper">
      <Title title="SERVICE" />
      <ServiceCard />
      <Link href="/service" passHref>
        <ViewMoreBtn button="VIEW MORE" />
      </Link>
    </section>
  );
};

export default HomeService;
