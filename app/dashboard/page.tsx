import { DashboardTitle } from "@/components/dashboard-title";
import { DashboardShell } from "@/components/shell";

function Page() {
  return (
    <DashboardShell>
      <DashboardTitle heading="Dashboard" text="teste" />
    </DashboardShell>
  );
}
export default Page;
