import React from "react";
import Link from "next/link";

import PageTitle from "../ui/PageTitle";
import ViewMoreBtn from "../ui/ViewMoreBtn";
import { getAllAccess } from "./company.data";

const Access = () => {
  const accessdata = getAllAccess();
  return (
    <div className="page_section_wrapper">
      <div className="mb-20 text-center">
        <PageTitle titleEN="ACCESS" titleJP="アクセス" />
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-16">
        {accessdata.map((data, index) => {
          return (
            <div key={index}>
              <a href={data.maplink}>
                <img src={data.map} alt={data.office} />
              </a>
              <div>
                <h4 className="font-semibold my-3">{data.office}</h4>
                <h6 className="whitespace-pre-wrap mb-5">{data.address}</h6>
                <Link href={data.maplink} passHref>
                  <ViewMoreBtn button="Google map" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Access;
