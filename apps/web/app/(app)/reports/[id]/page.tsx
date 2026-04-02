import { InfoCard, MetricRow, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

export default async function ReportOverviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { report, sections } = await resolveReportPageData(params);

  return (
    <>
      <section className={styles.heroBand}>
        <div className={styles.heroPanel}>
          <p className={styles.heroTitle}>Current operating posture</p>
          <p className={styles.heroCopy}>
            {report.organization} is in the {report.status.replace("-", " ")} stage.
            The current UI keeps the report summary, workflow map, and release risk on
            the same white surface so the operator can orient quickly.
          </p>
        </div>

        <div className={styles.metricGridTight}>
          <InfoCard title="Completion" eyebrow="Progress">
            <MetricRow label="Overall" value={`${report.progress}%`} />
            <MetricRow label="Open alerts" value={report.alerts} />
          </InfoCard>
          <InfoCard title="Ownership" eyebrow="Operator">
            <MetricRow label="Lead" value={report.owner} />
            <MetricRow label="Framework" value={report.framework} />
          </InfoCard>
        </div>
      </section>

      <section className={styles.twoColumn}>
        <InfoCard
          eyebrow="Workflow map"
          title="Section readiness"
          description="This overview intentionally mirrors the route tabs so the report status is legible before diving into any single surface."
        >
          <div className={styles.recordList}>
            {sections.map((section) => (
              <div key={section.slug} className={styles.recordCard}>
                <div className={styles.recordPrimary}>
                  <div className={styles.recordHeader}>
                    <span className={styles.recordTitle}>{section.label}</span>
                    <StatusBadge
                      tone={
                        section.status === "blocked"
                          ? "critical"
                          : section.status === "complete"
                            ? "success"
                            : section.status === "ready"
                              ? "warning"
                              : "neutral"
                      }
                    >
                      {section.status.replace("-", " ")}
                    </StatusBadge>
                  </div>
                  <p className={styles.recordDescription}>{section.summary}</p>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${section.completion}%` }}
                    />
                  </div>
                  <div className={styles.progressMeta}>
                    <span>{section.completion}% complete</span>
                    <span>{section.label} route ready</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard
          eyebrow="Immediate next actions"
          title="Operational focus"
          description="These notes make the overview feel like a real operator cockpit instead of a placeholder."
        >
          <div className={styles.detailList}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>1. Review intake perimeter</span>
              <span className={styles.detailHint}>
                Finalize site coverage and reporting boundaries before widening evidence intake.
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>2. Clear evidence blockers</span>
              <span className={styles.detailHint}>
                Four evidence items remain outside the trusted input set for generation.
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>3. Prepare release review</span>
              <span className={styles.detailHint}>
                Narrative draft is present, but exports remain blocked until approval.
              </span>
            </div>
          </div>
        </InfoCard>
      </section>
    </>
  );
}
