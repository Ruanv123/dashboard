import { DashboardConfig } from "@/types";

export const dashboardConfg: DashboardConfig = {
  mainNav: [
    {
      title: "Teste",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Users",
      href: "/dashboard/users",
      icon: "users",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};
