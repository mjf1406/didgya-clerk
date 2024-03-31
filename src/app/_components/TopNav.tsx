"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "~/components/brand/Logo";

import { ThemeToggle } from "~/components/ui/theme-toggle";
import { Button } from "~/components/ui/button";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";

export default function TopNav() {
  return (
    <div className="sticky top-0 m-auto flex w-full items-center justify-between border-b border-accent">
      <div className=" space-between  m-auto flex h-14 w-full max-w-4xl items-center justify-between px-4 md:px-6">
        <Link
          className="flex items-center justify-center gap-2 font-semibold"
          href="/"
        >
          <Logo fill="hsl(var(--primary))" size="30" />
          <span className="text-2xl">DidgYa</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#features" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
            <Button
              asChild
              variant="secondary"
              className="bg-secondary/30 text-text/70 hover:bg-secondary/40"
            >
              <SignOutButton />
            </Button>
          </SignedIn>
          <SignedOut>
            <Button asChild>
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
          </SignedOut>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
