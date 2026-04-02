import type { ReactNode } from "react";
import styles from "@/components/app-shell.module.css";

type StatusBadgeProps = {
  children: ReactNode;
  tone: "critical" | "neutral" | "success" | "warning";
};

type InfoCardProps = {
  action?: ReactNode;
  children: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
};

type EmptyStateProps = {
  children?: ReactNode;
  description: string;
  title: string;
};

type MetricRowProps = {
  hint?: string;
  label: string;
  value: ReactNode;
};

const toneClassName: Record<StatusBadgeProps["tone"], string> = {
  critical: styles.statusCritical,
  neutral: styles.statusNeutral,
  success: styles.statusSuccess,
  warning: styles.statusWarning,
};

export function StatusBadge({ children, tone }: StatusBadgeProps) {
  return <span className={`${styles.statusBadge} ${toneClassName[tone]}`}>{children}</span>;
}

export function InfoCard({
  action,
  children,
  description,
  eyebrow,
  title,
}: InfoCardProps) {
  return (
    <article className={styles.infoCard}>
      <div className={styles.infoCardHeader}>
        <div className={styles.infoCardMeta}>
          {eyebrow ? <p className={styles.cardEyebrow}>{eyebrow}</p> : null}
          <h2 className={styles.cardTitle}>{title}</h2>
          {description ? <p className={styles.cardDescription}>{description}</p> : null}
        </div>

        {action ? <div className={styles.cardAction}>{action}</div> : null}
      </div>

      {children}
    </article>
  );
}

export function EmptyState({ children, description, title }: EmptyStateProps) {
  return (
    <div className={styles.emptyState}>
      <h3 className={styles.emptyTitle}>{title}</h3>
      <p className={styles.emptyCopy}>{description}</p>
      {children}
    </div>
  );
}

export function MetricRow({ hint, label, value }: MetricRowProps) {
  return (
    <div className={styles.metricRow}>
      <div className={styles.metricLabelBlock}>
        <span className={styles.metricLabel}>{label}</span>
        {hint ? <span className={styles.metricHint}>{hint}</span> : null}
      </div>
      <span className={styles.metricValue}>{value}</span>
    </div>
  );
}
