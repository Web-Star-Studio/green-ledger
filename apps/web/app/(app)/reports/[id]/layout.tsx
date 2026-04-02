import type { ReactNode } from "react";
import Link from "next/link";
import { Canvas, CanvasHeader } from "@/components/canvas";
import { StatusBadge } from "@/components/info-card";
import { SegmentedTabs } from "@/components/segmented-tabs";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

export default async function ReportDetailLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { report, sections } = await resolveReportPageData(params);

  return (
    <Canvas>
      <CanvasHeader
        eyebrow={report.organization}
        title={report.title}
        description={`${report.period} · ${report.framework} · Owned by ${report.owner}. This route set establishes the MVP workflow while product APIs are still mocked in the frontend.`}
        actions={
          <>
            <Link href="/reports" className={styles.ghostButton}>
              All reports
            </Link>
            <Link href="/reports/new" className={styles.secondaryButton}>
              New cycle
            </Link>
            <button type="button" className={styles.primaryButton}>
              Share review
            </button>
          </>
        }
      >
        <div className={styles.buttonRow}>
          <StatusBadge tone="neutral">{report.status.replace("-", " ")}</StatusBadge>
          <StatusBadge tone="success">{report.progress}% complete</StatusBadge>
          <StatusBadge tone={report.alerts > 0 ? "warning" : "neutral"}>
            {report.alerts} open alerts
          </StatusBadge>
        </div>
        <SegmentedTabs
          items={sections.map((section) => ({
            href: section.href,
            label: section.label,
            progress: section.completion,
          }))}
        />
      </CanvasHeader>

      <div className={styles.canvasBody}>{children}</div>
    </Canvas>
  );
}
