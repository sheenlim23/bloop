import React, { FC } from "react";
import Image from "next/image";

const NavbarLogo: FC = () => {
  return (
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <Image
        width={25}
        height={25}
        src="https://flowbite.com/docs/images/logo.svg"
        alt="logo"
        className="h-8"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </a>
  );
};

export default NavbarLogo;
