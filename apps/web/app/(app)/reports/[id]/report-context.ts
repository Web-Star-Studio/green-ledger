import { notFound } from "next/navigation";
import { getReportById, getReportSections } from "@/lib/mock-data";

type RouteParams = Promise<{ id: string }>;

export async function resolveReportPageData(params: RouteParams) {
  const { id } = await params;
  const report = getReportById(id);
  const sections = getReportSections(id);

  if (!report || sections.length === 0) {
    notFound();
  }

  return { id, report, sections };
}
