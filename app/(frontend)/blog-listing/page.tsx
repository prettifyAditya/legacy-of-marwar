import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Listing | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import BlogListingPage from "@/components/frontendcomponent/pages/blog-listing";

export default function BlogListing() {
  return <BlogListingPage />;
}
