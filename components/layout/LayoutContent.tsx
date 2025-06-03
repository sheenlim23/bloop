"use client";
import Navbar from "@/components/layout/navbar/Navbar.component";
import Main from "@/components/layout/main/Main.component";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
}
