import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Order Details | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import OrderDetailPage from "@/components/frontendcomponent/pages/order-detail";

export default function OrderDetails() {
  return <OrderDetailPage />;
}
