"use client";

import { items, itemsTwo } from "@/data/jobFeatures";
import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bioData } from "@/data/bioData";
import Image from "next/image";

export default function AboutThree() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <div className="bostami-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">about</h2>
          <p>{bioData.descOne}</p>
          <p>{bioData.descTwo}</p>
        </div>
      </div>

      <div className="section-wrapper pl-60 pr-60">
        <div className="bostami-section-title-wrap mb-30">
          <h3 className="section-title">What I do!</h3>
        </div>

        <div className="bostami-what-do-wrap mb-30">
          <div className="row">
            {items.map((elm, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 ">
                <div className={`bostami-what-do-item ${elm.bg}`}>
                  <div className="icon" style={{ margin: "0 auto" }}>
                    <Image
                      height={40}
                      width={160}
                      style={{ margin: "0 auto" }}
                      alt="about"
                      src={elm.icon}
                    />
                  </div>
                  <div className="text">
                    <h4 className="title">{elm.title}</h4>
                    <p>{elm.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
        <div className="bostami-section-title-wrap text-center mb-50">
          <h3 className="section-title">clinet</h3>
        </div>

      
      </div>

      <div className="footer-copyright text-center pt-25 pb-25">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by dev moshiur.
        </span>
      </div>
    </div>
  );
}
