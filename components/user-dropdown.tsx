import { handleLogout } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import ThemeSelect from "./theme-select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserDropdown = async () => {
  const userData = await getCurrentUser();

  const fName = userData?.name?.split(" ")[0];
  const LName = userData?.name?.split(" ")[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${fName}+${LName}&background=random`}
          />
          <AvatarFallback>{userData?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{userData?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href="">
          <DropdownMenuItem>Help Center</DropdownMenuItem>
        </Link>
        <Link href="">
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <div className="w-full flex justify-between items-center">
            Theme
            <ThemeSelect />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action={handleLogout} className="w-full">
            <button onClick={handleLogout} className="w-full items-start flex">
              Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
