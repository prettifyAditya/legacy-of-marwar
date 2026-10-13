import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Profile | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ProfilePage from "@/components/frontendcomponent/pages/profile";

export default function Profile() {
  return <ProfilePage />;
}
