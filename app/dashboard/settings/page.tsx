import { DashboardTitle } from "@/components/dashboard-title";
import { DashboardShell } from "@/components/shell";

export default function Page() {
  return (
    <DashboardShell>
      <DashboardTitle
        heading="Settings"
        text="Manage account and website settings."
      />
    </DashboardShell>
  );
}
