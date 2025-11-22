import { Navbar } from "@/components/layout/Navbar/Navbar";
import { ReactNode } from "react";
import GlobalModals from "@/components/GlobalModals";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <GlobalModals />
    </>
  );
}
