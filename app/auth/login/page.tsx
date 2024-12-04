import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import LoginForm from '@/components/form/LoginForm';

const Login = () => {
  return (
    <div className='flex max-w-screen-xl justify-center mx-auto'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please input your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Replace the static form with LoginForm */}
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* Optional: You could move the "Login" button here if needed */}
          <Link href="/auth/register">
            <p className='text-sm hover:underline'>You don't have an account?</p>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
