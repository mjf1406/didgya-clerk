"use client";

import Link from "next/link";
import Logo from "~/components/brand/Logo";
import TopNav from "./_components/TopNav";
import { Button } from "~/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
export default function Home() {
  return (
    <div>
      <TopNav />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-text">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex items-center gap-3">
            <Logo fill="hsl(var(--primary))" size="60" />
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              <span className="text-primary">Didg</span>
              <span className="text-accent">Ya</span>
            </h1>
          </div>
          <div className="max-w-lg text-center text-2xl tracking-tight">
            Did you do it? Did you experience it?
            <span className="mx-1.5 font-bold">
              <span className="text-primary">Didg</span>
              <span className="text-accent">Ya</span>
            </span>
            is an app designed to simplify the way you track various things that
            happen in your life.
          </div>
          <div className="flex items-center justify-center gap-2">
            <SignedIn>
              <Button asChild className="px-8">
                <Link href={"/didgyas"}>Get started</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <Button variant="default" asChild className="px-8">
                <Link href="/auth/sign-in">Sign in to get started</Link>
              </Button>
            </SignedOut>

            <Button
              variant="secondary"
              className="bg-secondary/30 px-8 text-text/70 hover:bg-secondary/40"
              asChild
            >
              <Link href={"#features"}>Learn more</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
