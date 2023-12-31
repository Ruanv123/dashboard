"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { handleSubmitForm } from "@/lib/actions";
import { userAuthSchema } from "@/lib/validations/auth";
import { useState } from "react";
import Link from "next/link";

export type LoginFormSchema = z.infer<typeof userAuthSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (data: LoginFormSchema) => {
    setLoading(true);
    await handleSubmitForm(data);
    setLoading(false);
    return toast.success("Login is Sucessfull!");
  };

  return (
    <form
      onSubmit={form.handleSubmit((data) => onFormSubmit(data))}
      className="flex items-center flex-col"
    >
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Enter your credential to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email here"
              {...form.register("email")}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password Here"
              {...form.register("password")}
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full">
            {!loading ? "Sign In" : "Loading..."}
          </Button>
        </CardFooter>
      </Card>
      <Link href="/register" className="underline text-center mt-4">
        Don{"'"}t have an account? <span className="font-medium">Sign Up</span>
      </Link>
    </form>
  );
}
