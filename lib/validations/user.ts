import { z } from "zod";

export const userFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required!" }),
    email: z.string().email({ message: "Email is invalid!" }),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });
