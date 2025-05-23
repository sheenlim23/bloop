import React from "react";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

const AuthCard = ({ title, children }: AuthCardProps) => {
  return (
    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;