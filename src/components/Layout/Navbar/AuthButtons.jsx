"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AuthButtons = () => {
  const { status, data } = useSession();

  if (status === "loading") {
    return (
      <>
        <Skeleton className="h-6 w-25" />
        <Skeleton className="h-6 w-25" />
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Link href="/auth/login">
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="btn-primary">Get Started</Button>
        </Link>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="rounded-lg">
          <AvatarImage
            src={data.user?.image || "/assets/avatar.jpeg"}
            alt={data.user.name}
          />
          <AvatarFallback>
            {String(data.user?.name?.[0]).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-neutral-300 dark:border-neutral-700 max-md:hidden"
        align="end"
      >
        <DropdownMenuLabel className="font-semibold">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <Link href="/my-booking">
            <DropdownMenuItem>My Booking</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthButtons;
