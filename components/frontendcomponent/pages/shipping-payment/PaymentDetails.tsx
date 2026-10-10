"use client";
import CheckoutBottom from "../../molecules/CheckoutBottom";
import { CheckoutPricing } from "@/app/types/CheckoutPricing";
import CheckoutTotalList from "../../molecules/CheckoutTotalList";

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

export default function PaymentDetails() {
  return (
    <div className="checkout-main sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <div className="colA">
            <div className="top-nav">
              <h6>Choose Payment Mode</h6>
            </div>
            <div className="payment_wrapper">
              <div className="payment_col">
                <input type="radio" name="payment" id="cod" />
                <div className="in-bx"></div>
                <span>COD</span>
              </div>
              <div className="payment_col">
                <input type="radio" name="payment" id="online" />
                <div className="in-bx"></div>
                <span>Online Payment</span>
              </div>
            </div>
          </div>
          <div className="colB">
            <p className="total_products">Price Details {`(2 Items)`}</p>
            <CheckoutTotalList
              buttonText="continue"
              classname="shipping-total"
              items={CheckoutListData as CheckoutPricing[]}
              onPlaceOrder={() => console.log("order placed")}
            />
          </div>
        </div>
        <CheckoutBottom data={BankListData} />
      </div>
    </div>
  );
}
