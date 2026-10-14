import DashboardNav from "../../organisms/DashboardNav";
import "@/uploads/sass/dashboard/dashboard.css";
import WishlistDetails from "./WishlistDetails";

export default function WishlistPage() {
  return (
    <main>
      <section>
        <div className="dashboard-secA sec-pad-all">
          <div className="container">
            <div className="flex main_wrapper">
              <DashboardNav />
              <WishlistDetails />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
