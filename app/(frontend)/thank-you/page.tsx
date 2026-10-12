import type { Metadata } from "next";
import ThankyouPage from "@/components/frontendcomponent/organisms/ThankyouPage";
export const metadata: Metadata = {
  title: "Thank You | SJ Group",
  description: "SJ Group website",
};

export default function ThankYou() {
  return (
    <ThankyouPage
      title="Thank You"
      desc="Thank you for your interest in Legacy Of Marwar. We will get back
                to you as soon as possible."
    />
  );
}
