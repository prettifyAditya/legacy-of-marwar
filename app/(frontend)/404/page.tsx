import type { Metadata } from "next";
import ThankyouPage from "@/components/frontendcomponent/organisms/ThankyouPage";
export const metadata: Metadata = {
  title: "404 | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};

export default function ErrorPage() {
  return <ThankyouPage title="404" desc="Oops, Something went wrong." />;
}
