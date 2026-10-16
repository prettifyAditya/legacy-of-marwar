import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section>
      <div className="director_message sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              <Image
                src="/images/about/director-img.jpg"
                width={372}
                height={364}
                alt="director-img"
              />
            </figure>
            <figcaption>
              <h3>Director Message</h3>
              <div className="desc">
                <p>
                  Our journey in silver jewellery is driven by a passion for
                  timeless designs, exceptional craftsmanship, and the desire to
                  create pieces that become a part of your most cherished
                  moments. Every collection reflects our commitment to quality,
                  creativity, and the beauty of thoughtful design.
                </p>
              </div>
              <div className="designation">
                <h6>Aarav Sharma</h6>
                <p>Director</p>
                <Image
                  className="director-sign"
                  src="/images/about/director-sign.svg"
                  width={135}
                  height={25}
                  alt="director-sign"
                />
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
