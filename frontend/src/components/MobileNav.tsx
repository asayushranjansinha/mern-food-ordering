import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet";
const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="h-full flex flex-col gap-3">
        <SheetTitle>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <span className="text-sm">Welcome to Dil Se Daawat</span>
          )}
        </SheetTitle>
        <Separator />
        <div className="flex-1 flex flex-col">
          <div className="flex-1"></div>
          {isAuthenticated ? (
            <Button variant={"default"} onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button
              variant={"default"}
              onClick={() => loginWithRedirect()}
              className="bg-yellow-400 hover:bg-yellow-500"
            >
              Login
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
