export type NavItem = {
  description: string;
  href: string;
  label: string;
  match: "exact" | "prefix";
};

export type HealthBanner = {
  detail: string;
  label: string;
  statusText: string;
  tone: "critical" | "neutral" | "success" | "warning";
};

export type ReportSummary = {
  alerts: number;
  framework: string;
  id: string;
  organization: string;
  owner: string;
  period: string;
  progress: number;
  status: "collecting" | "draft" | "generated" | "in-review";
  title: string;
  updatedAt: string;
};

export type ReportSectionStatus = {
  completion: number;
  href: string;
  label: string;
  slug:
    | "overview"
    | "intake"
    | "evidence"
    | "framework"
    | "generate"
    | "review"
    | "indicators"
    | "exports";
  status: "blocked" | "complete" | "in-progress" | "not-started" | "ready";
  summary: string;
};

export type WorkspaceSummary = {
  activeReports: number;
  id: string;
  location: string;
  memberCount: number;
  name: string;
  role: string;
};
