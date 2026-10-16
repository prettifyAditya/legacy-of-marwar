import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import AboutUsPage from "@/components/frontendcomponent/pages/about-us";

export default function AboutUs() {
  return <AboutUsPage />;
}
