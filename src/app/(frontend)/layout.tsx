import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  "use cache";

  return <main className="mx-auto flex w-[95%] max-w-screen-lg grow flex-col py-2">{children}</main>;
}
