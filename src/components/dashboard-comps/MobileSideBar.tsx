import { Link, useLocation } from "react-router";

import { cn } from "@/lib/utils";
import { navMenu } from "@/utils/dashboard";

export default function MobileSideBar() {
  const location = useLocation();
  return (
    <div>
      <nav>
        {navMenu.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={cn(
              "text-body flex w-full gap-3 rounded-[6px] bg-gradient-to-r p-4 font-semibold",
              location.pathname === link.to &&
                "from-main to-secondary text-white",
            )}
          >
            <span
              className={cn(
                "*:stroke-body",
                location.pathname === link.to && "*:stroke-white",
              )}
            >
              <link.icon size={20} />
            </span>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
