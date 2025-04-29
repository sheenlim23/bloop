import React from "react";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ href, children, className = "" }) => {
  return (
    <NextLink
      href={href}
      className={`text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 ${className}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
