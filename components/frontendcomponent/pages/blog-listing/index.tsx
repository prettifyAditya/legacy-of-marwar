import HeroBanner from "../../organisms/HeroBanner";
import BlogItems from "./BlogItems";
import "@/uploads/sass/blogs/blogs.css";

export default function BlogListingPage() {
  return (
    <main>
      <HeroBanner
        classname="blog_listing"
        heading="Blogs"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, tenetur!"
        mediaSrc="/video/gifting-banner.mp4"
        posterSrc="/video/gifting-poster.jpg"
      />
      <BlogItems />
    </main>
  );
}
