import React from "react";
import SubjectCard from "./SubjectCard.jsx";

export default function SemesterPage({ data, semester }) {
  if (!data) return <div className="semester-title">No data for this semester</div>;

  return (
    <section>
      <div className="semester-title">
        <h2>Semester {semester}</h2>
        <div style={{ color: "#6b7280", marginTop: 6 }}>
          Click a subject to expand modules and resources
        </div>
      </div>

      <div className="grid">
        {Array.isArray(data.courses) && data.courses.length > 0 ? (
          data.courses.map((course, idx) => (
            <SubjectCard key={idx} subject={course} />
          ))
        ) : (
          <div className="empty-note">No courses defined for this semester.</div>
        )}
      </div>
    </section>
  );
}
