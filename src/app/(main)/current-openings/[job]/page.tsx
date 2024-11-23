import JobDetailsPage from "./_components/JobDetailsPage";

export default function JobPage({ params }: { params: { job: string } }) {
  return <JobDetailsPage params={params} />;
}
