import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudies from "./_components/CaseStudies";

export default async function CaseStudiesPageWrapper() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudies initialCaseStudies={caseStudies} />;
}
