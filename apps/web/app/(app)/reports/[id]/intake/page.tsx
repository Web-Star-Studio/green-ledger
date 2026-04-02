import { InfoCard, MetricRow, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

export default async function ReportIntakePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { report, sections } = await resolveReportPageData(params);
  const intake = sections.find((section) => section.slug === "intake");

  return (
    <section className={styles.twoColumn}>
      <InfoCard
        eyebrow="Structured intake"
        title="Entity and perimeter configuration"
        description="The intake screen is designed as a dense but calm working surface with explicit completion states."
        action={
          intake ? (
            <StatusBadge tone={intake.status === "complete" ? "success" : "warning"}>
              {intake.status.replace("-", " ")}
            </StatusBadge>
          ) : null
        }
      >
        <div className={styles.detailList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Entity profile</span>
            <span className={styles.detailValue}>{report.organization}</span>
            <span className={styles.detailHint}>
              Headquarters, legal perimeter, and operating footprint already seeded.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Reporting period</span>
            <span className={styles.detailValue}>{report.period}</span>
            <span className={styles.detailHint}>
              Period-specific assumptions and prior-year comparisons live here.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Governance setup</span>
            <span className={styles.detailValue}>Executive sponsor pending confirmation</span>
            <span className={styles.detailHint}>
              This is the main blocker before framework sign-off begins.
            </span>
          </div>
        </div>
      </InfoCard>

      <InfoCard
        eyebrow="Readiness"
        title="Completion checkpoints"
        description="The MVP intake route needs to surface what is missing before evidence and framework work accelerates."
      >
        <MetricRow label="Overall completion" value={`${intake?.completion ?? 0}%`} />
        <MetricRow label="Open sections" value="3" hint="Governance, workforce, and scope notes" />
        <MetricRow label="Assigned owner" value={report.owner} />
        <MetricRow label="Next unlock" value="Framework mapping" />
      </InfoCard>
    </section>
  );
}
