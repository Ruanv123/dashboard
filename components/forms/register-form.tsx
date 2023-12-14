"use client";

import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { handleSubmitRegisterUserForm } from "@/lib/actions";
import { userFormSchema } from "@/lib/validations/user";
import { useState } from "react";
import { useRouter } from "next/navigation";

export type RegisterFormSchema = z.infer<typeof userFormSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { register, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onFormSubmit = async (data: RegisterFormSchema) => {
    setLoading(true);
    const result = await handleSubmitRegisterUserForm(data);

    if (result.status === 200) {
      setLoading(false);
      router.push("/login");
      toast.success("Successfully register user!");
      return;
    }
    setLoading(false);
    return toast.error("An error occurred when trying to create user!");
  };
  return (
    <form onSubmit={handleSubmit((data) => onFormSubmit(data))}>
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your informations below to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name here"
              {...register("name")}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email here"
              {...register("email")}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password Here"
              {...register("password")}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password2">Confirm Password</Label>
            <Input
              id="password2"
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full">
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
