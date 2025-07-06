import Link from "next/link";
import { Button } from "@/components/ui/button";

// components
import Nav from "./Nav";
import Logo from "./ui/logo";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-whit">
      <div className="container flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header