/*import React from "react";

const ScholarshipDetails: React.FC = () => {
  return (
    <div>
      <h1>Scholarship Details</h1>
      <p>This is the Scholarship Details page.</p>
    </div>
  );
};

export default ScholarshipDetails;*/

import { useRoute } from "wouter";

export default function ScholarshipDetails() {
  const [match, params] = useRoute("/scholarships/:id");
  const { id } = params || {};

  if (!id) return <div>Invalid scholarship</div>;

  if (id === "scholarship-1") {
    return (
      <div>
        <h1>STEM Future Leaders Scholarship</h1>
        <p>For high school students passionate about science and engineering.</p>
      </div>
    );
  }

  if (id === "scholarship-2") {
    return (
      <div>
        <h1>Global Exchange Scholarship</h1>
        <p>Covers tuition and travel for students studying abroad.</p>
      </div>
    );
  }

  if (id === "scholarship-4") {
    return (
      <div>
        <h1>Women in Tech Award</h1>
        <p>Encourages female students to pursue careers in technology.</p>
      </div>
    );
  }

  return <div>Scholarship not found.</div>;
}
//testing
