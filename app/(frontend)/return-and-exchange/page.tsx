import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Return & Exchange | Legacy of Marwar",
  description: "Legacy of Marwar | Pure & Timeless",
};
import ReturnExchangePage from "@/components/frontendcomponent/pages/return-exchange";

export default function ReturnExchange() {
  return <ReturnExchangePage />;
}
