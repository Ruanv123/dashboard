import { DashboardTitle } from "@/components/dashboard-title";
import { Icons } from "@/components/icons";
import { DashboardShell } from "@/components/shell";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  const users = await prisma?.user.findMany();

  return (
    <DashboardShell>
      <DashboardTitle
        heading="Users"
        text="Manage user accounts and permissions."
      />
      <Table className="border">
        <TableCaption>A list of all users to system.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Create</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleString("pt-br")}
              </TableCell>
              <TableCell>
                {new Date(user.updatedAt).toLocaleString("pt-br")}
              </TableCell>
              <TableCell>
                <Icons.ellipsis />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardShell>
  );
}
