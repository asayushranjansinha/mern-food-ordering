import { LogIn, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "./UserMenu";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <header className="sticky inset-x-0 top-0 z-50 opacity-90 backdrop-blur-md py-3 bg-gradient-to-b from-[#fef8ea] to-[#fef8eac4]">
      <div className="container mx-auto flex justify-between items-center gap-6">
        <Link className="flex items-center" to={"/"}>
          <span className="font-semibold text-2xl tracking-tighter">
            <span className="text-pink-500">Dil Se</span>
            <span className="text-yellow-500"> Daawat</span>
          </span>
          <img
            src="./src/assets/bowl.svg"
            alt="Bowl Icon"
            className="h-8 w-8 ml-1"
          />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Main Navigation / Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between gap-4">
          <Link className="main-navlink" to="#hero">
            Home
          </Link>
          <Link className="main-navlink" to="#menu">
            Menu
          </Link>
          <Link className="main-navlink" to="#how-it-works">
            How it works
          </Link>
          <Link className="main-navlink" to="#about">
            About
          </Link>
          <Link className="main-navlink" to="#contact-us">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button variant={"ghost"} size={"icon"}>
            <Search />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <ShoppingCart />
          </Button>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button
              variant={"default"}
              size={"sm"}
              className="gap-1 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm font-medium text-black"
              onClick={async () => loginWithRedirect()}
            >
              <LogIn size={18} />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
