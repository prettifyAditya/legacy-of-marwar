import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ContactUsPage from "@/components/frontendcomponent/pages/contact-us";

export default function ContactUs() {
  return <ContactUsPage />;
}
