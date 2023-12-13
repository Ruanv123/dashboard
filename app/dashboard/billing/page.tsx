import { DashboardTitle } from "@/components/dashboard-title";
import { DashboardShell } from "@/components/shell";

export default function Page() {
  return (
    <DashboardShell>
      <DashboardTitle
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
    </DashboardShell>
  );
}
