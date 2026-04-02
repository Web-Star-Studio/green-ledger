import Link from "next/link";
import styles from "@/components/app-shell.module.css";

export default function LoginPage() {
  return (
    <main className={styles.utilityShell}>
      <section className={styles.utilityCard}>
        <p className={styles.eyebrow}>GreenLedger access</p>
        <h1 className={styles.canvasTitle}>Operator sign-in stays calm and technical</h1>
        <p className={styles.canvasDescription}>
          This placeholder route adopts the same visual language as the product shell
          without introducing auth implementation details before the dedicated backlog
          work lands.
        </p>

        <div className={styles.formGrid}>
          <label className={styles.formField}>
            <span className={styles.formLabel}>Email</span>
            <input className={styles.input} type="email" placeholder="operator@greenledger.app" />
          </label>
          <label className={styles.formField}>
            <span className={styles.formLabel}>Password</span>
            <input className={styles.input} type="password" placeholder="••••••••••" />
          </label>
        </div>

        <div className={styles.buttonRow}>
          <button type="button" className={styles.primaryButton}>
            Continue
          </button>
          <Link href="/reports" className={styles.secondaryButton}>
            Enter demo workspace
          </Link>
        </div>
      </section>
    </main>
  );
}
