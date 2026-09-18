import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { modules, notes, courses } from "../data/mockData";

import "./ModuleDetails.css";

function ModuleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const module = modules.find(
    (item) => item.id === Number(id)
  );

  if (!module) {
    return (
      <div className="module-not-found">
        <i className="bi bi-exclamation-circle"></i>
        <h3>Module not found</h3>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const course = courses.find(
    (item) => item.id === module.courseId
  );

  const moduleNotes = notes.filter(
    (note) => note.moduleId === module.id
  );

  if (!module.unlocked) {
    return (
      <div className="locked-module-page">

        <div className="locked-module-card">

          <div className="locked-icon">
            <i className="bi bi-lock-fill"></i>
          </div>

          <h2>Module Locked</h2>

          <p>
            This module is currently locked. You need
            permission from your mentor or administrator
            before accessing the notes.
          </p>

          <div className="locked-module-info">
            <strong>{module.title}</strong>

            <span>
              {course?.title || "Course"}
            </span>
          </div>

          <div className="locked-actions">

            <button
              className="btn btn-warning"
              onClick={() => navigate("/unlock-requests")}
            >
              <i className="bi bi-unlock me-2"></i>
              Request Unlock
            </button>

            <button
              className="btn btn-light"
              onClick={() =>
                navigate(`/courses/${module.courseId}`)
              }
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Course
            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="module-details-page">

      <button
        className="btn btn-light mb-4"
        onClick={() =>
          navigate(`/courses/${module.courseId}`)
        }
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to Course
      </button>

      <div className="module-header">

        <div className="module-header-icon">
          <i className="bi bi-book-fill"></i>
        </div>

        <div>
          <span>
            {course?.title || "Course"}
          </span>

          <h1>{module.title}</h1>

          <p>{module.description}</p>
        </div>

      </div>

      <div className="notes-section">

        <div className="notes-heading">
          <div>
            <h2>Learning Notes</h2>

            <p>
              {moduleNotes.length} note
              {moduleNotes.length !== 1 ? "s" : ""} in this
              module
            </p>
          </div>

          <span className="unlocked-badge">
            <i className="bi bi-unlock-fill me-1"></i>
            Unlocked
          </span>
        </div>

        {moduleNotes.length === 0 ? (
          <div className="no-notes">
            <i className="bi bi-journal-x"></i>

            <h4>No notes available</h4>

            <p>
              Notes for this module haven't been added yet.
            </p>
          </div>
        ) : (
          <div className="notes-list">

            {moduleNotes.map((note, index) => (
              <article
                className="note-card"
                key={note.id}
              >
                <div className="note-number">
                  {index + 1}
                </div>

                <div className="note-content">
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                </div>
              </article>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default ModuleDetails;