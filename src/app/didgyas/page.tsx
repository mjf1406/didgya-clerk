import TopNav from "~/app/_components/TopNav";
export default async function Home() {
  return (
    <div>
      <TopNav />
      <main className="text-text bg-background flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              My DidgYas
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
