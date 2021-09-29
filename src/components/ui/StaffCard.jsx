import React from "react";

const StaffCard = ({ data }) => {
  return (
    <div className="staff_card_wrapper">
      <div className="absolute -top-7 -right-7 w-48 h-48">
        <img src="/hun.jpg" alt="hun" className="rounded-full" />
      </div>
      <div className="absolute top-1/2 text-center h-48">
        <p className="text-red-600">{data.role}</p>
        <h6 className="mb-5">
          {data.nameV}/{data.nameJ}
        </h6>
        <p className="mx-5">{data.message}</p>
      </div>
    </div>
  );
};

export default StaffCard;
