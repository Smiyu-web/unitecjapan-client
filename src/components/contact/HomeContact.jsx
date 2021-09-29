import React from "react";
import Link from "next/link";

import RecButton from "../ui/RecButton";

const HomeContact = () => {
  return (
    <div className="home_contact_wrapper">
      <h5 className="mb-8">
        弊社に関するご相談・ご質問などございましたら、
        <br />
        お気軽にお問い合わせください。
      </h5>
      <Link href="/contact/form" passHref>
        <RecButton button="CONTACT US" color="rec_btn rec_white" />
      </Link>
    </div>
  );
};

export default HomeContact;
