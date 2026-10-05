"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import type { Category } from "@/app/types/product";
import SwiperButton from "../atoms/SwiperButton";
import Button from "../atoms/Button";
import ListingCard from "../molecules/ListingCard";

interface ProductData {
  classname?: string;
  heading: string;
  mediaSrc: string;
  linkHref: string;
  tavNav: Category[];
}

interface ProductProps {
  data: ProductData;
}

export default function ProductListingSlider({ data }: ProductProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className={`product_listing_slider sec-pad-all ${data.classname}`}>
        <div className="container">
          <div className="upper_sec">
            <div className="heading">
              <h2>{data.heading}</h2>
            </div>
            <ul className="tab-nav">
              {data.tavNav.map((item, index) => (
                <li
                  key={item.label}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="main_wrapper">
            <figure className="display_media">
              <video
                src={data.mediaSrc}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </figure>
            <div className="slider_section">
              <div className="swiper-nav center-full group primary">
                <SwiperButton classname="swiper-prev product-prev"></SwiperButton>
                <SwiperButton classname="swiper-next product-next"></SwiperButton>
              </div>
              <Swiper
                key={activeIndex}
                modules={[Navigation]}
                className="product_slider"
                speed={1000}
                navigation={{
                  prevEl: ".product-prev",
                  nextEl: ".product-next",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  675: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                  },
                }}
              >
                {data.tavNav[activeIndex].productItem.map((item) => (
                  <SwiperSlide key={item.linkHref}>
                    <ListingCard data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="btn_wrap">
            <Button
              classname="solid-primary"
              buttonText="Explore All"
              linkHref={data.linkHref}
              svgpath="/icon/btn-arrow.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
