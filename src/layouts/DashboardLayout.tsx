import MobileNav from "@/components/dashboard-comps/MobileNav";
import Sidebar from "@/components/dashboard-comps/Sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <section className="grid md:grid-cols-[280px_1fr]">
      <div>
        <MobileNav />
        <Sidebar />
      </div>

      <div className="px-4 py-6 md:px-8">
        <Outlet />
      </div>
    </section>
  );
}
