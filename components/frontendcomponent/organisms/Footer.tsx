import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

interface FooterNavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

const footerNavItems: FooterNavItem[] = [
  { label: "About SJ Group", href: "/about-us" },
  { label: "Services", href: "/service-listing" },
  { label: "Projects", href: "/project-listing" },
  { label: "Blogs", href: "/blog-listing" },
  { label: "Contact us", href: "/contact-us", isButton: true },
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

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="upper-footer">
            <div className="main_wrapper flex">
              <div className="colA">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo.svg"
                    className="svg"
                    width={101}
                    height={118}
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="colB">
                <ul className="nav">
                  {footerNavItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={item.isButton ? "btn white" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="contact_group">
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.829 16.171a20.9 20.9 0 0 1-4.846-7.614c-.573-1.564-.048-3.282 1.13-4.46l.729-.728a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.42.42a1.81 1.81 0 0 0 0 2.56l3.84 3.841a1.81 1.81 0 0 0 2.56 0l.421-.42a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.728.728c-1.178 1.179-2.896 1.704-4.46 1.131a20.9 20.9 0 0 1-7.614-4.846Z"
                        />
                      </svg>
                    </div>
                    <Link href="tel:+91-0000 000 000">+91-0000 000 000</Link>
                  </li>
                  <li>
                    <Link href="mailto:info@sjgroup.com">info@sjgroup.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lower-footer">
            <div className="copywite">
              <p>© SJ Group. All rights reserved.</p>
              <p className="pret">
                Made by passion
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
          </div>
        </div>
      </footer>
      <Overlay />
    </>
  );
}
