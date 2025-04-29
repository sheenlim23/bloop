import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => (
  <section className="bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <Image
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="w-8 h-8 mr-2"
        />
        Flowbite
      </a>
      {children}
    </div>
  </section>
);

export default AuthLayout;
