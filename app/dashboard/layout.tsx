import { dashboardConfg } from "@/config/dashboard";
import DashboardNav from "./components/Nav";
import LayoutHeader from "./components/header";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import UserDropdown from "@/components/user-dropdown";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }
  return (
    <div className="flex flex-col space-y-6 min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <LayoutHeader items={dashboardConfg.mainNav} />
          <UserDropdown />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfg.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
