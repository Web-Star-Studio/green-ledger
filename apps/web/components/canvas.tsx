import type { ReactNode } from "react";
import styles from "@/components/app-shell.module.css";

type CanvasProps = {
  children: ReactNode;
};

type CanvasHeaderProps = {
  actions?: ReactNode;
  children?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
};

export function Canvas({ children }: CanvasProps) {
  return <section className={styles.canvas}>{children}</section>;
}

export function CanvasHeader({
  actions,
  children,
  description,
  eyebrow,
  title,
}: CanvasHeaderProps) {
  return (
    <header className={styles.canvasHeader}>
      <div className={styles.canvasHeaderTop}>
        <div className={styles.canvasHeaderMeta}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 className={styles.canvasTitle}>{title}</h1>
          <p className={styles.canvasDescription}>{description}</p>
        </div>

        {actions ? <div className={styles.canvasActions}>{actions}</div> : null}
      </div>

      {children}
    </header>
  );
}
