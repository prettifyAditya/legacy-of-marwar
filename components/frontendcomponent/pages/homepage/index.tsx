import HeroBanner from "../../organisms/HeroBanner";
import ProductListingSlider from "../../organisms/ProductListingSlider";
import "@/uploads/sass/home/home.css";
import Exclusive from "./Exclusive";
import CorporateGifting from "./CorporateGifting";
import FollowSocialMedia from "./FollowSocialMedia";
import DiscoverCategory from "./DiscoverCategory";

const discoverCollectionData = {
  classname: "discover_collection",
  heading: "Discover The Collection",
  mediaSrc: "/images/home/collection.mp4",
  linkHref: "/product-listing",
  tavNav: [
    {
      label: "Rings",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
        {
          linkHref: "/product-listing/4",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
      ],
    },
    {
      label: "Necklace",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/ring1.png",
          title: "Women flexible bangle bracelet",
          price: "INR 15000",
        },
      ],
    },
  ],
};

const specialOccasionsData = {
  classname: "special_listing",
  heading: "Special Occasions",
  mediaSrc: "/images/home/occasions.mp4",
  linkHref: "/product-listing",
  tavNav: [
    {
      label: "Diwali & Dhanteras",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/special1.png",
          title: " 100 g Casted Silver Bar",
          price: "INR 3,960.00",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/special1.png",
          title: "10 g Banyan Tree Silver Bar",
          price: "INR 2,960.00",
        },
        {
          linkHref: "/product-listing/4",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
      ],
    },
    {
      label: "Akshaya Tritiya",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/special1.png",
          title: " 100 g Casted Silver Bar",
          price: "INR 3,960.00",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/special1.png",
          title: "10 g Banyan Tree Silver Bar",
          price: "INR 2,960.00",
        },
      ],
    },
    {
      label: "Festive Offers",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/special1.png",
          title: " 100 g Casted Silver Bar",
          price: "INR 3,960.00",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/special1.png",
          title: "10 g Banyan Tree Silver Bar",
          price: "INR 2,960.00",
        },
        {
          linkHref: "/product-listing/4",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
      ],
    },
    {
      label: "Wedding & Anniversary",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/special1.png",
          title: " 100 g Casted Silver Bar",
          price: "INR 3,960.00",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/special1.png",
          title: "10 g Banyan Tree Silver Bar",
          price: "INR 2,960.00",
        },
        {
          linkHref: "/product-listing/4",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
      ],
    },
    {
      label: "Gifting",
      productItem: [
        {
          linkHref: "/product-listing/1",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
        {
          linkHref: "/product-listing/2",
          imgSrc: "/images/other/special1.png",
          title: " 100 g Casted Silver Bar",
          price: "INR 3,960.00",
        },
        {
          linkHref: "/product-listing/3",
          imgSrc: "/images/other/special1.png",
          title: "10 g Banyan Tree Silver Bar",
          price: "INR 2,960.00",
        },
        {
          linkHref: "/product-listing/4",
          imgSrc: "/images/other/special1.png",
          title: "50 g Vaishno Devi Silver Coin",
          price: "INR 4,960.00",
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <HeroBanner
        classname="home-hero-banner"
        subheading="Timeless Silver"
        heading="Modern Elegance"
        mediaSrc="/video/hero-banner.mp4"
        posterSrc="/video/hero-poster.jpg"
        linkHref="/product-listing"
      />
      <ProductListingSlider data={discoverCollectionData} />
      <DiscoverCategory />
      <Exclusive />
      <CorporateGifting />
      <ProductListingSlider data={specialOccasionsData} />
      <FollowSocialMedia />
    </main>
  );
}
