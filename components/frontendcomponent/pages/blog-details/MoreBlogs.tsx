"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import BlogCol from "../../molecules/BlogCol";

const blogsData = [
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
];

export default function MoreBlogs() {
  return (
    <div className="more_blogs_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h2>More Blogs</h2>
        </div>
        <div className="main_wrapper">
          <div className="swiper-nav center-full group white">
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
              675: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {blogsData.map((item, index) => (
              <SwiperSlide key={index}>
                <BlogCol data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
