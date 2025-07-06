"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "./ui/logo";
import { SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; 

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <HiMenuAlt3 className="text-[32px] text-accent cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
        <div className="mt-20 mb-10 text-center text-2xl">
          <Logo />
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl capitalize hover:text-accent transition-all ${pathname === link.href && "text-accent border-b-2 border-accent"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav