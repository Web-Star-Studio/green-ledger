import { webConfig } from "@/lib/config";
import { getApiHealth } from "@/lib/health";
import styles from "./page.module.css";

const foundationItems = [
  "Monorepo sem Turbo, com orquestracao por Makefile",
  "Backend FastAPI + SQLAlchemy + Alembic via uv",
  "Frontend Next.js App Router + TypeScript via pnpm",
  "Postgres local em Docker Compose",
];

const deferredItems = [
  "Auth completa e politicas de acesso",
  "Tenancy de produto",
  "Integracoes reais com S3 e Pinecone",
  "Fluxos LangGraph de negocio",
];

export default async function Home() {
  const apiHealth = await getApiHealth();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.kicker}>GreenLedger MVP Foundation</div>
          <h1>Shell tecnica para validar a integracao do bootstrap.</h1>
          <p className={styles.lead}>
            Esta pagina existe para provar o contrato minimo entre monorepo, backend
            FastAPI, app Next.js e ambiente local. Nao e uma landing page.
          </p>
          <div className={styles.commandRow}>
            <code>make setup</code>
            <code>make db-up</code>
            <code>make migrate</code>
            <code>make dev</code>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>API connectivity</span>
              <span className={apiHealth.ok ? styles.okBadge : styles.errorBadge}>
                {apiHealth.ok ? "healthy" : "degraded"}
              </span>
            </div>
            <dl className={styles.metaList}>
              <div>
                <dt>Base URL</dt>
                <dd>{webConfig.apiBaseUrl}</dd>
              </div>
              <div>
                <dt>Health URL</dt>
                <dd>{apiHealth.url}</dd>
              </div>
              <div>
                <dt>HTTP status</dt>
                <dd>{apiHealth.status ?? "unreachable"}</dd>
              </div>
              <div>
                <dt>Checked at</dt>
                <dd>{apiHealth.checkedAt}</dd>
              </div>
            </dl>
            <pre className={styles.payload}>
              {JSON.stringify(apiHealth.data ?? { error: apiHealth.error }, null, 2)}
            </pre>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Bootstrap scope</span>
              <span className={styles.neutralBadge}>cycle 1 blocker</span>
            </div>
            <ul className={styles.list}>
              {foundationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Not in this bootstrap</span>
              <span className={styles.neutralBadge}>deferred</span>
            </div>
            <ul className={styles.list}>
              {deferredItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Current contracts</span>
              <span className={styles.neutralBadge}>minimum viable</span>
            </div>
            <dl className={styles.metaList}>
              <div>
                <dt>Backend</dt>
                <dd>/health and /ready</dd>
              </div>
              <div>
                <dt>Frontend env</dt>
                <dd>NEXT_PUBLIC_API_BASE_URL</dd>
              </div>
              <div>
                <dt>Database</dt>
                <dd>Postgres 16 via Docker Compose</dd>
              </div>
              <div>
                <dt>Flow task</dt>
                <dd>GL-41 in cycle 1</dd>
              </div>
            </dl>
          </article>
        </section>
      </main>
    </div>
  );
}
