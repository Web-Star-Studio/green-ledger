import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const comments = [
  "Clarify sourcing language in the governance introduction.",
  "Keep climate risk summary tighter for the board audience.",
  "Add cross-reference to the indicator appendix before export.",
];

export default async function ReportReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { sections } = await resolveReportPageData(params);
  const review = sections.find((section) => section.slug === "review");

  return (
    <section className={styles.infoGrid}>
      <InfoCard
        eyebrow="Narrative review"
        title="Working draft"
        description="The review route is intentionally quieter and more document-like, but still stays inside the same raised canvas."
        action={
          review ? (
            <StatusBadge tone={review.status === "complete" ? "success" : "warning"}>
              {review.status.replace("-", " ")}
            </StatusBadge>
          ) : null
        }
      >
        <div className={styles.detailList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Opening narrative</span>
            <span className={styles.detailValue}>
              The current draft frames sustainability as an operating system for the
              company rather than a compliance annex. That positioning is strong and
              should stay consistent through the full report.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Reviewer note</span>
            <span className={styles.detailValue}>
              Keep the management tone direct and evidence-backed. Avoid abstract ESG
              language where operational proof exists.
            </span>
          </div>
        </div>
      </InfoCard>

      <InfoCard
        eyebrow="Feedback queue"
        title="Open comments"
        description="Inline comments are mocked, but the layout already behaves like an approval surface."
      >
        <div className={styles.detailList}>
          {comments.map((comment) => (
            <div key={comment} className={styles.detailItem}>
              <span className={styles.detailLabel}>Comment</span>
              <span className={styles.detailValue}>{comment}</span>
            </div>
          ))}
        </div>
      </InfoCard>
    </section>
  );
}
