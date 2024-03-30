import Link from "next/link";
import Logo from "~/components/brand/Logo";
import TopNav from "./_components/TopNav";
import { Button } from "~/components/ui/button";
export default async function Home() {
  return (
    <div>
      <TopNav />
      <main className="text-text bg-background flex min-h-screen flex-col items-center justify-center">
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
            <Button asChild className="px-8">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              variant="secondary"
              className="bg-secondary/30 text-text/70 px-8"
            >
              Learn more
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
