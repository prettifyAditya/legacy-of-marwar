import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Listing | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ProductListingPage from "@/components/frontendcomponent/pages/product-listing";

export default function ProductListing() {
  return <ProductListingPage />;
}
