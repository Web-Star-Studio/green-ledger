import { Canvas, CanvasHeader } from "@/components/canvas";
import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { workspaces } from "@/lib/mock-data";

export default function WorkspacesPage() {
  return (
    <Canvas>
      <CanvasHeader
        eyebrow="Workspace switcher"
        title="Choose the operating context"
        description="The shell supports multiple workspaces from day one, but keeps this screen quieter than the report workspace itself."
      />

      <div className={styles.canvasBody}>
        <section className={styles.twoColumn}>
          {workspaces.map((workspace) => (
            <InfoCard
              key={workspace.id}
              eyebrow={workspace.location}
              title={workspace.name}
              description={`${workspace.memberCount} members · ${workspace.activeReports} active reports`}
              action={<StatusBadge tone="neutral">{workspace.role}</StatusBadge>}
            >
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Role</span>
                  <span className={styles.detailValue}>{workspace.role}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>{workspace.location}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Volume</span>
                  <span className={styles.detailValue}>
                    {workspace.activeReports} reporting cycles in motion
                  </span>
                </div>
              </div>
            </InfoCard>
          ))}
        </section>
      </div>
    </Canvas>
  );
}
