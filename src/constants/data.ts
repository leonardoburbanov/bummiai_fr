import { NavItem, SidebarNavItem } from "@/types";

export const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/copilots/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Data Copilots",
      href: "/copilots/data_copilots",
      icon: "bot",
      label: "bot",
    },
    {
      title: "Review Data",
      href: "/copilots/review_data",
      icon: "barchart",
      label: "barchart",
    },
    {
      title: "Training [comming soon!]",
      href: "/copilots/#",
      icon: "kanban",
      label: "kanban",
    },
    {
      title: "Company profile",
      href: "/copilots/#",
      icon: "company",
      label: "company",
    },
    {
      title: "Logout",
      href: "/logout",
      icon: "logout",
      label: "logout",
    },
  ];