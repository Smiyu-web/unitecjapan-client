import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-48">
      <Link href="/">
        <img src="/logo.png" alt="Unitec Japan" />
      </Link>
    </div>
  );
};

export default Logo;
