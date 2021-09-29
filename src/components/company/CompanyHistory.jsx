import React from "react";
import PageTitle from "../ui/PageTitle";
import { getAllHistory } from "./company.data";

const CompanyHistory = () => {
  const historydata = getAllHistory();
  return (
    <div className="page_section_wrapper bg-color-background2">
      <div className="mb-20">
        <PageTitle titleEN="HISTORY" titleJP="沿革" />
      </div>
      <div>
        <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-3">
          {historydata.map((data, index) => {
            return (
              <li key={index} className="flex">
                <h6 className="mr-5 font-semibold w-24">{data.year}年</h6>
                <h6 className="whitespace-pre-wrap ">{data.description}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CompanyHistory;
