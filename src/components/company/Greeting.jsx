import React from "react";
import PageTitle from "../ui/PageTitle";

const Greeting = () => {
  return (
    <div className="page_section_wrapper flex">
      <div className="w-70vw mr-40 flex flex-col justify-between">
        <div>
          <PageTitle titleEN="GREETING" titleJP="ご挨拶" />
        </div>
        <div className="">
          <h6>
            ….中でも同社の同社たるところは、積極的な海外展開だ。….まさにアジア各国に進出するのではなく、”心攻め”によって培ってきた本物の信用と言えよう。….….中でも同社の同社たるところは、積極的な海外展開だ。….まさにアジア各国に進出するのではなく、”心攻め”によって培ってきた本物の信用と言えよう。….
          </h6>
        </div>
        <div className="flex justify-end">
          <p className="text-color-text2">代表取締役</p>
          <h5>瀬戸山　良二</h5>
        </div>
      </div>
      <div className="w-30vw">
        <img src="/bussinessman.jpeg" alt="bussinessman" />
      </div>
    </div>
  );
};

export default Greeting;
