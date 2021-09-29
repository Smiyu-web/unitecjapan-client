import React from "react";
import { getAllServiceData } from "./service.data";

const Create = () => {
  const createData = getAllServiceData()[1];
  return (
    <div className="grid grid-flow-row grid-cols-service justify-center items-center my-10">
      <div className="service_title">
        <img src={createData.icon} alt={createData.title} className="w-10" />
        <h6 className="text-white mt-5">{createData.service}</h6>
      </div>
      <div className="grid grid-flow-row grid-cols-2">
        {createData.detail.map((result, index) => {
          return (
            <div className="border-l-2 border-color-footer my-5" key={index}>
              <h5 className="text-color-footer pl-2">{result.title}</h5>
              <ul className="ml-2 py-2">
                {result.contents.map((content, index) => {
                  return (
                    <li className="text-xs py-19" key={index}>
                      {content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Create;
