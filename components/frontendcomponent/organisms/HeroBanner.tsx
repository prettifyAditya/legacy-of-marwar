"use client";
import Image from "next/image";
import type { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import "@/uploads/sass/component/component.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface HeroProps {
  classname?: string;
  heading?: string;
  isLogo?: boolean;
  subheading?: string;
  desc?: string;
  mediaSrc: string | string[];
  posterSrc?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  linkHref?: string;
}

export default function HeroBanner({
  classname = "",
  heading = "",
  isLogo = false,
  subheading = "",
  desc = "",
  mediaSrc = "" as string | string[],
  posterSrc = "",
  onClick,
  linkHref = "",
}: HeroProps) {
  const resolvedSrc: string = Array.isArray(mediaSrc)
    ? (mediaSrc[0] ?? "")
    : mediaSrc;

  return (
    <div className={`banner hero_banner ${classname}`}>
      <div className="bg">
        {resolvedSrc.includes("mp4") ? (
          <video
            src={resolvedSrc}
            poster={posterSrc}
            width={1280}
            height={700}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        ) : Array.isArray(mediaSrc) ? (
          <>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              speed={800}
              allowTouchMove= {false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              className="banner-slider"
            >
              {mediaSrc?.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt="banner image"
                      width={1920}
                      height={1080}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        ) : (
          <Image
            src={resolvedSrc}
            width={1280}
            height={700}
            alt={heading}
          ></Image>
        )}
        <div className="banner-wrapper">
          <div className="container">
            <div className="heading">
              {subheading && <h6>{subheading}</h6>}
              {heading && <h1>{heading}</h1>}
              {isLogo && (
                <Image
                  className="written-logo"
                  src="/images/about/logo-written.png"
                  width={540}
                  height={70}
                  alt="logo"
                ></Image>
              )}
              {desc && <p>{desc}</p>}
              {(onClick || linkHref) && (
                <Button
                  onClick={onClick}
                  linkHref={linkHref}
                  classname="animation"
                  buttonText="Shop Now"
                  svgpath="/icon/logo-vector.svg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
