"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ListingCard from "../../molecules/ListingCard";
import SwiperButton from "../../atoms/SwiperButton";
import "swiper/css";

const productItem = [
  {
    linkHref: "/product-listing/1",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/2",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/3",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/4",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/5",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/6",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/7",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/8",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/9",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/10",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/11",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/12",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
];

export default function MoreProducts() {
  return (
    <section>
      <div className="more_products sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>You May Also Like</h2>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav center-full group primary">
              <SwiperButton classname="swiper-prev more-prev"></SwiperButton>
              <SwiperButton classname="swiper-next more-next"></SwiperButton>
            </div>
            <Swiper
              modules={[Navigation]}
              className="more_slider"
              speed={1000}
              navigation={{
                prevEl: ".more-prev",
                nextEl: ".more-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                769: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
              {productItem.map((item) => (
                <SwiperSlide key={item.linkHref}>
                  <ListingCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
