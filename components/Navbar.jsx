import { Home, LogIn, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import SheetComponent from './Sheet'
import { ModeToggle } from './ModeToggler'


const Navbar = () => {
  return (
    <nav className='container flex justify-between p-4 shadow-lg blur-10 item-center'>
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
              <Search href={"/"}>
                <Search />
              </Search>
            </TooltipTrigger>
            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
{/* login button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <LogIn />
            </TooltipTrigger>
            <TooltipContent>
              <p>Login</p>
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
