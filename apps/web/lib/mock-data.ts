import type {
  NavItem,
  ReportSectionStatus,
  ReportSummary,
  WorkspaceSummary,
} from "@/lib/contracts";

export const primaryNavigation: NavItem[] = [
  {
    description: "Main reporting workspace",
    href: "/reports",
    label: "Reports",
    match: "prefix",
  },
  {
    description: "Kick off a new report cycle",
    href: "/reports/new",
    label: "New report",
    match: "exact",
  },
  {
    description: "Switch between operating entities",
    href: "/workspaces",
    label: "Workspaces",
    match: "exact",
  },
];

export const utilityNavigation: NavItem[] = [
  {
    description: "Access and session setup",
    href: "/login",
    label: "Login",
    match: "exact",
  },
];

export const workspaces: WorkspaceSummary[] = [
  {
    activeReports: 4,
    id: "worton-br",
    location: "Recife, BR",
    memberCount: 12,
    name: "Worton Advisory",
    role: "Primary operator",
  },
  {
    activeReports: 2,
    id: "atlantic-foods",
    location: "Sao Paulo, BR",
    memberCount: 7,
    name: "Atlantic Foods",
    role: "Client workspace",
  },
  {
    activeReports: 1,
    id: "aurora-grid",
    location: "Curitiba, BR",
    memberCount: 5,
    name: "Aurora Grid",
    role: "Pilot workspace",
  },
];

export const reports: ReportSummary[] = [
  {
    alerts: 2,
    framework: "GRI + ODS",
    id: "atlantic-foods-2025",
    organization: "Atlantic Foods",
    owner: "Marina Costa",
    period: "FY 2025",
    progress: 72,
    status: "in-review",
    title: "2025 sustainability report",
    updatedAt: "2h ago",
  },
  {
    alerts: 1,
    framework: "GRI core",
    id: "ventus-logistics-2024",
    organization: "Ventus Logistics",
    owner: "Joao Lima",
    period: "FY 2024",
    progress: 48,
    status: "collecting",
    title: "Material topics baseline",
    updatedAt: "Yesterday",
  },
  {
    alerts: 0,
    framework: "GRI + IFRS S1/S2",
    id: "aurora-grid-2025",
    organization: "Aurora Grid",
    owner: "Paula Neri",
    period: "FY 2025",
    progress: 100,
    status: "generated",
    title: "Integrated climate disclosure",
    updatedAt: "3d ago",
  },
];

const reportSectionsById: Record<string, ReportSectionStatus[]> = {
  "atlantic-foods-2025": [
    {
      completion: 100,
      href: "/reports/atlantic-foods-2025",
      label: "Overview",
      slug: "overview",
      status: "complete",
      summary: "Executive summary, timeline, and risk posture.",
    },
    {
      completion: 82,
      href: "/reports/atlantic-foods-2025/intake",
      label: "Intake",
      slug: "intake",
      status: "in-progress",
      summary: "Entity profile and reporting perimeter are mostly complete.",
    },
    {
      completion: 68,
      href: "/reports/atlantic-foods-2025/evidence",
      label: "Evidence",
      slug: "evidence",
      status: "in-progress",
      summary: "22 files mapped, 4 still waiting for validation.",
    },
    {
      completion: 60,
      href: "/reports/atlantic-foods-2025/framework",
      label: "Framework",
      slug: "framework",
      status: "ready",
      summary: "Material topics drafted, ODS prioritization needs sign-off.",
    },
    {
      completion: 34,
      href: "/reports/atlantic-foods-2025/generate",
      label: "Generate",
      slug: "generate",
      status: "in-progress",
      summary: "Narrative pipeline already produced the first draft.",
    },
    {
      completion: 40,
      href: "/reports/atlantic-foods-2025/review",
      label: "Review",
      slug: "review",
      status: "ready",
      summary: "Legal review and governance notes still pending.",
    },
    {
      completion: 55,
      href: "/reports/atlantic-foods-2025/indicators",
      label: "Indicators",
      slug: "indicators",
      status: "in-progress",
      summary: "12 KPI families mapped against GRI references.",
    },
    {
      completion: 20,
      href: "/reports/atlantic-foods-2025/exports",
      label: "Exports",
      slug: "exports",
      status: "blocked",
      summary: "Exports unlock after review approval.",
    },
  ],
  "ventus-logistics-2024": [
    {
      completion: 100,
      href: "/reports/ventus-logistics-2024",
      label: "Overview",
      slug: "overview",
      status: "complete",
      summary: "Scoping and baseline are available.",
    },
    {
      completion: 52,
      href: "/reports/ventus-logistics-2024/intake",
      label: "Intake",
      slug: "intake",
      status: "in-progress",
      summary: "Workforce and governance sections need input.",
    },
    {
      completion: 28,
      href: "/reports/ventus-logistics-2024/evidence",
      label: "Evidence",
      slug: "evidence",
      status: "in-progress",
      summary: "Only the first evidence batch has been classified.",
    },
    {
      completion: 18,
      href: "/reports/ventus-logistics-2024/framework",
      label: "Framework",
      slug: "framework",
      status: "not-started",
      summary: "Framework mapping starts after intake approval.",
    },
    {
      completion: 0,
      href: "/reports/ventus-logistics-2024/generate",
      label: "Generate",
      slug: "generate",
      status: "not-started",
      summary: "No generation runs yet.",
    },
    {
      completion: 0,
      href: "/reports/ventus-logistics-2024/review",
      label: "Review",
      slug: "review",
      status: "not-started",
      summary: "Review opens after the first draft.",
    },
    {
      completion: 0,
      href: "/reports/ventus-logistics-2024/indicators",
      label: "Indicators",
      slug: "indicators",
      status: "not-started",
      summary: "Indicators are not compiled yet.",
    },
    {
      completion: 0,
      href: "/reports/ventus-logistics-2024/exports",
      label: "Exports",
      slug: "exports",
      status: "not-started",
      summary: "No artifacts are available yet.",
    },
  ],
  "aurora-grid-2025": [
    {
      completion: 100,
      href: "/reports/aurora-grid-2025",
      label: "Overview",
      slug: "overview",
      status: "complete",
      summary: "Delivery summary and approval state are available.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/intake",
      label: "Intake",
      slug: "intake",
      status: "complete",
      summary: "All structured sections are finalized.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/evidence",
      label: "Evidence",
      slug: "evidence",
      status: "complete",
      summary: "Evidence library is complete and versioned.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/framework",
      label: "Framework",
      slug: "framework",
      status: "complete",
      summary: "Framework mappings are approved.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/generate",
      label: "Generate",
      slug: "generate",
      status: "complete",
      summary: "Latest generation run is approved for release.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/review",
      label: "Review",
      slug: "review",
      status: "complete",
      summary: "All reviewers signed off.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/indicators",
      label: "Indicators",
      slug: "indicators",
      status: "complete",
      summary: "Indicator table is published.",
    },
    {
      completion: 100,
      href: "/reports/aurora-grid-2025/exports",
      label: "Exports",
      slug: "exports",
      status: "complete",
      summary: "PDF and DOCX exports are ready.",
    },
  ],
};

export function getReportById(id: string): ReportSummary | undefined {
  return reports.find((report) => report.id === id);
}

export function getReportSections(id: string): ReportSectionStatus[] {
  return reportSectionsById[id] ?? [];
}
