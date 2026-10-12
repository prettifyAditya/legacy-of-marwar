import BlogCol from "../../molecules/BlogCol";

const blogsData = [
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/gallery1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: "25 August 2026",
  },
];

export default function BlogItems() {
  return (
    <div className="blogs_list_sec sec-pad-all">
      <div className="container">
        <div className="main_wrapper">
          {blogsData.map((item, index) => (
            <BlogCol data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
