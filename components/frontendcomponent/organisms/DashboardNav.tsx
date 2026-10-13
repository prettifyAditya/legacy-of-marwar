"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();
  const profilePage = pathname.startsWith("/profile");
  const orderPage = pathname.startsWith("/order");
  const wishlistPage = pathname.startsWith("/wishlist");
  return (
    <div className="aside-left card-body">
      <div className="aside-left-wrap">
        <div className="profile-col">
          <div className="ico">
            <Image
              src="/images/dashboard/profile_img.svg"
              alt="Profile Image"
              width="70"
              height="70"
            ></Image>
          </div>
          <p className="wlcm">Welcome</p>
          <p className="name-usr">Deepak Chauhan</p>
          <div className="usr-email">
            <Link href="mailto:info@legacyofmarwar.com">
              info@legacyofmarwar.com
            </Link>
            <div className="fig">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m5 14l3.5 3.5L19 6.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="usr-email">
            <Link href="tel:+919998887771">+91 - 9998887771</Link>
            <div className="fig">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m5 14l3.5 3.5L19 6.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="nav-col">
          <ul>
            <li>
              <Link className={profilePage ? "active" : ""} href="/profile">
                My Profile
              </Link>
            </li>
            <li>
              <Link className={orderPage ? "active" : ""} href="/order">
                Orders
              </Link>
            </li>
            <li>
              <Link className={wishlistPage ? "active" : ""} href="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="" href="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
