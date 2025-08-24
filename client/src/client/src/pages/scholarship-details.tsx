import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Scholarship } from "@shared/schema";

export default function ScholarshipDetails() {
  const [match, params] = useRoute("/scholarships/:id");
  const { id } = params || {}; // params might be undefined

  const { data: scholarship, isLoading } = useQuery<Scholarship>({
    queryKey: ["/api/scholarships", id],
  });

  if (isLoading) return <div>Loading...</div>;
  if (!scholarship) return <div>Scholarship not found.</div>;

  return (
    <div>
      <h1>{scholarship.title}</h1>
      <p>{scholarship.description}</p>
    </div>
  );
}
  