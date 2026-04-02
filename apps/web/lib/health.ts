import { webConfig } from "@/lib/config";
import type { HealthBanner } from "@/lib/contracts";

type HealthPayload = Record<string, unknown> | null;

export type ApiHealthSnapshot = {
  checkedAt: string;
  data: HealthPayload;
  error: string | null;
  ok: boolean;
  status: number | null;
  url: string;
};

const HEALTH_PATH = "/health";

function buildHealthUrl(): string {
  return new URL(HEALTH_PATH, webConfig.apiBaseUrl).toString();
}

export async function getApiHealth(): Promise<ApiHealthSnapshot> {
  const url = buildHealthUrl();

  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(2500),
    });

    const text = await response.text();
    const parsed = text ? (JSON.parse(text) as Record<string, unknown>) : null;

    return {
      checkedAt: new Date().toISOString(),
      data: parsed,
      error: response.ok ? null : "Backend healthcheck returned a non-success status.",
      ok: response.ok,
      status: response.status,
      url,
    };
  } catch (error) {
    return {
      checkedAt: new Date().toISOString(),
      data: null,
      error: error instanceof Error ? error.message : "Unknown connectivity error.",
      ok: false,
      status: null,
      url,
    };
  }
}

export function buildHealthBanner(snapshot: ApiHealthSnapshot): HealthBanner {
  if (snapshot.ok) {
    return {
      detail: `API answered ${snapshot.status} from ${snapshot.url}`,
      label: "System",
      statusText: "Healthy",
      tone: "success",
    };
  }

  if (snapshot.status !== null) {
    return {
      detail: snapshot.error ?? "The API returned a non-success status.",
      label: "System",
      statusText: "Attention needed",
      tone: "warning",
    };
  }

  return {
    detail: snapshot.error ?? "The workspace cannot reach the backend right now.",
    label: "System",
    statusText: "Offline",
    tone: "critical",
  };
}
