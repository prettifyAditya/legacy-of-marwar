import HeroBanner from "../../organisms/HeroBanner";
import BeautyDetail from "./BeautyDetail";
import DirectorMessage from "./DirectorMessage";
import OurStory from "./OurStory";
import SilverStyle from "./SilverStyle";
import "@/uploads/sass/about/about.css";

export default function AboutUsPage() {
  return (
    <main>
      <HeroBanner
        classname="about-hero-banner"
        isLogo={true}
        desc="Crafting timeless elegance, one silver story at a time."
        mediaSrc="/video/about-banner.mp4"
        posterSrc="/video/about-poster.jpg"
      />
      <OurStory />
      <BeautyDetail />
      <DirectorMessage />
      <SilverStyle />
    </main>
  );
}
