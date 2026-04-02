import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const evidenceItems = [
  {
    file: "emissions-inventory.xlsx",
    owner: "Operations",
    state: "Validated",
  },
  {
    file: "supplier-assessment.pdf",
    owner: "Procurement",
    state: "Needs tagging",
  },
  {
    file: "board-minutes.docx",
    owner: "Governance",
    state: "Pending review",
  },
];

export default async function ReportEvidencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { sections } = await resolveReportPageData(params);
  const evidence = sections.find((section) => section.slug === "evidence");

  return (
    <section className={styles.twoColumn}>
      <InfoCard
        eyebrow="Evidence library"
        title="Uploaded and cataloged materials"
        description="This route already behaves like an evidence control room, even though uploads remain mocked."
        action={
          evidence ? (
            <StatusBadge tone="warning">{evidence.status.replace("-", " ")}</StatusBadge>
          ) : null
        }
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>File</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {evidenceItems.map((item) => (
              <tr key={item.file}>
                <td>{item.file}</td>
                <td>{item.owner}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoCard>

      <InfoCard
        eyebrow="Evidence health"
        title="Catalog posture"
        description="The right column keeps the operator oriented around quality and ingestion risk."
      >
        <div className={styles.detailList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Mapped files</span>
            <span className={styles.detailValue}>22 evidence objects linked to this report</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Still blocked</span>
            <span className={styles.detailValue}>4 inputs missing tags or confidence checks</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Next unlock</span>
            <span className={styles.detailValue}>Generation can proceed after validation threshold is met</span>
          </div>
        </div>
      </InfoCard>
    </section>
  );
}
