import HeroBanner from "../../organisms/HeroBanner";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "@/uploads/sass/contact/contact.css";
import MapSection from "./MapSection";
export default function ContactUsPage() {
  return (
    <main>
      <HeroBanner
        classname="contact-banner"
        heading="Contact Us"
        desc="Every Beautiful Connection Starts with a Conversation"
        mediaSrc="/video/contact-banner.mp4"
        posterSrc="/video/contact-poster.jpg"
      />
      <ContactDetails />
      <ContactForm />
      <MapSection />
    </main>
  );
}
