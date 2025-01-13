"use client";

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/logo01.png";

const NavMenu = () => {
  return (
    <NavigationMenu className="fixed w-full min-w-full max-h-16 bg-secondary flex justify-between">
      <Link to="/" className="p-4 text-white hover:text-white">
        <img
          src={Logo}
          alt="logo"
          width={"100%"}
          height={"100%"}
          style={{
            width: "6rem",
            height: "6rem",
            marginTop: "4rem",
          }}
        />
      </Link>

      <NavigationMenuList className="ml-auto">
        {/* First Menu */}
        <NavigationMenuItem className="text-sky-400">
          <Link
            to="/"
            className="px-8 py-4 font-bold"
            style={{ color: "white" }}
          >
            Home
          </Link>
        </NavigationMenuItem>

        {/* Second Menu item */}
        <NavigationMenuItem className="text-white hover:text-white">
          <Link to="/about" className="px-8 py-4" style={{ color: "white" }}>
            About
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
