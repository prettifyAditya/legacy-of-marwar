import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms & Conditions | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import TermsConditionsPage from "@/components/frontendcomponent/pages/terms-conditions";

export default function TermsConditions() {
  return <TermsConditionsPage />;
}
