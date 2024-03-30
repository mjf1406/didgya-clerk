/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K64wDXOD0B6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <nav className="flex h-14 w-full items-center border-b border-gray-200 px-4 md:px-6 dark:border-gray-700">
      <Link className="flex items-center gap-2 font-semibold" href="#">
        <MountainIcon className="h-5 w-5" />
        <span>Acme Inc</span>
      </Link>
      <nav className="flex flex-1 justify-center">
        <Link
          className="ml-2 inline-block rounded-md px-1 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Home
        </Link>
        <Link
          className="ml-2 inline-block rounded-md px-1 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Features
        </Link>
        <Link
          className="ml-2 inline-block rounded-md px-1 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="ml-2 inline-block rounded-md px-1 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Resources
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Link
          className="shadow-cta-variant inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100/50 hover:text-gray-900"
          href="#"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
