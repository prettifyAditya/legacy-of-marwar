import Image from "next/image";
import type { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import "@/uploads/sass/component/component.css";

interface HeroProps {
  classname?: string;
  heading: string;
  subheading?: string;
  desc?: string;
  mediaSrc: string;
  posterSrc?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  linkHref?: string;
}

export default function HeroBanner({
  classname = "",
  heading = "",
  subheading = "",
  desc = "",
  mediaSrc = "",
  posterSrc = "",
  onClick,
  linkHref = "",
}: HeroProps) {
  return (
    <div className={`banner hero_banner ${classname}`}>
      <div className="bg">
        {mediaSrc.includes("mp4") ? (
          <video
            src={mediaSrc}
            poster={posterSrc}
            width={1280}
            height={700}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        ) : (
          <Image src={mediaSrc} width={1280} height={700} alt={heading}></Image>
        )}
        <div className="banner-wrapper">
          <div className="container">
            <div className="heading">
              {subheading && <h6>{subheading}</h6>}
              <h1>{heading}</h1>
              {desc && <p>{desc}</p>}
              {(onClick || linkHref) && (
                <Button
                  onClick={onClick}
                  linkHref={linkHref}
                  classname="animation"
                  buttonText="Shop the collection"
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
