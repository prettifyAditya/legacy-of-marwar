"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import CheckoutBottom from "../../molecules/CheckoutBottom";
import CheckoutTotalList from "../../molecules/CheckoutTotalList";
import type { CheckoutPricing } from "@/app/types/CheckoutPricing";

interface Coupon {
  coupon: string;
}

const CheckoutListData = [
  { id: "mrp", label: "Total MRP", amount: 4898, type: "add" },
  { id: "discount", label: "Discount on MRP", amount: 3748, type: "subtract" },
  { id: "coupon", label: "Coupon Discount", amount: 0, type: "subtract" },
  {
    id: "shipping",
    label: "Shipping Fee",
    amount: 0,
    type: "add",
    freeLabel: "Free",
  },
];

const BankListData = [
  {
    imgSrc: "/images/checkout/payment1.png",
  },
  {
    imgSrc: "/images/checkout/payment2.png",
  },
  {
    imgSrc: "/images/checkout/payment3.png",
  },
  {
    imgSrc: "/images/checkout/payment4.png",
  },
  {
    imgSrc: "/images/checkout/payment5.png",
  },
  {
    imgSrc: "/images/checkout/payment6.png",
  },
  {
    imgSrc: "/images/checkout/payment7.png",
  },
  {
    imgSrc: "/images/checkout/payment8.png",
  },
  {
    imgSrc: "/images/checkout/payment9.png",
  },
];

export default function CartDetails() {
  const [formData, setFormData] = useState<Coupon>({
    coupon: "",
  });
  const [quantity, setQuantity] = useState(1);
  const MIN_QTY = 1;
  const MAX_QTY = 10;
  const decrement = () => setQuantity((q) => Math.max(MIN_QTY, q - 1));
  const increment = () => setQuantity((q) => Math.min(MAX_QTY, q + 1));
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      setQuantity(NaN);
      return;
    }

    const num = parseInt(raw, 10);
    if (!isNaN(num)) {
      setQuantity(Math.min(MAX_QTY, Math.max(MIN_QTY, num)));
    }
  };

  const handleQtyBlur = () => {
    if (isNaN(quantity)) setQuantity(MIN_QTY);
  };
  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section>
      <div className="checkout-main sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="total">
                <p>
                  <span>1/2 </span>Items
                </p>
              </div>
              <div className="cart_list">
                <div className="cart_col">
                  <figure>
                    <Image
                      src="/images/other/cart-product.jpg"
                      width={120}
                      height={120}
                      alt="product-img"
                    ></Image>
                  </figure>
                  <figcaption>
                    <h6>Prism Hoops Silver</h6>
                    <div className="options_wrap">
                      <div className="color_col">
                        <p>
                          Color : <span>Silver</span>
                        </p>
                      </div>
                      <div className="quantity_wrap">
                        <button
                          type="button"
                          onClick={decrement}
                          disabled={quantity <= MIN_QTY}
                          aria-label="Decrease quantity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={isNaN(quantity) ? "" : quantity}
                          onChange={handleQtyChange}
                          onBlur={handleQtyBlur}
                          aria-label="Quantity"
                        />
                        <button
                          type="button"
                          onClick={increment}
                          disabled={quantity >= MAX_QTY}
                          aria-label="Increase quantity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                              d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="lower-wrap">
                      <div className="price_wrap">
                        <p className="sp">₹1299</p>
                        <p className="mrp">₹1499</p>
                      </div>
                      <button type="button" className="wishlistBtn">
                        Move to wishlist
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M160 256H96a32 32 0 0 1 0-64h256V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </figcaption>
                </div>
                <div className="cart_col">
                  <figure>
                    <Image
                      src="/images/other/cart-product.jpg"
                      width={120}
                      height={120}
                      alt="product-img"
                    ></Image>
                  </figure>
                  <figcaption>
                    <h6>Prism Hoops Silver</h6>
                    <div className="options_wrap">
                      <div className="color_col">
                        <p>
                          Color : <span>Silver</span>
                        </p>
                      </div>
                      <div className="quantity_wrap">
                        <button
                          type="button"
                          onClick={decrement}
                          disabled={quantity <= MIN_QTY}
                          aria-label="Decrease quantity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={isNaN(quantity) ? "" : quantity}
                          onChange={handleQtyChange}
                          onBlur={handleQtyBlur}
                          aria-label="Quantity"
                        />
                        <button
                          type="button"
                          onClick={increment}
                          disabled={quantity >= MAX_QTY}
                          aria-label="Increase quantity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                              d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="lower-wrap">
                      <div className="price_wrap">
                        <p className="sp">₹1299</p>
                        <p className="mrp">₹1499</p>
                      </div>
                      <button type="button" className="wishlistBtn">
                        Move to wishlist
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M160 256H96a32 32 0 0 1 0-64h256V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="colB">
              <div className="coupon_section">
                <h6>Coupons</h6>
                <div className="coupon_wrap form">
                  <Input
                    type="text"
                    value={formData.coupon}
                    onChange={handleChange}
                    placeholder="Enter coupon code"
                    name="coupon"
                    id="coupon"
                  />
                  <Button
                    classname="primary-border"
                    buttonText="apply"
                    onClick={() => handleSubmit}
                  />
                  <p></p>
                </div>
              </div>
              <CheckoutTotalList
                items={CheckoutListData as CheckoutPricing[]}
                onPlaceOrder={() => console.log("order placed")}
              />
            </div>
          </div>
          <CheckoutBottom data={BankListData} />
        </div>
      </div>
    </section>
  );
}
