import Sidebar from "@/components/dashboard-comps/Sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <section className="grid grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="px-4 py-6 md:px-8">
        <Outlet />
      </div>
    </section>
  );
}
