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


const Login = () => {
  return (
    <div className='flex max-w-screen-xl justify-center mx-auto'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
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
              </div>
            </form>
          </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Login</Button>
                <Link href="/auth/register">
                  <p className='text-sm'>You dont have an account?</p>
                </Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Login