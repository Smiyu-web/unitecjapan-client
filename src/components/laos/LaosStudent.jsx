import React from "react";
import StaffCard from "../ui/StaffCard";
import PageTitle from "../ui/PageTitle";

import { getAllVietnamStaff } from "../vietnam/staff.data";

const LaosStudent = () => {
  const staffData = getAllVietnamStaff();
  return (
    <div className="page_section_wrapper bg-color-background2">
      <div className="mb-20">
        <PageTitle titleEN="STAFF" titleJP="スタッフ" />
      </div>
      <div className="viet_staff_wrapper">
        {staffData.map((data, index) => {
          return (
            <div key={index}>
              <StaffCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaosStudent;
