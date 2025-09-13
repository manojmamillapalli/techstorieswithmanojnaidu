// src/components/TechBlog.jsx
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase";
import "./TechBlog.css";

const db = getDatabase(app);

export default function TechBlog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
  const [expandedPhase, setExpandedPhase] = useState(null);

  useEffect(() => {
    const blogsRef = ref(db, "blogs");
    const unsub = onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedBlogs = Object.values(data);
        setBlogs(loadedBlogs);
        setSelectedBlogIndex(0);
        setExpandedPhase(null);
      }
    });
    return () => unsub();
  }, []);

  const togglePhase = (idx) => {
    setExpandedPhase(expandedPhase === idx ? null : idx);
  };

  const selectedBlog = blogs[selectedBlogIndex];
  if (!selectedBlog) return <section id="tech-blog" className="tech-blog-section">Loading blog...</section>;

  return (
    <section id="tech-blog" className="tech-blog-section">
      <h2 className="tech-blog-title">Tech Blogs</h2>

      <div className="blog-container">
        <div className="blog-header">
          {selectedBlog.title || "Selected Blog"}
        </div>

        <div className="blog-description">
          {selectedBlog.description || "No description available."}
        </div>

        <div style={{ padding: "16px 20px" }}>
          <select
            className="blog-dropdown"
            value={selectedBlogIndex}
            onChange={(e) => setSelectedBlogIndex(Number(e.target.value))}
          >
            {blogs.map((b, idx) => (
              <option key={idx} value={idx}>
                {b.title || `Blog ${idx + 1}`}
              </option>
            ))}
          </select>
        </div>

        {(selectedBlog.phases || []).map((phase, idx) => (
          <div className="phase" key={idx}>
            <button className="phase-toggle" onClick={() => togglePhase(idx)}>
              <span>{phase.heading || `Phase ${idx + 1}`}</span> {/* Changed from phase.title to phase.heading */}
              <span>{expandedPhase === idx ? "−" : "+"}</span>
            </button>
            {expandedPhase === idx && (
              <div className="phase-content">
                {phase.content && <p>{phase.content}</p>}
                {Array.isArray(phase.points) && (
                  <ul>
                    {phase.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
