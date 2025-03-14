import { Link, useLocation } from "react-router";
import Logo from "@/assets/horizon-logo.svg";
import { LogOut, Search } from "lucide-react";
import Avatar from "@/assets/jsmastery.png";
import {
  CardAdd,
  DollarCircle,
  Home2,
  MoneySend,
  ReceiptItem,
} from "iconsax-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="flex h-screen w-[280px] flex-col justify-between border-r border-[#EAECF0] p-6">
      <div className="">
        <Link to="/dashboard" className="mb-6 block">
          <img src={Logo} alt="" />
        </Link>
        <div className="relative mb-6">
          <input
            className="block w-full rounded-[8px] border border-[#D0D5DD] p-2 pl-10"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
          <Search
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-[#667085]"
          />
        </div>
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
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <img src={Avatar} className="h-10 w-10 rounded-full" alt="" />
          <div className="flex flex-col">
            <span className="block text-sm font-medium">Adrian Hajdin</span>
            <span className="text-xs">adrian@jmasterty.pro</span>
          </div>
          <span className="cursor-pointer">
            <LogOut size={20} />
          </span>
        </div>
      </div>
    </aside>
  );
}

const navMenu = [
  { name: "Home", to: "/dashboard", icon: <Home2 size="20" /> },
  {
    name: "My Banks",
    to: "/dashboard/my-banks",
    icon: <DollarCircle size="20" />,
  },
  {
    name: "Transaction History",
    to: "/dashboard/transactions",
    icon: <ReceiptItem size="20" />,
  },
  {
    name: "Payment Transfer",
    to: "/dashboard/payment-transfer",
    icon: <MoneySend size="20" />,
  },
  {
    name: "Connect Bank",
    to: "/dashboard/connect-banks",
    icon: <CardAdd size="20" />,
  },
];
