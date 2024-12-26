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
import { auth } from "@/auth";


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
                            </Avatar>:""}
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
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default SheetComponent
