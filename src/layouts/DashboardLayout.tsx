import Sidebar from "@/components/dashboard-comps/Sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
