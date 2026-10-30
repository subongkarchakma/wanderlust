import Link from "next/link";
import Image from "next/image";
import { UserRound } from "lucide-react";

import Logo from "../../public/images/Wanderlast.png";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

const actionLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <nav className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 lg:px-8">
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={
                  link.active
                    ? "font-semibold text-cyan-600"
                    : "transition-colors hover:text-cyan-600"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="mx-auto md:mx-0">
          <Image src={Logo} alt="Wanderlast" priority className="h-7 w-auto" />
        </Link>

        <div className="flex items-center justify-end gap-6 text-sm font-medium text-slate-700">
          <Link
            href="/profile"
            className="hidden items-center gap-1.5 transition-colors hover:text-cyan-600 sm:flex"
          >
            <UserRound className="size-4" aria-hidden />
            Profile
          </Link>
          {actionLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-cyan-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
