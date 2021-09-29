import React from "react";
import Link from "next/link";

const Menu = () => {
  const menus = [
    { link: "/company", jp: "会社情報", en: "COMPANY" },
    { link: "/service", jp: "業務内容", en: "SERVICE" },
    {
      link: "/overseas/vietnam",
      jp: "ユニテック ベトナム",
      en: "UNITEC VIETNAM",
    },
    { link: "/contact/form", jp: "お問い合わせ", en: "CONTACT" },
  ];

  return (
    <div>
      <ul className="flex">
        {menus.map((menu, index) => {
          return (
            <li key={index} className="menu_li">
              <Link href={menu.link}>
                <span className="border_animation">{menu.jp}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
