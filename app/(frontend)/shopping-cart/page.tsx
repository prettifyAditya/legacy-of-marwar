import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shopping Cart | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ShoppingCartPage from "@/components/frontendcomponent/pages/shopping-cart";

export default function ShoppingCart() {
  return <ShoppingCartPage />;
}
