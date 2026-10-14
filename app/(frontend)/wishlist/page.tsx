import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Wishlist | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import WishlistPage from "@/components/frontendcomponent/pages/user-wishlist";

export default function Wishlist() {
  return <WishlistPage />;
}
