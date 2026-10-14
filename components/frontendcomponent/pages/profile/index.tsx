import DashboardNav from "../../organisms/DashboardNav";
import AddressPop from "../shipping-address/AddressPop";
import ProfileForm from "./ProfileForm";
import "@/uploads/sass/dashboard/dashboard.css";

export default function ProfilePage() {
  return (
    <main>
      <section>
        <div className="dashboard-secA sec-pad-all">
          <div className="container">
            <div className="flex main_wrapper">
              <DashboardNav />
              <ProfileForm />
            </div>
          </div>
        </div>
      </section>
      <AddressPop />
    </main>
  );
}
