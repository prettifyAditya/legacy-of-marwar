"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "../../atoms/Button";

const exclusiveData = [
  {
    linkHref: "/product-listing/1",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
  {
    linkHref: "/product-listing/2",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
  {
    linkHref: "/product-listing/3",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
  {
    linkHref: "/product-listing/4",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
  {
    linkHref: "/product-listing/5",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
  {
    linkHref: "/product-listing/6",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
  },
];

export default function Exclusive() {
  return (
    <section>
      <div className="exclusive_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="heading">
              <h2>Exclusive Silver</h2>
              <p>
                Discover thoughtfully crafted silver jewellery designed to add a
                touch of timeless elegance and distinctive charm to every
                occasion.
              </p>
              <div className="swiper-dots"></div>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              className="exclusive_slider"
              speed={1500}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".swiper-dots",
                clickable: true,
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
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
              }}
            >
              {exclusiveData.map((item) => (
                <SwiperSlide key={item.linkHref}>
                  <Link href={item.linkHref} className="exclusive_col">
                    <figure>
                      <Image
                        src={item.imgSrc}
                        width={280}
                        height={220}
                        alt={`${item.title}'s_img`}
                      ></Image>
                    </figure>
                    <figcaption>
                      <h6>{item.title}</h6>
                      <Button
                        classname="solid-primary"
                        buttonText="Shop Now"
                        svgpath="/icon/btn-arrow.svg"
                      ></Button>
                    </figcaption>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
