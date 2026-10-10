import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shipping Address | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ShippingAddressPage from "@/components/frontendcomponent/pages/shipping-address";

export default function ShippingAddress() {
  return <ShippingAddressPage />;
}
