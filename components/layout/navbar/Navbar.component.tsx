import React, { FC } from "react";
import NavbarLogo from "./NavbarLogo.component";
import NavbarMobileButton from "./NavbarMobileButton.component";
import NavbarList from "./NavbarList.component";
import { NavList } from "@/constants/navItems.constant";

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <NavbarLogo />
        <NavbarMobileButton />
        <NavbarList items={NavList} />
      </div>
    </nav>
  );
};

export default Navbar;
