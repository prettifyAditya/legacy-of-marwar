"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories = [
  {
    label: "Bracelets",
    linkHref: "/product-listing/bracelets",
    imgSrc: "/images/other/bracelets.png",
  },
  {
    label: "Rings",
    linkHref: "/product-listing/rings",
    imgSrc: "/images/other/rings.png",
  },
  {
    label: "Earrings",
    linkHref: "/product-listing/earrings",
    imgSrc: "/images/other/earrings.png",
  },
  {
    label: "Necklaces",
    linkHref: "/product-listing/necklaces",
    imgSrc: "/images/other/necklaces.png",
  },
];

export default function DiscoverCategory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const total = categories.length;
      const getHeaderHeight = () =>
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--headerfixed",
          ),
        ) || 0;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => `top top+=${getHeaderHeight()}`,
        end: `+=${total * 100}%`, // 100vh of scroll per category
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(total - 1, Math.floor(self.progress * total));
          setActiveIndex(index); // no re-render if the value is unchanged
        },
      });
    },
    { scope: sectionRef },
  );

  const getColClass = (index: number) => {
    if (index === activeIndex) return "category_col active";
    if (index < activeIndex) return "category_col exit";
    return "category_col";
  };

  return (
    <section ref={sectionRef}>
      <div className="discover_category sec-pad-all">
        <div className="heading">
          <h2>Discover by Category</h2>
        </div>
        <div className="main_wrapper">
          <div className="category_wrapper">
            {categories.map((item, index) => (
              <Link
                key={item.label}
                className={getColClass(index)}
                href={item.linkHref}
              >
                <figure>
                  <Image
                    src={item.imgSrc}
                    width={450}
                    height={500}
                    alt={item.label}
                  />
                </figure>
              </Link>
            ))}
          </div>
          <ul className="category_nav">
            {categories.map((item, index) => (
              <li
                key={item.label}
                className={index === activeIndex ? "active" : ""}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
