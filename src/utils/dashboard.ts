import {
  CardAdd,
  DollarCircle,
  Home2,
  MoneySend,
  ReceiptItem,
} from "iconsax-react";

export const navMenu = [
  { name: "Home", to: "/dashboard", icon: Home2 },
  {
    name: "My Banks",
    to: "/dashboard/my-banks",
    icon: DollarCircle,
  },
  {
    name: "Transaction History",
    to: "/dashboard/transactions",
    icon: ReceiptItem,
  },
  {
    name: "Payment Transfer",
    to: "/dashboard/payment-transfer",
    icon: MoneySend,
  },
  {
    name: "Connect Bank",
    to: "/dashboard/connect-banks",
    icon: CardAdd,
  },
];
