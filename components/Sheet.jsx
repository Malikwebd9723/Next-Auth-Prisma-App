import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";


const SheetComponent = async () => {
    const session = await auth();
    const user = session?.user;

    return (
        <Sheet>
            <SheetTrigger>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            {user ? <Avatar className="cursor-pointer">
                                <AvatarImage src={user.image} />
                            </Avatar> : ""}
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>NEXT.JS WITH SHADCN AND AUTH.JS</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                <SignOutButton />
                </SheetHeader>
            </SheetContent>

        </Sheet>

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
            <button type="submit"><LogOut /></button>
        </form>
    )
}


export default SheetComponent
