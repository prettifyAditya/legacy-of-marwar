import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shipping & Delivery | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ShippingDeliveryPage from "@/components/frontendcomponent/pages/shipping-delivery";

export default function ShippingDelivery() {
  return <ShippingDeliveryPage />;
}
