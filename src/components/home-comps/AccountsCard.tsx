import React from "react";
import PieChart from "@/assets/Pie-chart.png";
export default function AccountsCard() {
  return (
    <>
      <div className="border-body container flex w-full justify-between rounded-2xl border p-6">
        <div className="flex items-center gap-6">
          <img src={PieChart} alt="" />
          <div>
            <p className="text-[20px] font-semibold">2 Bank Accounts</p>
            <p className="text-body mt-7">Total Current Balance</p>
            <p className="mt-1 text-[30px] font-semibold">$2,698.12</p>
          </div>
        </div>
        <span className="">+ Add Bank</span>
      </div>
    </>
  );
}
