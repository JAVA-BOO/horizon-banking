import { Outlet, useLocation } from "react-router";
import Tablet from "@/assets/dashboard.png";
import { cn } from "@/lib/utils";

export default function AuthLayout() {
  const location = useLocation();
  // console.log(location.pathname, location);
  return (
    <section className="grid overflow-x-hidden lg:h-screen lg:grid-cols-2">
      <div
        className={cn(
          "noScrollBar flex h-full justify-center overflow-y-auto p-6 lg:p-12",
          location.pathname === "/register" && "item-start",
          location.pathname === "/login" && "items-center",
        )}
      >
        <div>
          <Outlet />
        </div>
      </div>
      <div className="bg-bg relative hidden p-6 lg:block lg:h-full">
        <img
          className="border-heading absolute top-1/2 -right-[100px] -translate-y-1/2 rounded-2xl border-4"
          src={Tablet}
          alt="dashboardUI"
        />
      </div>
    </section>
  );
}
