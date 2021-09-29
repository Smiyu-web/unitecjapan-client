import React, { useState } from "react";
import Link from "next/link";

import RecButton from "../ui/RecButton";

const ContactForm = () => {
  const [company, setCompany] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div className="text-color-text2 flex justify-center my-40">
      <form>
        <div className="input_wrapper">
          <label className="text-right pr-14">会社名</label>
          <input
            type="text"
            name="user_company"
            className="input_form"
            onChange={(e) => setCompany(e)}
          />
        </div>
        <div className="input_wrapper">
          <label className="text-right pr-14">
            お名前<span className="pl-1 text-red-600">&#42;</span>
          </label>
          <input
            type="text"
            name="user_name"
            className="input_form"
            onChange={(e) => setName(e)}
          />
        </div>
        <div className="input_wrapper">
          <label className="text-right pr-14">
            お電話番号<span className="pl-1 text-red-600">&#42;</span>
          </label>
          <input
            type="tel"
            name="user_phone"
            className="input_form"
            onChange={(e) => setPhone(e)}
          />
        </div>
        <div className="input_wrapper">
          <label className="text-right pr-14">
            メールアドレス<span className="pl-1 text-red-600">&#42;</span>
          </label>
          <input
            type="email"
            name="user_email"
            className="input_form"
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="input_wrapper">
          <label className="text-right pr-14">
            お問い合わせ内容<span className="pl-1 text-red-600">&#42;</span>
          </label>
          <textarea
            name="user_message"
            rows="6"
            cols="50"
            className="textarea_form"
            onChange={(e) => setMessage(e)}
          />
        </div>
        <div className="input_wrapper">
          <label className="text-right pr-14">
            同意事項<span className="pl-1 text-red-600">&#42;</span>
          </label>
          <div>
            <Link href="/privacypolicy">
              <a className="text-sm text-color-footer cursor-pointer">
                プライバシーポリシーはこちら
              </a>
            </Link>
            <div className="flex items-center py-2">
              <input type="checkbox" name="agreement" />
              <h6 className="ml-1">プライバシーポリシーに同意</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <input
            onSubmit={handleSubmit}
            type="submit"
            value="送信内容のご確認"
            className="contact_btn"
          /> */}
          <Link href="/contact/confirm" passHref>
            <RecButton button="送信内容のご確認" color="rec_btn rec_gray" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
