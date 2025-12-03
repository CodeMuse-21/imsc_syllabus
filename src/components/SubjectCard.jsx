import React, { useState } from "react";

export default function SubjectCard({ subject }) {
  const [open, setOpen] = useState(false);

  // safe defaults
  const modules = Array.isArray(subject.modules) ? subject.modules : [];
  const resources = subject.resources || {};

  return (
    <article className="subject-card" aria-expanded={open}>
      <div className="subject-header" onClick={() => setOpen(!open)}>
        <div>
          <h3>{subject.code} — {subject.title}</h3>
          <div className="subject-meta">{subject.credits ? `${subject.credits} credits` : ""}</div>
        </div>
        <div style={{ color: open ? "#1f2937" : "#6b7280" }}>{open ? "▲" : "▼"}</div>
      </div>

      {open && (
        <div className="subject-body">
          <div>
            <h4 style={{margin:'0 0 8px 0'}}>Modules</h4>
            {modules.length === 0 ? (
              <div className="empty-note">Modules not added.</div>
            ) : (
              modules.map((m, i) => (
                <div className="module" key={i}>
                  <strong>{m.name}</strong>
                  {Array.isArray(m.topics) && m.topics.length > 0 ? (
                    <ul>
                      {m.topics.map((t, j) => <li key={j}>{t}</li>)}
                    </ul>
                  ) : (
                    <div className="empty-note">Topics not provided.</div>
                  )}
                </div>
              ))
            )}
          </div>

          <div style={{marginTop:10}}>
            <h4 style={{margin:'0 0 8px 0'}}>Resources</h4>
            <div className="resources">
              {resources.youtube ? <a href={resources.youtube} target="_blank" rel="noopener noreferrer">YouTube</a> : null}
              {resources.notes ? <a href={resources.notes} target="_blank" rel="noopener noreferrer">Notes</a> : null}
              {resources.questionPaper ? <a href={resources.questionPaper} target="_blank" rel="noopener noreferrer">Question Papers</a> : null}
              {!resources.youtube && !resources.notes && !resources.questionPaper && <div className="empty-note">No resources available.</div>}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
