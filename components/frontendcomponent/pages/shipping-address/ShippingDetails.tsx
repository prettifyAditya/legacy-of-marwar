"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../../atoms/Button";
import CheckoutBottom from "../../molecules/CheckoutBottom";
import { CheckoutPricing } from "@/app/types/CheckoutPricing";
import CheckoutTotalList from "../../molecules/CheckoutTotalList";
import { useModal } from "@/hooks/useModal";

interface AddressItem {
  name: string;
  address: string;
  mobile: string;
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

const productItem = [
  {
    linkHref: "/product-listing/1",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "₹1299",
    mrp: "₹1499",
  },
  {
    linkHref: "/product-listing/2",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "₹1299",
    mrp: "₹1499",
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

const AddressData: AddressItem[] = [
  {
    name: "Deepak",
    address:
      "Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana",
    mobile: "+91 - 9953750281",
  },
  {
    name: "Aditya",
    address:
      "Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana",
    mobile: "+91 - 9998887771",
  },
];

export default function ShippingDetails() {
  const { openModal } = useModal();
  return (
    <section>
      <div className="checkout-main sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="top-nav">
                <h6>Select Delivery Address</h6>
                <Button
                  buttonText="add new address"
                  classname="primary-border"
                  onClick={() => openModal("addressPop")}
                />
              </div>
              <div className="address_wrapper">
                {AddressData.map((item) => (
                  <div className="address_col" key={item.name}>
                    <input type="radio" name="address" id={item.name} />
                    <div className="chk-box">
                      <div className="in-bx"></div>
                    </div>
                    <div className="content">
                      <h6 className="name">{item.name}</h6>
                      <p className="address">{item.address}</p>
                      <div className="contact">
                        <p className="mob">
                          Mobile :{" "}
                          <Link href={`tel:${item.mobile}`}>{item.mobile}</Link>
                        </p>
                        <div className="btn_wrap">
                          <button type="button" className="remove">
                            Remove
                          </button>
                          <button type="button" className="edit">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="colB">
              <div className="product_wrapper">
                {productItem.map((item) => (
                  <div className="product_col" key={item.linkHref}>
                    <figure>
                      <Image
                        src={item.imgSrc}
                        width={95}
                        height={85}
                        alt="product-img"
                      />
                    </figure>
                    <figcaption>
                      <h6>{item.title}</h6>
                      <div className="price_wrap">
                        <p className="sp">{item.sp}</p>
                        <p className="mrp">{item.mrp}</p>
                      </div>
                    </figcaption>
                  </div>
                ))}
              </div>
              <p className="total_products">
                Price Details {`(${productItem.length} Items)`}
              </p>
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
    </section>
  );
}
