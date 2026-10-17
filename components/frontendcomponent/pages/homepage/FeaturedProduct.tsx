import Image from "next/image";
import Link from "next/link";

type FeaturedProductItem = {
  linkHref: string;
  imgSrc: string;
  title: string;
  sp: string;
};

export default function FeaturedProduct({
  data = [],
}: {
  data: FeaturedProductItem[];
}) {
  return (
    <section className="home-featured-product">
      <div className="grid">
        {data?.map(({ linkHref, imgSrc, title, sp }) => {
          return (
            <Link href={linkHref}>
              <figure className="featured-card">
                <Image src={imgSrc} alt={title} width={1200} height={1200} />
                <figcaption>
                  <h3>{title}</h3>
                  <p>{sp}</p>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
}