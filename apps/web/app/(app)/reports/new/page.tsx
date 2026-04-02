import Link from "next/link";
import { Canvas, CanvasHeader } from "@/components/canvas";
import { InfoCard } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";

export default function NewReportPage() {
  return (
    <Canvas>
      <CanvasHeader
        eyebrow="Kickoff"
        title="Create a new reporting cycle"
        description="This route establishes the MVP entry point for new work. The form stays intentionally lean while the backend creation flow is still pending."
        actions={
          <>
            <Link href="/reports" className={styles.ghostButton}>
              Back to reports
            </Link>
            <button type="button" className={styles.primaryButton}>
              Save draft
            </button>
          </>
        }
      />

      <div className={styles.canvasBody}>
        <section className={styles.twoColumn}>
          <InfoCard
            eyebrow="New report"
            title="Kickoff brief"
            description="Capture just enough structured context to start the reporting workflow and seed the downstream sections."
          >
            <div className={styles.formGrid}>
              <label className={styles.formField}>
                <span className={styles.formLabel}>Workspace</span>
                <select className={styles.select} defaultValue="Atlantic Foods">
                  <option>Atlantic Foods</option>
                  <option>Ventus Logistics</option>
                  <option>Aurora Grid</option>
                </select>
              </label>

              <label className={styles.formField}>
                <span className={styles.formLabel}>Reporting period</span>
                <input className={styles.input} defaultValue="FY 2026" />
              </label>

              <label className={styles.formField}>
                <span className={styles.formLabel}>Lead owner</span>
                <input className={styles.input} defaultValue="Marina Costa" />
              </label>

              <label className={styles.formField}>
                <span className={styles.formLabel}>Framework package</span>
                <select className={styles.select} defaultValue="GRI + ODS">
                  <option>GRI + ODS</option>
                  <option>GRI core</option>
                  <option>GRI + IFRS S1/S2</option>
                </select>
              </label>

              <label className={`${styles.formField} ${styles.formFieldWide}`}>
                <span className={styles.formLabel}>Mandate</span>
                <textarea
                  className={styles.textarea}
                  defaultValue="Build the report shell, collect evidence, and prepare the first generated narrative for pilot review."
                />
              </label>
            </div>
          </InfoCard>

          <InfoCard
            eyebrow="Downstream contract"
            title="What this form unlocks"
            description="Even before the backend workflow exists, the UI already reflects the intended transition into the report detail sections."
          >
            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Intake</span>
                <span className={styles.detailValue}>Entity profile and perimeter setup.</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Evidence</span>
                <span className={styles.detailValue}>Upload lanes and classification inventory.</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Framework</span>
                <span className={styles.detailValue}>Materiality, GRI references, and ODS priorities.</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Generate</span>
                <span className={styles.detailValue}>Pipeline state, draft versions, and release status.</span>
              </div>
            </div>
          </InfoCard>
        </section>
      </div>
    </Canvas>
  );
}
