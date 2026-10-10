import CheckoutHeader from "../../organisms/CheckoutHeader";
import AddressPop from "./AddressPop";
import ShippingDetails from "./ShippingDetails";
import "@/uploads/sass/checkout/checkout.css";

export default function ShippingAddressPage() {
  return (
    <main>
      <CheckoutHeader />
      <ShippingDetails />
      <AddressPop />
    </main>
  );
}
