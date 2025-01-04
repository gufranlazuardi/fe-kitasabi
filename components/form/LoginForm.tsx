"use client";

import React, { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/utils/store";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { loginSchema, LoginSchema } from "@/utils/apis/auth/types";
import { loginAccount } from "@/utils/apis/auth/api";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await loginAccount(data);
      setToken(result.data.token);
      setUser({
        id: result.data.id,
        name: result.data.name,
        email: result.data.email,
        occupation: result.data.occupation,
      });
      toast({
        title: "Login successful!",
        description: "You have successfully login",
        variant: "default",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <div>
          <Input
            {...form.register("email")}
            placeholder="Email"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <div>
          <Input
            {...form.register("password")}
            type="password"
            placeholder="Password"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="hover:bg-[#1b609c] bg-sky-400"
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
