"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import CheckoutBottom from "../../molecules/CheckoutBottom";
import CheckoutTotalList from "../../molecules/CheckoutTotalList";
import type { CheckoutPricing } from "@/app/types/CheckoutPricing";

const MIN_QTY = 1;
const MAX_QTY = 10;

interface Coupon {
  coupon: string;
}

interface CartItem {
  id: string;
  title: string;
  imgSrc: string;
  color: string;
  sp: number;
  mrp: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: "prism-hoops-1",
    title: "Prism Hoops Silver",
    imgSrc: "/images/other/cart-product.jpg",
    color: "Silver",
    sp: 1299,
    mrp: 1499,
    quantity: 1,
  },
  {
    id: "prism-hoops-2",
    title: "Prism Hoops Silver",
    imgSrc: "/images/other/cart-product.jpg",
    color: "Silver",
    sp: 1299,
    mrp: 1499,
    quantity: 1,
  },
];

const BankListData = Array.from({ length: 9 }, (_, i) => ({
  imgSrc: `/images/checkout/payment${i + 1}.png`,
}));

/* ---------- one cart row ---------- */

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
}

function CartItemRow({ item, onQuantityChange }: CartItemRowProps) {
  const { id, quantity } = item;

  const decrement = () => onQuantityChange(id, Math.max(MIN_QTY, quantity - 1));
  const increment = () => onQuantityChange(id, Math.min(MAX_QTY, quantity + 1));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      onQuantityChange(id, NaN); // lets the user clear the box while typing
      return;
    }
    const num = parseInt(raw, 10);
    if (!isNaN(num)) {
      onQuantityChange(id, Math.min(MAX_QTY, Math.max(MIN_QTY, num)));
    }
  };

  const handleBlur = () => {
    if (isNaN(quantity)) onQuantityChange(id, MIN_QTY);
  };

  return (
    <div className="cart_col">
      <Link href="/product-listing" className="figure">
        <Image src={item.imgSrc} width={120} height={120} alt={item.title} />
      </Link>
      <figcaption>
        <Link href="/product-listing" className="h6">
          {item.title}
        </Link>
        <div className="options_wrap">
          <div className="color_col">
            <p>
              Color : <span>{item.color}</span>
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
                />
              </svg>
            </button>
            <input
              type="text"
              inputMode="numeric"
              value={isNaN(quantity) ? "" : quantity}
              onChange={handleInputChange}
              onBlur={handleBlur}
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
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lower-wrap">
          <div className="price_wrap">
            <p className="sp">₹{item.sp.toLocaleString("en-IN")}</p>
            <p className="mrp">₹{item.mrp.toLocaleString("en-IN")}</p>
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
              />
            </svg>
          </button>
        </div>
      </figcaption>
    </div>
  );
}

/* ---------- main component ---------- */

export default function CartDetails() {
  const [formData, setFormData] = useState<Coupon>({ coupon: "" });
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  // change only the item whose id matches, leave the rest untouched
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  // totals now follow the quantities
  const totalMrp = cartItems.reduce(
    (sum, i) => sum + i.mrp * (i.quantity || 0),
    0,
  );
  const totalSp = cartItems.reduce(
    (sum, i) => sum + i.sp * (i.quantity || 0),
    0,
  );

  const checkoutItems: CheckoutPricing[] = [
    { id: "mrp", label: "Total MRP", amount: totalMrp, type: "add" },
    {
      id: "discount",
      label: "Discount on MRP",
      amount: totalMrp - totalSp,
      type: "subtract",
    },
    { id: "coupon", label: "Coupon Discount", amount: 0, type: "subtract" },
    {
      id: "shipping",
      label: "Shipping Fee",
      amount: 0,
      type: "add",
      freeLabel: "Free",
    },
  ];

  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = () => {
    console.log("apply coupon:", formData.coupon);
  };

  return (
    <section>
      <div className="checkout-main sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="total">
                <p>
                  <span>{cartItems.length} </span>Items
                </p>
              </div>
              <div className="cart_list">
                {cartItems.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onQuantityChange={updateQuantity}
                  />
                ))}
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
                    buttonText="Apply"
                    onClick={handleApplyCoupon}
                  />
                  <p></p>
                </div>
              </div>
              <CheckoutTotalList
                items={checkoutItems}
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
