import Image from "next/image";

export default function BlogDetailBanner() {
  return (
    <div className="blog-detail-banner banner">
      <div className="bg">
        <Image
          src="/images/other/listing-banner.jpg"
          width={1280}
          height={700}
          alt="blog_detail_banner"
        ></Image>
        <div className="banner-wrapper">
          <div className="container">
            <div className="content">
              <p>25 August 2026</p>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
