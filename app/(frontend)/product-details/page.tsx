import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Details | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ProductDetailsPage from "@/components/frontendcomponent/pages/product-details";

export default function ProductDetails() {
  return <ProductDetailsPage />;
}
