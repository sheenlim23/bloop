// app/signin/layout.tsx
import React from "react";
import AuthLayout from "@/components/auth/authLayout.component";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <AuthLayout>{children}</AuthLayout>
);

export default Layout;
