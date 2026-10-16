"use client";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/store/hooks";
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
  const { openModal, closeModal } = useModal();
  const { isModal } = useAppSelector((state) => state.modal);
  const isFilterOpen = isModal === "filterPop";
  const [price, setPrice] = useState<number[]>([MIN, MAX]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 991);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 990px)");

    const handleChange = (e: MediaQueryList | MediaQueryListEvent) => {
      setActiveDropdown(e.matches ? "category" : null);
    };

    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);
  return (
    <section className="listing_wrapper">
      <div
        className="list-filter-wrap"
        style={{ zIndex: isFilterOpen ? 11 : 7 }}
      >
        <div className="container">
          <div className="list-filter" ref={filterRef}>
            <div className="colA">
              <button
                type="button"
                className="filtr-btn"
                onClick={() => openModal("filterPop")}
              >
                <img src="/icon/sort.svg" className="svg" alt="" />
              </button>
            </div>
            <div
              className={`colB ${isMobile ? "model" : ""} ${isFilterOpen ? "is-open" : ""}`}
            >
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
                {isMobile && (
                  <div className="btn-mbl-btm">
                    <button
                      className="btn solid-primary"
                      type="button"
                      onClick={closeModal}
                    >
                      Apply
                    </button>
                    <button
                      className="btn solid-black"
                      type="button"
                      onClick={closeModal}
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
              {isMobile && (
                <button type="button" className="close" onClick={closeModal}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              )}
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
