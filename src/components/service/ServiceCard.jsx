import React from "react";
import { getAllServiceData } from "./service.data";

const ServiceCard = () => {
  const serviceData = getAllServiceData();

  return (
    <div className="flex my-16">
      {serviceData.map((data, index) => {
        return (
          <div key={index} className="relative mx-8">
            <div className="overflow-hidden">
              <img
                src={data.image}
                alt={data.service}
                className="service_bg_img"
              />
            </div>
            <div className="service_content">
              <img src={data.icon} alt={data.service} className="w-10 mb-3" />
              <p className="mb-10">{data.service}</p>
              <p className="mx-8 text-center">{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
