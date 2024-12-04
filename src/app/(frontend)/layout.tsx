import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="mx-auto flex w-[95%] max-w-screen-lg grow flex-col py-2">{children}</main>;
}
