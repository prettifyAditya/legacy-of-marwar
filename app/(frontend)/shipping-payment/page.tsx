import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Payment | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ShippingPaymentPage from "@/components/frontendcomponent/pages/shipping-payment";

export default function ShippingPayment() {
  return <ShippingPaymentPage />;
}
