import React from "react";
import PageTitle from "../ui/PageTitle";
import { getAllCompany } from "./company.data";

const Outline = () => {
  const comapnydata = getAllCompany();
  return (
    <div className="page_section_wrapper">
      <div className="mb-20">
        <PageTitle titleEN="OUTLINE" titleJP="会社概要" />
      </div>
      <div>
        <ul className="grid grid-flow-col grid-cols-2 grid-rows-5 gap-5">
          {comapnydata.map((data, index) => {
            return (
              <li key={index} className="flex">
                <h6 className="mr-5 font-semibold w-32">{data.title}</h6>
                <h6 className="whitespace-pre-wrap">{data.description}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Outline;
