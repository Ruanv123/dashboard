"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, idx) => {
        const Icon = Icons[item.icon || "arrowLeft"];
        return (
          item.href && (
            <Link key={idx} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "bg-transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default DashboardNav;
