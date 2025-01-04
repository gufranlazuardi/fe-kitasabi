"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CreateTransactionRequest,
  createTransatcionShema,
} from "@/utils/apis/transactions/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTransactionApi } from "@/utils/apis/transactions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface CreateTransactionProps {
  campaign_id: number | string;
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({
  campaign_id,
}) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof createTransatcionShema>>({
    resolver: zodResolver(createTransatcionShema),
    defaultValues: {
      campaign_id: campaign_id,
      amount: 0,
    },
  });

  // Consolidated API call handler
  async function handleApiCall(data: CreateTransactionRequest) {
    try {
      console.log("Submitting request:", data); // Debugging log
      await createTransactionApi(data);
      toast({
        title: "Success",
        description: "Transaction successfully created!",
        className: "bg-green-500",
      });
      router.push("/transactions");
    } catch (error) {
      console.error("API call error:", error);
      toast({
        title: "Failed",
        description: "Transaction failed",
        variant: "destructive",
      });
    }
  }

  // Form submission handler
  async function onSubmit(data: CreateTransactionRequest) {
    await handleApiCall(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Rp 1.000.000"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      field.onChange(
                        value === "" ? "" : Number(value)
                      );
                    }
                  }}
                />
              </FormControl>
              <FormDescription>Input your nominal</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => handleApiCall(form.getValues())}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTransaction;
