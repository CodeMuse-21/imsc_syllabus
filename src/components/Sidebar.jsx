import React from "react";

export default function Sidebar({ selected, setSelected, open, setOpen }) {
  const semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSemesterClick = (num) => {
    setSelected(num);
    setOpen(false); // close sidebar after selecting semester
  };

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <h2 className="sidebar-title">Semesters</h2>
      <nav className="sem-list">
        {semesters.map((num) => (
          <button
            key={num}
            className={`sem-item ${selected === num ? "active" : ""}`}
            onClick={() => handleSemesterClick(num)}
          >
            Semester {num}
          </button>
        ))}
      </nav>
    </aside>
  );
}

