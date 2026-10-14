import Link from "next/link";
import Image from "next/image";
import DashboardNav from "../../organisms/DashboardNav";
import "@/uploads/sass/dashboard/dashboard.css";
import Button from "../../atoms/Button";

export default function OrderDetailPage() {
  return (
    <main>
      <section>
        <div className="dashboard-secA sec-pad-all">
          <div className="container">
            <div className="flex main_wrapper">
              <DashboardNav />
              <div className="aside-right orderD-right">
                <div className="aside-right-wrap">
                  <Link href="/order" className="back2order">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14 7l-5 5l5 5"
                        strokeWidth={1}
                      ></path>
                    </svg>{" "}
                    Back to orders
                  </Link>
                  <div className="order_details_wrapper">
                    <div className="order_id">
                      <p className="id">1252562859</p>
                      <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_status">
                      <ul className="order_time">
                        <li className="active">
                          <span>Order Confirmed</span>
                          <div className="dot"></div>
                          <p>Sun, 26th June</p>
                        </li>
                        <li className="active">
                          <span>Shipped</span>
                          <div className="dot"></div>
                          <p>Mon, 27th June</p>
                        </li>
                        <li className="">
                          <span>Out for delivery</span>
                          <div className="dot"></div>
                          <p>Sun, 27th June</p>
                        </li>
                        <li>
                          <span>Delivered</span>
                          <div className="dot"></div>
                          <p>Sun, 27th June</p>
                        </li>
                      </ul>
                    </div>
                    <div className="prod_content">
                      <div className="pro_item">
                        <figure>
                          <Image
                            src="/images/other/ring1.png"
                            width="64"
                            height="70"
                            alt="Product Image"
                          ></Image>
                        </figure>
                        <div className="pro_details">
                          <p className="pro_name">
                            Women flexible bangle bracelet
                          </p>
                          <p className="size">
                            Size : <span>M:5</span>, <span>L:2</span>,{" "}
                            <span>XL:5</span>
                          </p>
                        </div>
                        <div className="item_total">
                          <div className="pro_price">
                            <p>Item Price</p>
                            <span>₹ 2,513.00</span>
                          </div>
                          <div className="quantity">
                            <p>Quantity</p>
                            <span>350</span>
                          </div>
                          <div className="total_price">
                            <p>Total</p>
                            <span>₹ 12,565</span>
                          </div>
                        </div>
                      </div>
                      <div className="pro_item">
                        <figure>
                          <Image
                            src="/images/other/ring1.png"
                            width="64"
                            height="70"
                            alt="Product Image"
                          ></Image>
                        </figure>
                        <div className="pro_details">
                          <p className="pro_name">
                            Women flexible bangle bracelet
                          </p>
                          <p className="size">
                            Size : <span>M:5</span>, <span>L:2</span>,{" "}
                            <span>XL:5</span>
                          </p>
                        </div>
                        <div className="item_total">
                          <div className="pro_price">
                            <p>Item Price</p>
                            <span>₹ 2,513.00</span>
                          </div>
                          <div className="quantity">
                            <p>Quantity</p>
                            <span>350</span>
                          </div>
                          <div className="total_price">
                            <p>Total</p>
                            <span>₹ 12,565</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="address_details">
                      <div className="colA">
                        <p className="title">Delivery Address</p>
                        <p className="user_name">Deepak Chauhan</p>
                        <p className="address">
                          Unit No. 804, Tower -B, Unitech Business Zone, Golf
                          Course Ext Rd, Sector 50, Gurugram, Haryana
                        </p>
                        <p>
                          Mobile:{" "}
                          <Link href="+919998887770">+91 - 9998887770</Link>
                        </p>
                      </div>
                      <div className="colB">
                        <p className="title">Order Summary</p>
                        <ul className="summary_details">
                          <li>
                            <p>Subtotal</p>
                            <span>₹37,695</span>
                          </li>
                          <li>
                            <p>Embroidery</p>
                            <span>₹5000.00</span>
                          </li>
                          <li>
                            <p>Shipping</p>
                            <span>₹200.00</span>
                          </li>
                          <li>
                            <p>12% IGST</p>
                            <span>₹500.00</span>
                          </li>
                          <li>
                            <p>18% IGST</p>
                            <span>₹500.00</span>
                          </li>
                          <li>
                            <p>Total GST</p>
                            <span>₹1000.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="order_id_stats">
                      <ul>
                        <li>
                          <p>Txn ID :</p>
                          <span>22525222</span>
                        </li>
                        <li>
                          <p>Status : </p>
                          <span>Pending</span>
                        </li>
                      </ul>
                      <p>
                        Total Price <span>₹ 80000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="btn_wrapper">
                    <Button
                      buttonText="Get Invoice"
                      classname="solid-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
