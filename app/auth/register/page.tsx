"use client"

import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import RegisterForm from '@/components/form/RegisterForm'

const Register = () => {
  return (
    <div className='flex max-w-screen-xl justify-center mx-auto'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Please input your email and password</CardDescription>
      </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/auth/login">
            <p className='text-sm hover:underline'>Already have an account?</p>
          </Link>
        </CardFooter>
      </Card>
  </div>
  )
}

export default Register