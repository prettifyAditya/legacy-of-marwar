import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import BlogDetailsPage from "@/components/frontendcomponent/pages/blog-details";

export default function BlogDetails() {
  return <BlogDetailsPage />;
}
