import { InfoCard, StatusBadge } from "@/components/info-card";
import styles from "@/components/app-shell.module.css";
import { resolveReportPageData } from "@/app/(app)/reports/[id]/report-context";

const indicators = [
  { category: "Emissions", value: "14.8 ktCO2e", variance: "-6.2%" },
  { category: "Water use", value: "1.12 Mm3", variance: "-2.1%" },
  { category: "LTIFR", value: "0.71", variance: "-11.0%" },
  { category: "Training hours", value: "18.4 / employee", variance: "+9.3%" },
];

export default async function ReportIndicatorsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { sections } = await resolveReportPageData(params);
  const indicatorsSection = sections.find((section) => section.slug === "indicators");

  return (
    <InfoCard
      eyebrow="Indicators"
      title="Operational KPI set"
      description="A simple tabular surface is enough for the MVP as long as the information hierarchy stays crisp."
      action={
        indicatorsSection ? (
          <StatusBadge tone="neutral">{indicatorsSection.status.replace("-", " ")}</StatusBadge>
        ) : null
      }
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Current value</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>
          {indicators.map((indicator) => (
            <tr key={indicator.category}>
              <td>{indicator.category}</td>
              <td>{indicator.value}</td>
              <td>{indicator.variance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfoCard>
  );
}
