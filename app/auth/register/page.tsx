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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const Register = () => {
  return (
    <div className='flex max-w-screen-xl justify-center mx-auto'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Please input your email and password</CardDescription>
      </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="johndoe@gmail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="johndoe123" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="">Name</Label>
                <Input id="" placeholder="John Doe" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="">Occupation</Label>
                <Input id="" placeholder="Employee" />
              </div>
            </div>
          </form>
        </CardContent>
          <CardFooter className="flex justify-between">
            <Button className='bg-sky-400'>Register</Button>
            <Link href="/auth/login">
                  <p className='text-sm hover:underline'>Already have an account?</p>
            </Link>
          </CardFooter>
      </Card>
  </div>
  )
}

export default Register