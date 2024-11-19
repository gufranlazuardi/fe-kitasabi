"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='flex justify-between items-center max-w-screen-xl mx-auto px-[2rem] py-[2rem]'>
      <Link href="/">
        <Image 
          src="/kitabisa.png"
          alt='kitabisa'
          width={100}
          height={100}
          className='w-[100px]'
        />
      </Link>
      
      <div className='flex gap-6 items-center'>
        {/* Display the appropriate icon based on the current theme */}
        {theme === 'dark' ? (
          <Sun size={20} onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <Moon size={20} onClick={toggleTheme} className="cursor-pointer" />
        )}
        
        <Link href="/auth/register">
          <Button variant={'outline'}>Register</Button>
        </Link>

        <Link href="/auth/login">
          <Button className='bg-sky-400'>Login</Button>
        </Link>
        
        <DropdownMenu>
          <Button>
            <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
          </Button>
            <DropdownMenuContent>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>Transactions</DropdownMenuItem>
                  <DropdownMenuItem>Dark mode</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>

      </div>
    </div>
  )
}

export default Navbar
