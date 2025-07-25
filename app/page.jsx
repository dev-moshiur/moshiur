import AboutThree from "@/components/homes/about/AboutThree";

import HeaderThree from "@/components/homes/headers/HeaderThree";
import PersonalInfoThree from "@/components/homes/personalInfo/PersonalInfoThree";
import React from "react";
export const metadata = {
  title: "Home || Md Moshiur rahman's portfolio",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog , personal information , contact etc",
};
export default function page() {
  return (
    <>
      {/* <Preloader /> */}

      <div className="container z-index-3">
        <div className="row">
          <PersonalInfoThree />
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <HeaderThree />
            <AboutThree />
          </div>
        </div>
      </div>
    </>
  );
}
