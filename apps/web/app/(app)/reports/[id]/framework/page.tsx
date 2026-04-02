import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const frameworkTopics = [
  "Climate resilience and transition",
  "Water stewardship in operations",
  "Workforce safety and training",
  "Supplier governance and traceability",
];

export default async function ReportFrameworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { report, sections } = await resolveReportPageData(params);
  const framework = sections.find((section) => section.slug === "framework");

  return (
    <section className={styles.twoColumn}>
      <InfoCard
        eyebrow="Materiality"
        title="Framework alignment"
        description={`The ${report.framework} package is represented here as a focused decision surface rather than a sprawling settings page.`}
        action={
          framework ? (
            <StatusBadge tone={framework.status === "ready" ? "warning" : "neutral"}>
              {framework.status.replace("-", " ")}
            </StatusBadge>
          ) : null
        }
      >
        <div className={styles.detailList}>
          {frameworkTopics.map((topic) => (
            <div key={topic} className={styles.detailItem}>
              <span className={styles.detailLabel}>Priority topic</span>
              <span className={styles.detailValue}>{topic}</span>
              <span className={styles.detailHint}>
                Candidate mappings to GRI disclosures and ODS targets live in this slot.
              </span>
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard
        eyebrow="Decision status"
        title="What still needs sign-off"
        description="This card frames framework work as an approval loop, not just a list of standards."
      >
        <div className={styles.detailList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>ODS prioritization</span>
            <span className={styles.detailValue}>Awaiting executive validation</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Materiality narrative</span>
            <span className={styles.detailValue}>Draft complete, needs legal wording review</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Release impact</span>
            <span className={styles.detailValue}>Generation can proceed with a provisional mapping</span>
          </div>
        </div>
      </InfoCard>
    </section>
  );
}
