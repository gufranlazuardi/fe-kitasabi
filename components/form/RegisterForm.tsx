import { useToast } from "@/hooks/use-toast";
import { registerAccount } from "@/utils/apis/auth/api";
import {
  registerSchema,
  RegisterSchema,
} from "@/utils/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/utils/store";

const RegisterForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      occupation: "",
    },
  });

  async function onSubmitRegister(data: RegisterSchema) {
    console.log("apaan nihhhhhhhhhh", data);
    try {
      const result = await registerAccount(data);
      setToken(result.data.token);
      setUser({
        id: result.data.id,
        name: result.data.name,
        email: result.data.email,
        occupation: result.data.occupation,
      });

      toast({ description: "Registration successful!" });
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitRegister)}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <div>
          <Input
            {...form.register("name")}
            placeholder="Name"
            disabled={form.formState.isSubmitting}
          />
        </div>
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
        <div>
          <Input
            {...form.register("occupation")}
            placeholder="Occupation"
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
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
