import { useToast } from '@/hooks/use-toast'
import { registerAccount } from '@/utils/apis/auth/api'
import { registerSchema, RegisterSchema } from '@/utils/apis/auth/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '../ui/form'
import { Input } from '../ui/input'
import { CustomFormField } from '../CustomForm'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

const RegisterForm = () => {
    const {toast} = useToast()

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            occupation: ""
        }
    })

    async function onSubmitRegister(data: RegisterSchema) {
        try {
            const result = await registerAccount(data)

            toast({ description: result.message})
        } catch (error: any) {
            toast({
                title: "Oops, something went wrong!",
                description: error.toString(),
                variant: "destructive",
            })
        }
    }

  return (
    <div>
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmitRegister)}
                className="flex flex-col w-full mx-auto gap-4 text-start"
                >
                <CustomFormField control={form.control} name="name" label="Name">
                    {(field) => (
                        <Input
                            {...field}
                            placeholder="John Doe"
                            type="name"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                        />
                    )}
                </CustomFormField>
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
                
                <CustomFormField control={form.control} name="occupation" label="Occupation">
                    {(field) => (
                        <Input
                            {...field}
                            placeholder="Employee"
                            type="occupation"
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
                            <p className="font-medium tracking-wide text-white">Register</p>
                        </div>
                    )}
                </Button>
            </form>
        </Form>
    </div>
  )
}

export default RegisterForm