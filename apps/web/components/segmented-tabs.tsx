"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/app-shell.module.css";

type SegmentedTabItem = {
  href: string;
  label: string;
  progress?: number;
};

type SegmentedTabsProps = {
  items: SegmentedTabItem[];
};

export function SegmentedTabs({ items }: SegmentedTabsProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.segmentedTabs} aria-label="Report sections">
      {items.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.segmentedTab} ${active ? styles.segmentedTabActive : ""}`}
          >
            <span>{item.label}</span>
            {typeof item.progress === "number" ? (
              <span className={styles.segmentedProgress}>{item.progress}%</span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
