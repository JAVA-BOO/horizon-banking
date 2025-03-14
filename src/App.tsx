import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/dashboard/Home";
import MyBanks from "./pages/dashboard/MyBanks";
import Payments from "./pages/dashboard/Payments";
import TransactionHistory from "./pages/dashboard/TransactionHistory";
import ConnectBank from "./pages/dashboard/ConnectBank";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Homepage />} />

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="my-banks" element={<MyBanks />} />
            <Route path="payments" element={<Payments />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="connect-banks" element={<ConnectBank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
