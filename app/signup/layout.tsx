// app/signin/layout.tsx
import React from "react";
import AuthLayout from "@/components/auth/authLayout.component";

const SignInLayout = ({ children }: { children: React.ReactNode }) => (
  <AuthLayout>{children}</AuthLayout>
);

export default SignInLayout;
