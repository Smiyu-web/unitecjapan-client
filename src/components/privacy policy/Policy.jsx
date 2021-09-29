import React from "react";
import { getAllPolicy } from "./policy.data";

const Policy = () => {
  const policylist = getAllPolicy();
  return (
    <ul className="mx-80 mb-20">
      {policylist.map((list, index) => {
        return (
          <li key={index} className="my-10">
            <h5 className="pb-2 font-bold">{list.policy}</h5>
            <p className="pt-3 border-t-2 border-color-text　whitespace-pre-wrap">
              {list.description}
            </p>
          </li>
        );
      })}
      <li className="my-10">
        <h5 className="pb-2 font-bold">連絡先</h5>
        <div className="pt-3 border-t-2 border-color-text　whitespace-pre-wrap">
          <table className="border border-color-text2">
            <tr className="table_line">
              <td className="table_left">名称</td>
              <td className="table_right">ユニテックジャパン株式会社</td>
            </tr>
            <tr className="table_line">
              <td className="table_left">住所</td>
              <td className="table_right">
                〒663-8113　兵庫県西宮市甲子園口2-21-3　ピュア甲子園口2F
              </td>
            </tr>
            <tr className="table_line">
              <td className="table_left">電話番号</td>
              <td className="table_right">0798-64-1902</td>　
            </tr>
          </table>
        </div>
      </li>
    </ul>
  );
};

export default Policy;
