import React, { FC } from "react";
import { NavbarListProps, INavList } from "@/types/nav/navbar.interface";

interface Props {
  items: NavbarListProps;
}

const NavbarList: FC<Props> = ({ items }) => {
  return (
    <div
      className="hidden w-full md:block md:w-auto"
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {items.map((item: INavList, index: number) => (
          <li key={index}>
            <a
              href={item.href}
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarList;
