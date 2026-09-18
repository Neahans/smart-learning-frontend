import React from "react";

import "./CourseCard.css";

function CourseCard({ course, role, onView }) {
  return (
    <div className="course-card">

      <div className="course-image-wrapper">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />

        <span className="course-level">
          {course.level}
        </span>
      </div>

      <div className="course-card-body">

        <span className="course-category">
          {course.category}
        </span>

        <h4>{course.title}</h4>

        <p className="course-description">
          {course.description}
        </p>

        <div className="course-meta">
          <span>
            <i className="bi bi-collection"></i>
            {course.modules} Modules
          </span>

          <span>
            <i className="bi bi-people"></i>
            {course.students} Students
          </span>
        </div>

        <div className="course-instructor">
          <i className="bi bi-person-workspace"></i>
          <span>{course.instructor}</span>
        </div>

        {role === "Student" && (
          <div className="course-progress">

            <div className="progress-info">
              <span>Your Progress</span>
              <strong>{course.progress}%</strong>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

          </div>
        )}

        <button
          className="btn btn-primary w-100 course-button"
          onClick={() => onView(course)}
        >
          <i className="bi bi-arrow-right-circle me-2"></i>

          {role === "Student"
            ? "Continue Learning"
            : "View Course"}
        </button>

      </div>
    </div>
  );
}

export default CourseCard;