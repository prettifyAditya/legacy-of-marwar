import HeroBanner from "../../organisms/HeroBanner";
import ListingWrapper from "./ListingWrapper";
import "@/uploads/sass/product/product.css";

export default function ProductListingPage() {
  return (
    <main>
      <HeroBanner
        classname="product-listing-banner"
        heading="Earrings"
        desc="Elegant silver earrings crafted to add a subtle sparkle to every look."
        mediaSrc="/images/other/listing-banner.jpg"
      />
      <ListingWrapper />
    </main>
  );
}
