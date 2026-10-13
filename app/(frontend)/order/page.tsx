import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Orders | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import OrderPage from "@/components/frontendcomponent/pages/order";

export default function Order() {
  return <OrderPage />;
}
