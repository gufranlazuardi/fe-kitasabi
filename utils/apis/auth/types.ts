import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Full name is required" }).max(50),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email"),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Minimum 8 character" }),
    occupation: z.string().min(1, { message: "Occupation is required" }),
  })

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
