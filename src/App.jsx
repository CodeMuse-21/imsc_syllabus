import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import SemesterPage from "./components/SemesterPage.jsx";

import s1 from "./data/semester1.json";
import s2 from "./data/semester2.json";
import s3 from "./data/semester3.json";
import s4 from "./data/semester4.json";
import s5 from "./data/semester5.json";
import s6 from "./data/semester6.json";
import s7 from "./data/semester7.json";
import s8 from "./data/semester8.json";
import s9 from "./data/semester9.json";
import s10 from "./data/semester10.json";

import logo from "./assets/bit-logo.jpeg"; // BIT Mesra logo

const allSemesters = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

export default function App() {
  const [selected, setSelected] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar
        selected={selected}
        setSelected={setSelected}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Overlay to close sidebar */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main content */}
      <main className="main">
        <div className="topbar">
          <button
            className="hamburger"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            ☰
          </button>
          <div className="topbar-text">
            <h1>IMSc — Mathematics & Computing (BIT Mesra)</h1>
            <div className="program-meta">5 years · 10 semesters</div>
          </div>
        </div>

        <div className="content-area">
          <SemesterPage
            data={allSemesters[selected - 1]}
            semester={selected}
          />
        </div>
      </main>

      {/* BIT Mesra watermark */}
      <img
        src={logo}
        alt="BIT Mesra Logo"
        className="watermark"
      />
    </div>
  );
}
