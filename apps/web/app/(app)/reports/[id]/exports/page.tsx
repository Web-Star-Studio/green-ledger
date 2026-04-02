import { EmptyState, InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const artifacts = [
  { name: "Narrative DOCX", status: "Waiting for approval" },
  { name: "Executive PDF", status: "Blocked by review" },
  { name: "GRI summary sheet", status: "Ready after sign-off" },
];

export default async function ReportExportsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { sections } = await resolveReportPageData(params);
  const exportsSection = sections.find((section) => section.slug === "exports");

  return (
    <section className={styles.twoColumn}>
      <InfoCard
        eyebrow="Artifacts"
        title="Export bundle"
        description="Exports stay visible in the MVP, but their states make it obvious when the report is not yet ready to ship."
        action={
          exportsSection ? (
            <StatusBadge tone={exportsSection.status === "blocked" ? "critical" : "success"}>
              {exportsSection.status.replace("-", " ")}
            </StatusBadge>
          ) : null
        }
      >
        <div className={styles.detailList}>
          {artifacts.map((artifact) => (
            <div key={artifact.name} className={styles.detailItem}>
              <span className={styles.detailLabel}>{artifact.name}</span>
              <span className={styles.detailValue}>{artifact.status}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <EmptyState
        title="Exports remain intentionally gated"
        description="This screen demonstrates the final destination of the workflow while making the dependency on review approval explicit."
      />
    </section>
  );
}
