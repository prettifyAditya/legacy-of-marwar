import DashboardNav from "../../organisms/DashboardNav";
import "@/uploads/sass/dashboard/dashboard.css";
import OrderList from "./OrderList";

export default function OrderPage() {
  return (
    <main>
      <section>
        <div className="dashboard-secA sec-pad-all">
          <div className="container">
            <div className="flex main_wrapper">
              <DashboardNav />
              <OrderList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
