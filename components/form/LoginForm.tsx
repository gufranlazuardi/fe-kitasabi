"use client"

import { loginSchema, LoginSchema } from '@/utils/apis/auth/types';
import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAccount } from '@/utils/apis/auth/api';

import { useToken } from '@/utils/contexts/token';
import { Form } from '../ui/form';
import { CustomFormField } from '../CustomForm';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
    const {toast} = useToast()
    const {changeToken} = useToken()


    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email:"",
            password:""
        }
    })

    async function onSubmitLogin(data: LoginSchema) {
        try {
            const result = await loginAccount(data)
            toast({description:result.message})
            changeToken(result.data.token)
        } catch (error: any) {
            toast({
                title:"Oops, something wrong!",
                description: error.toString(),
                variant:"destructive"
            })
        }
    }


  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitLogin)}>
                <CustomFormField control={form.control} name="email" label="Email">
                    {(field) => (
                        <Input
                            {...field}
                            placeholder="johndoe@mail.com"
                            type="email"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                        />
                    )}
                </CustomFormField>
                <CustomFormField control={form.control} name="password" label="Password">
                    {(field) => (
                        <Input
                            {...field}
                            placeholder="johndoe123"
                            type="password"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                        />
                    )}
                </CustomFormField>
            </form>
        </Form>
    </div>
  )
}

export default LoginForm