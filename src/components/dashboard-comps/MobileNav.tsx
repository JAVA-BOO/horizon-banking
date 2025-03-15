import { Link } from "react-router";
import Logo from "@/assets/horizon-logo.svg";
import { HambergerMenu } from "iconsax-react";
import Avatar from "@/assets/jsmastery.png";
import MobileSideBar from "./MobileSideBar";
import { useState } from "react";
import { X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="relative z-[999] border-b bg-white py-2">
        <div className="container mx-auto flex justify-between px-4">
          <div className="flex gap-5">
            <span onClick={() => setOpen((prev) => !prev)}>
              {open ? (
                <X size="32" color="#4893FF" />
              ) : (
                <HambergerMenu size="32" color="#4893FF" />
              )}
            </span>
            <Link to={"/dashboard"}>
              <img src={Logo} alt="Horizon-Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <img src={Avatar} className="h-10 w-10 rounded-full" alt="" />
            <div className="hidden flex-col">
              <span className="block text-sm font-medium">Adrian Hajdin</span>
              <span className="text-xs">adrian@jmasterty.pro</span>
            </div>
          </div>
        </div>
      </header>

      <MobileSideBar open={open} setOpen={setOpen} />
    </>
  );
}
