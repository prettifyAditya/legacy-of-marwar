import Image from "next/image";

export default function OurStory() {
  return (
    <section>
      <div className="our-story sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              <div className="image-wrapper">
                <Image
                  src="/images/about/story-bg.png"
                  width={480}
                  height={370}
                  alt="our-story"
                />
                <video
                  src="/images/about/our-story.mp4"
                  poster="/images/about/our-story-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </figure>
            <figcaption>
              <div className="heading">
                <p>Our Story</p>
                <h3>A Journey Crafted in Silver</h3>
              </div>
              <div className="desc">
                <p>
                  Our journey began with a simple belief jewellery is more than
                  an accessory it is a reflection of who you are. Inspired by
                  the timeless beauty of silver and the art of fine
                  craftsmanship, we create jewellery that celebrates
                  individuality, elegance, and meaningful moments.
                </p>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
