import Link from "next/link";
import { Canvas, CanvasHeader } from "@/components/canvas";
import { InfoCard, MetricRow, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { webConfig } from "@/lib/config";
import { buildHealthBanner, getApiHealth } from "@/lib/health";
import { reports } from "@/lib/mock-data";

export default async function ReportsPage() {
  const health = await getApiHealth();
  const healthBanner = buildHealthBanner(health);

  return (
    <Canvas>
      <CanvasHeader
        eyebrow="Reports workspace"
        title="Sustainability reporting in one raised surface"
        description="The reports index is now the product entry point. Navigation recedes into the shell while planning, evidence, review, and exports all stay inside the elevated canvas."
        actions={
          <>
            <button type="button" className={styles.secondaryButton}>
              Filter portfolio
            </button>
            <Link href="/reports/new" className={styles.primaryButton}>
              Start report
            </Link>
          </>
        }
      />

      <div className={styles.canvasBody}>
        <section className={styles.heroBand}>
          <div className={styles.heroPanel}>
            <p className={styles.heroTitle}>Foundation route map is live</p>
            <p className={styles.heroCopy}>
              The frontend now models the full MVP flow as a reports workspace:
              intake, evidence, framework alignment, generation, review, indicators,
              and exports. Backend product endpoints can fill these surfaces later
              without replacing the shell.
            </p>
            <div className={styles.buttonRow}>
              <Link href="/reports/new" className={styles.primaryButton}>
                Open kickoff
              </Link>
              <Link href="/workspaces" className={styles.ghostButton}>
                Switch workspace
              </Link>
            </div>
          </div>

          <div className={styles.metricGrid}>
            <InfoCard title="Active cycles" eyebrow="Portfolio">
              <MetricRow label="Open reports" value={reports.length} />
              <MetricRow label="Need review" value={reports.filter((item) => item.alerts > 0).length} />
              <MetricRow label="Ready to export" value={reports.filter((item) => item.progress === 100).length} />
            </InfoCard>
            <InfoCard title="Cadence" eyebrow="Operations">
              <MetricRow label="Pilot owner" value="Worton" />
              <MetricRow label="Default framework" value="GRI" />
              <MetricRow label="Workspace mode" value="Light-first" />
            </InfoCard>
            <InfoCard title="System signal" eyebrow={healthBanner.label}>
              <StatusBadge tone={healthBanner.tone}>{healthBanner.statusText}</StatusBadge>
              <p className={styles.cardDescription}>{healthBanner.detail}</p>
            </InfoCard>
          </div>
        </section>

        <section className={styles.infoGrid}>
          <InfoCard
            eyebrow="Live reports"
            title="Current reporting portfolio"
            description="Mock report records establish the interaction pattern now. Each record routes into the full detail workflow."
            action={`${reports.length} records`}
          >
            <div className={styles.recordList}>
              {reports.map((report) => (
                <Link key={report.id} href={`/reports/${report.id}`} className={styles.recordCard}>
                  <div className={styles.recordPrimary}>
                    <div className={styles.recordHeader}>
                      <span className={styles.recordTitle}>{report.organization}</span>
                      <StatusBadge tone={report.alerts > 0 ? "warning" : "neutral"}>
                        {report.status.replace("-", " ")}
                      </StatusBadge>
                    </div>
                    <p className={styles.recordDescription}>{report.title}</p>
                    <div className={styles.recordMeta}>
                      <span>{report.period}</span>
                      <span>{report.framework}</span>
                      <span>Owner: {report.owner}</span>
                      <span>Updated {report.updatedAt}</span>
                    </div>
                    <div>
                      <div className={styles.progressTrack}>
                        <div className={styles.progressFill} style={{ width: `${report.progress}%` }} />
                      </div>
                      <div className={styles.progressMeta}>
                        <span>{report.progress}% complete</span>
                        <span>{report.alerts} blockers</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.recordAside}>
                    <StatusBadge tone={report.progress === 100 ? "success" : "neutral"}>
                      {report.organization === "Aurora Grid" ? "Ready" : "Open"}
                    </StatusBadge>
                    <span className={styles.cardAction}>Open workflow</span>
                  </div>
                </Link>
              ))}
            </div>
          </InfoCard>

          <div className={styles.stack}>
            <InfoCard
              eyebrow="Backend connectivity"
              title="Healthcheck remains a secondary system widget"
              description="The API contract still matters, but it no longer owns the whole screen."
            >
              <MetricRow label="Configured API" value={webConfig.apiBaseUrl} />
              <MetricRow label="Health route" value="/health" hint={health.url} />
              <MetricRow label="HTTP status" value={health.status ?? "offline"} />
              <MetricRow label="Last checked" value={health.checkedAt} />
            </InfoCard>

            <InfoCard
              eyebrow="Operating notes"
              title="What ships in this revamp"
              description="The shell and navigation now reflect the real reporting workflow instead of a bootstrap placeholder page."
            >
              <div className={styles.pillRow}>
                <span className={styles.pill}>Elevated canvas</span>
                <span className={styles.pill}>Route-first IA</span>
                <span className={styles.pill}>Mock product data</span>
                <span className={styles.pill}>Live system health</span>
              </div>
            </InfoCard>
          </div>
        </section>
      </div>
    </Canvas>
  );
}
