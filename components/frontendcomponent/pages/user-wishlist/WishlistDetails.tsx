import ListingCard from "../../molecules/ListingCard";

const productItem = [
  {
    linkHref: "/product-listing/1",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/2",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/3",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/4",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/5",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
  {
    linkHref: "/product-listing/6",
    imgSrc: "/images/other/ring1.png",
    title: "Women flexible bangle bracelet",
    sp: "INR 15000",
    mrp: "INR 15000",
  },
];

export default function WishlistDetails() {
  return (
    <div className="aside-right">
      <div className="aside-right-wrap wish-grid">
        {productItem.map((item) => (
          <ListingCard key={item.linkHref} data={item} />
        ))}
      </div>
    </div>
  );
}
