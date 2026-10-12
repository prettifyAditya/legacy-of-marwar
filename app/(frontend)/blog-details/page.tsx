import type { Metadata } from "next";
import BlogDetailsPage from "@/components/frontendcomponent/pages/blog-details";
export const metadata: Metadata = {
  title: "Blog Details | SJ Group",
  description: "SJ Group website",
};

export default function BlogDetails() {
  return <BlogDetailsPage />;
}
