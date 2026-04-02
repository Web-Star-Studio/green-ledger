"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/app-shell.module.css";
import { primaryNavigation, utilityNavigation } from "@/lib/mock-data";
import type { NavItem } from "@/lib/contracts";

type SidebarSectionProps = {
  items: NavItem[];
  title: string;
};

function isActive(pathname: string, item: NavItem): boolean {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  if (item.href === "/reports" && pathname.startsWith("/reports/new")) {
    return false;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function SidebarSection({ items, title }: SidebarSectionProps) {
  const pathname = usePathname();

  return (
    <section className={styles.sidebarSection}>
      <p className={styles.sidebarSectionTitle}>{title}</p>
      <nav className={styles.sidebarNav} aria-label={title}>
        {items.map((item) => {
          const active = isActive(pathname, item);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
            >
              <span className={styles.navLabelRow}>
                <span className={styles.navLabel}>{item.label}</span>
                <span className={styles.navMeta}>{active ? "Open" : "Route"}</span>
              </span>
              <span className={styles.navDescription}>{item.description}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarPanel}>
        <div className={styles.brandBlock}>
          <span className={styles.brandKicker}>GreenLedger</span>
          <div>
            <h1 className={styles.brandTitle}>Reports workspace</h1>
            <p className={styles.brandCopy}>
              Elevated canvas shell for the MVP. Navigation stays quiet so the
              reporting workflow carries the visual weight.
            </p>
          </div>
          <span className={styles.workspaceChip}>Worton pilot workspace</span>
        </div>

        <SidebarSection title="Workspace" items={primaryNavigation} />
        <SidebarSection title="Utility" items={utilityNavigation} />

        <div className={styles.railNote}>
          <p className={styles.noteTitle}>Operating assumptions</p>
          <p className={styles.noteCopy}>
            Product endpoints are still mocked in the frontend. Only system health
            is live against the API.
          </p>
          <ul className={styles.noteList}>
            <li>Evidence flows remain navigable and typed.</li>
            <li>Generation and review are represented with pilot data.</li>
            <li>Exports stay locked until approval in the mock workflow.</li>
          </ul>
        </div>
      </div>

      <div className={styles.sidebarFooter}>
        GreenLedger MVP interface foundation. Neutral shell, elevated content, and
        restrained green accents.
      </div>
    </aside>
  );
}
