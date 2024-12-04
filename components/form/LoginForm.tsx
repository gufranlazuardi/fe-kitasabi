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
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

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
            <form
                onSubmit={form.handleSubmit(onSubmitLogin)}
                className="flex flex-col w-full mx-auto gap-4 text-start"
                >
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
                <Button
                    type='submit'
                    className='hover:bg-[#1b609c] bg-sky-400 mt-4'
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ?  (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <p>Please wait</p>
                        </>
                    ) : (
                        <div className='flex cursor-pointer'>
                            <p className="font-medium tracking-wide text-white">Login</p>
                        </div>
                    )}
                </Button>
            </form>
        </Form>
    </div>
  )
}

export default LoginForm