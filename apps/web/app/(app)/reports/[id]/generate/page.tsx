import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const runs = [
  { finished: "10m ago", result: "Draft generated", version: "v0.3" },
  { finished: "Yesterday", result: "Evidence hydration complete", version: "v0.2" },
  { finished: "3d ago", result: "Seed skeleton created", version: "v0.1" },
];

export default async function ReportGeneratePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { sections } = await resolveReportPageData(params);
  const generate = sections.find((section) => section.slug === "generate");

  return (
    <section className={styles.twoColumn}>
      <InfoCard
        eyebrow="Pipeline"
        title="Generation runs"
        description="Generation becomes legible when the run history, current state, and next release condition share one surface."
        action={
          generate ? (
            <StatusBadge tone="warning">{generate.status.replace("-", " ")}</StatusBadge>
          ) : null
        }
      >
        <div className={styles.recordList}>
          {runs.map((run) => (
            <div key={run.version} className={styles.recordCard}>
              <div className={styles.recordPrimary}>
                <div className={styles.recordHeader}>
                  <span className={styles.recordTitle}>{run.version}</span>
                  <StatusBadge tone="success">{run.result}</StatusBadge>
                </div>
                <p className={styles.recordDescription}>
                  Completed {run.finished}. This row stands in for the eventual run logs and artifacts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard
        eyebrow="Release condition"
        title="Current generation posture"
        description="The UI is ready for a future run-status API, but already communicates where the pipeline stands."
      >
        <div className={styles.detailList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Draft status</span>
            <span className={styles.detailValue}>Narrative is available for stakeholder review</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Blocking condition</span>
            <span className={styles.detailValue}>Framework approvals are still provisional</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Operator action</span>
            <span className={styles.detailValue}>Promote the approved run once review comments are cleared</span>
          </div>
        </div>
      </InfoCard>
    </section>
  );
}
