import React from "react";

const Office = () => {
  return (
    <div className="mb-24">
      <ul className="flex">
        <li className="mx-4">
          <h3 className="font-roboto mb-4">
            <span className="font-semibold tracking-wider">HEAD</span>
            <span className="font-light ml-2">office</span>
          </h3>
          <h6>
            兵庫県西宮市甲子園口2-21-3
            <br />
            ピュア甲子園口2F
            <br />
            0798-64-1902
          </h6>
        </li>
        <li className="mx-8">
          <h3 className="font-roboto mb-4">
            <span className="font-semibold tracking-wider">TOKYO</span>
            <span className="font-light ml-2">office</span>
          </h3>
          <h6>
            東京都墨田区錦糸1-2-1
            <br />
            アルカセントラル14階
            <br />
            03-6853-6636
          </h6>
        </li>
        <li className="mx-4">
          <h3 className="font-roboto mb-4">
            <span className="font-semibold tracking-wider">VIETNAM</span>
            <span className="font-light ml-2">office</span>
          </h3>
          <h6 className="font-roboto">
            DANANG UNIVERSITY OF TECHNOLOGY
            <br />
            C Building, 214 Room, 54 Nguyen Luong Street,
            <br />
            Lien Chieu Disrict Da Nang City
          </h6>
        </li>
      </ul>
    </div>
  );
};

export default Office;
