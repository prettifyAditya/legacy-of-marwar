import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import PrivacyPolicyPage from "@/components/frontendcomponent/pages/privacy-policy";

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
