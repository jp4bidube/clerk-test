"use client";

import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import { Crisp } from "crisp-sdk-web";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserProfile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { redirectToUserProfile } = useClerk();

  function handleSignOut() {
    signOut();
    Crisp.chat.hide();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.imageUrl} alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4" align="end" forceMount>
        <div className="flex gap-2 items-center pl-2 py-1">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.imageUrl} alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user?.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex gap-4"
            onClick={redirectToUserProfile}
          >
            <Settings className="text-muted-foreground" size={16} />
            <p className="text-xs leading-none text-muted-foreground">
              Gerenciar conta
            </p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-4" onClick={handleSignOut}>
          <LogOut className="text-muted-foreground" size={16} />
          <p className="text-xs leading-none text-muted-foreground">Sair</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
