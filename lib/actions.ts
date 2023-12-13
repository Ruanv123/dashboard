"use server";

import { RegisterFormSchema } from "@/components/forms/register-form";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { LoginFormSchema } from "@/components/forms/login-form";

export const handleSubmitRegisterUserForm = async (
  data: RegisterFormSchema
) => {
  const userAlreadyExist = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (userAlreadyExist) {
    throw new Error("User already exist");
  }

  const hashedPass = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPass,
    },
  });

  return {
    status: 200,
    data: user,
  };
};

export const handleSubmitForm = async (data: LoginFormSchema) => {
  console.log(data);
  const signResult = await signIn("credentials", {
    email: data.email,
    password: data.password,
  });
  return signResult;
};

export const handleLogout = async () => {
  await signOut();
};
