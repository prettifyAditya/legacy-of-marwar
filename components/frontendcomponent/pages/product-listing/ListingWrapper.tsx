"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import ListingCard from "../../molecules/ListingCard";

const MIN = 0;
const MAX = 100000;

type DropdownId = "category" | "price" | "color" | "sort";

interface FilterOption {
  label: string;
}

const categoryData: FilterOption[] = [
  { label: "Bracelets" },
  { label: "Rings" },
  { label: "Earrings" },
  { label: "Necklaces" },
];

const colorData: FilterOption[] = [
  { label: "Silver" },
  { label: "Gold" },
  { label: "Rose Gold" },
];

const sortData: FilterOption[] = [
  { label: "Price: Low to High" },
  { label: "Price: High to Low" },
  { label: "Newest" },
];

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

export default function ListingWrapper() {
  const [price, setPrice] = useState<number[]>([MIN, MAX]);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handlePriceRange = (range: number[]) => {
    setPrice(range);
  };

  const toggleDropdown = (id: DropdownId) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };
  const wrapClass = (id: DropdownId, extra = "") =>
    `adi-select-wrap ${extra} ${activeDropdown === id ? "active" : ""}`
      .replace(/\s+/g, " ")
      .trim();
  return (
    <section className="listing_wrapper">
      <div className="list-filter-wrap">
        <div className="container">
          <div className="list-filter" ref={filterRef}>
            <div className="colA">
              <button type="button" className="filtr-btn">
                <img src="/icon/sort.svg" className="svg" alt="" />
              </button>
            </div>
            <div className="colB">
              <div className="filter_wrap">
                <div className={wrapClass("category")}>
                  <div
                    className="label"
                    onClick={() => toggleDropdown("category")}
                  >
                    Category
                  </div>
                  <div className="adi-select-menu">
                    <article>
                      <ul>
                        {categoryData.map((item) => (
                          <li key={item.label.toLowerCase()}>
                            <input
                              type="radio"
                              name="category"
                              id={item.label.toLowerCase()}
                            />
                            <div className="in-bx"></div>
                            <span>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
                <div className={wrapClass("price", "price_select")}>
                  <div
                    className="label"
                    onClick={() => toggleDropdown("price")}
                  >
                    Price
                  </div>
                  <div className="adi-select-menu">
                    <article>
                      <div className="price_wrap">
                        <div className="upper-sec">
                          <h6>Price Range</h6>
                          <button
                            type="button"
                            className="reset-btn"
                            onClick={() => setPrice([MIN, MAX])}
                          >
                            Reset
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={21}
                              height={21}
                              viewBox="0 0 21 21"
                            >
                              <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
                                <path d="M7.5 6.5h-4v-4" />
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div className="product-price-range">
                          <div className="product-range-slider-range">
                            <Range
                              step={100}
                              min={MIN}
                              max={MAX}
                              values={price}
                              onChange={handlePriceRange}
                              renderTrack={({ props, children }) => (
                                <div
                                  {...props}
                                  style={{
                                    ...props.style,
                                    height: "3px",
                                    margin: "30px 10px",
                                    borderRadius: "5px",
                                    background: getTrackBackground({
                                      values: price,
                                      colors: ["#f5f5f5", "#9a7c47", "#f5f5f5"],
                                      min: MIN,
                                      max: MAX,
                                    }),
                                  }}
                                >
                                  {children}
                                </div>
                              )}
                              renderThumb={({ props }) => {
                                const { key, ...rest } = props;
                                return (
                                  <div
                                    key={key}
                                    {...rest}
                                    style={{
                                      ...props.style,
                                      height: "20px",
                                      width: "20px",
                                      backgroundColor: "#9a7c47",
                                      borderRadius: "50%",
                                      outline: "none",
                                    }}
                                  />
                                );
                              }}
                            />
                          </div>
                          <div className="price-range-input-wrap">
                            <div className="price-range-input">
                              <span>&#8377;</span>
                              {price[0]}
                            </div>
                            <p>to</p>
                            <div className="price-range-input">
                              <span>&#8377;</span>
                              {price[1]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className={wrapClass("color")}>
                  <div
                    className="label"
                    onClick={() => toggleDropdown("color")}
                  >
                    Color
                  </div>
                  <div className="adi-select-menu">
                    <article>
                      <ul>
                        {colorData.map((item) => (
                          <li key={item.label.toLowerCase()}>
                            <input
                              type="checkbox"
                              name="category"
                              id={item.label.toLowerCase()}
                            />
                            <div className="in-bx"></div>
                            <span>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="colC">
              <div className={wrapClass("sort", "sort_by slt-rgt")}>
                <div className="label" onClick={() => toggleDropdown("sort")}>
                  Sort By
                </div>
                <div className="adi-select-menu">
                  <article>
                    <ul>
                      {sortData.map((item) => (
                        <li key={item.label.toLowerCase()}>
                          <input
                            type="radio"
                            name="sort"
                            id={item.label.toLowerCase()}
                          />
                          <div className="in-bx"></div>
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_listing_wrapper">
        <div className="container">
          <div className="main_wrapper">
            {productItem.map((item) => (
              <ListingCard key={item.linkHref} data={item} />
            ))}
          </div>
          <button type="button" className="load_more">
            <Image
              src="/icon/logo-vector.svg"
              width="43"
              height="30"
              alt="logo"
            ></Image>
            Load More..
          </button>
        </div>
      </div>
    </section>
  );
}
