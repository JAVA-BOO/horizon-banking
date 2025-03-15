import { Link, useLocation } from "react-router";

import { cn } from "@/lib/utils";
import { navMenu } from "@/utils/dashboard";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function MobileSideBar({ open, setOpen }: Props) {
  const location = useLocation();
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-0 h-screen w-full bg-white px-4 pt-20 duration-300",
        open ? "left-0" : "-left-full",
      )}
    >
      <nav>
        {navMenu.map((link, index) => (
          <Link
            key={index}
            onClick={() => setOpen(false)}
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
