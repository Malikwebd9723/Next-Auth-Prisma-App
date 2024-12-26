import { Home, LogIn, LogOut, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from "@/auth"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import SheetComponent from './Sheet'
import { ModeToggle } from './ModeToggler'


const Navbar = async () => {
  const session = await auth();
  const user = session?.user;
  
  return (
    <nav className='container flex justify-between p-4 shadow-lg blur-10 item-center dark:shadow-gray-900'>
      <div className='flex items-center'>
        <h2 className='font-bold'>NEXT.JS APP</h2>
      </div>

      <div className='flex space-x-5 items-center'>
        <ModeToggle />

{/* home link */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/"}>
                <Home />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
{/* search button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/"}>
                <Users />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>About us</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
{/* login button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
                {user ? <SignOutButton />:<SignInButton/>}
            </TooltipTrigger>
            <TooltipContent>
              <p>{user ? "Logout" : "Login"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
{/* drawer sheet */}
        <SheetComponent />

      </div>

    </nav>
  )
}

export default Navbar


 
export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit"><LogIn/></button>
    </form>
  )
} 

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit"><LogOut/></button>
    </form>
  )
} 