import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import styles from "@/components/app-shell.module.css";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
