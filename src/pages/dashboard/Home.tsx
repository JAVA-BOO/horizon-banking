import AccountsCard from "@/components/home-comps/AccountsCard";
import React from "react";

export default function Home() {
  return (
    <section>
      <div>
        <div>
          <h1>Welcome, Adrian</h1>
          <p>Access & manage your account and transactions efficiently.</p>

          <div>
            <AccountsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
