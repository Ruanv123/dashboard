import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const BackButton = () => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-4 top-4 md:left-8 md:top-8"
      )}
    >
      <>
        <Icons.arrowLeft className="mr-2 h-4 w-4" />
        Back
      </>
    </Link>
  );
};
