import { getAllJobs } from "@/lib/jobs";
import CurrentOpenings from "./_components/CurrentOpenings";

export default async function JobsPage() {
  const { jobs, total, hasMore } = await getAllJobs(1, 5);

  return (
    <CurrentOpenings initialJobs={jobs} totalJobs={total} hasMore={hasMore} />
  );
}
