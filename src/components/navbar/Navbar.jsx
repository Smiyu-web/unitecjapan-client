import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Language from "./Language";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={scrollNav ? "scrolled_navbar" : "navbar_wrapper"}>
      <div>
        <Logo />
      </div>
      <div className="flex">
        <Menu />
        <Language />
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
