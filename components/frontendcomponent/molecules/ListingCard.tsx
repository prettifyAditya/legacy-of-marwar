import Image from "next/image";
import Link from "next/link";
import type { ProductItem } from "@/app/types/product";

interface ListingCardProps {
  data: ProductItem;
}

export default function ListingCard({ data }: ListingCardProps) {
  return (
    <Link className="listing_card" href={data.linkHref}>
      <figure>
        <Image
          src={data.imgSrc}
          width={210}
          height={210}
          alt={`${data.title}'s_img`}
        ></Image>
      </figure>
      <figcaption>
        <h6>{data.title}</h6>
        <p>{data.price}</p>
      </figcaption>
    </Link>
  );
}
