import React from "react";
import Link from "next/link";

import Policy from "../components/privacy policy/Policy";
import RecButton from "../components/ui/RecButton";

const privacypolicy = () => {
  return (
    <div className="my-40 flex flex-col items-center">
      <h2 className="mb-10 font-roboto font-semibold tracking-wider ">
        PRIVACY POLICY
      </h2>
      <Policy />
      <Link href="/contact/form" passHref>
        <RecButton button="フォームに戻る" color="rec_btn rec_gray" />
      </Link>
    </div>
  );
};

export default privacypolicy;
