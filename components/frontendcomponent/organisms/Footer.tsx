"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Overlay from "./Overlay";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import SearchPop from "./SearchPop";
import Hamburger from "./Hamburger";
import LoginPop from "./LoginPop";

interface InfoItem {
  icon: string;
  title: string;
  desc: string;
}

const infoStripData: InfoItem[] = [
  {
    icon: "/icon/info1.svg",
    title: "BULK ORDER",
    desc: "Get a good discount on bulk orders.",
  },
  {
    icon: "/icon/info2.svg",
    title: "PAN INDIA DELIVERY",
    desc: "Uniforms Delivered to Your Doorstep.",
  },
  {
    icon: "/icon/info3.svg",
    title: "7 DAYS EXCHANGE*",
    desc: "Simply exchange it within 7 days.",
  },
  {
    icon: "/icon/info4.svg",
    title: "Secure Payment",
    desc: "Pay Securely, Shop Confidently.",
  },
];

interface FooterNav {
  heading: string;
  navItems: FooterNavItem[];
}

interface FooterNavItem {
  title: string;
  linkHref: string;
}

const footerNavItems: FooterNav[] = [
  {
    heading: "Products",
    navItems: [
      { title: "Rings", linkHref: "/product-listing/rings" },
      { title: "Earrings", linkHref: "/product-listing/earrings" },
      { title: "Bracelets", linkHref: "/product-listing/bracelets" },
      { title: "Necklaces", linkHref: "/product-listing/necklaces" },
      { title: "Silver Coins", linkHref: "/product-listing/silver-coins" },
      { title: "Festive Offers", linkHref: "/product-listing/festive-offers" },
    ],
  },
  {
    heading: "Company",
    navItems: [
      { title: "About us", linkHref: "/about-us" },
      { title: "Contact us", linkHref: "/contact-us" },
      { title: "FAQ's", linkHref: "/faqs" },
      { title: "Careers", linkHref: "/careers" },
      { title: "Blogs", linkHref: "/blogs" },
    ],
  },
  {
    heading: "Legal",
    navItems: [
      { title: "Privacy Policy", linkHref: "/privacy-policy" },
      { title: "Terms and Conditions", linkHref: "/terms-and-conditions" },
      { title: "Shipping & Delivery", linkHref: "/shipping-and-delivery" },
      { title: "Returns & Exchanges", linkHref: "/returns-and-exchanges" },
      { title: "Size Guide", linkHref: "/size-guide" },
    ],
  },
];

interface SocialLink {
  name: string;
  href: string;
  viewBox: string;
  path: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "#",
    viewBox: "0 0 16 16",
    path: "M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z",
  },
  {
    name: "Facebook",
    href: "#",
    viewBox: "0 0 640 640",
    path: "M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4v42.1h-66v97.8z",
  },
  {
    name: "Instagram",
    href: "#",
    viewBox: "0 0 24 24",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
  },
  {
    name: "LinkedIn",
    href: "#",
    viewBox: "0 0 24 24",
    path: "M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z",
  },
];

interface EmailData {
  email: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<EmailData>({
    email: "",
  });
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
    <>
      <figure className="footer-vector">
        <img src="/images/home/footer-vector.svg" alt="footer_vector"></img>
      </figure>
      <footer>
        <Image
          src="/images/home/footer-bg.jpg"
          width={1280}
          height={440}
          alt="footer_bg"
          className="footer-bg"
        ></Image>
        <div className="info_strip">
          <div className="container">
            <ul>
              {infoStripData.map((item) => (
                <li key={item.title}>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="upper-footer">
          <div className="main_wrapper flex container">
            <div className="colA">
              <Link href="/" className="logo">
                <Image
                  src="/images/logo-light.svg"
                  className="svg"
                  width={151}
                  height={110}
                  alt="logo"
                />
              </Link>
              <div className="form">
                <Input
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email  address"
                  name="email"
                  id="email"
                />
                <button type="button" className="submitBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      d="m7 2l10 10L7 22"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="desc">
                <p>
                  *By proceeding, you agree to the Legacy of Marwar{" "}
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>,
                  have read and understood the Legacy of Marwar{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>, and
                  consent to receiving brand marketing messages.
                </p>
              </div>
              <div className="contact_wrap">
                <ul className="social_icons">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <Link href={social.href} aria-label={social.name}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox={social.viewBox}
                        >
                          <path fill="currentColor" d={social.path} />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="tel:+910000000000" className="mob_no">
                  +91 - 000 000 0000
                </Link>
              </div>
            </div>
            <div className="colB">
              <div className="nav-wrapper">
                {footerNavItems.map((item) => (
                  <div className="list" key={item.heading}>
                    <h6>{item.heading}</h6>
                    <ul>
                      {item.navItems.map((item) => (
                        <li key={item.title}>
                          <Link href={item.linkHref}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="btn_wrap">
                <Button
                  classname="white-border"
                  buttonText="Whatsapp"
                  svgpath={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <g clipPath="url(#SVGXv8lpc2Y)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413"
                            clipRule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="SVGXv8lpc2Y">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  }
                ></Button>
                <Button classname="white" buttonText="Bulk Order"></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer container">
          <div className="copywite">
            <p>© Legacy of Marwar . All Right Reserved</p>
            <p className="pret">
              Made by
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.prettifycreative.com/"
              >
                <img
                  src="/icon/prettify-light.svg"
                  width={43}
                  height={16}
                  alt="prettify_logo"
                />
              </Link>
            </p>
          </div>
          <figure className="payment">
            <Image
              src="/images/home/payment.png"
              width={350}
              height={45}
              alt="payments"
            ></Image>
          </figure>
        </div>
      </footer>
      <Overlay />
      <Hamburger />
      <SearchPop />
      <LoginPop />
    </>
  );
}
