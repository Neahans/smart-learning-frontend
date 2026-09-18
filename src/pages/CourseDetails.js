import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { courses, modules } from "../data/mockData";
import ModuleCard from "../components/ModuleCard";

import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const role = currentUser?.role || "Student";

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="course-not-found">
        <i className="bi bi-exclamation-circle"></i>
        <h3>Course not found</h3>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const courseModules = modules
    .filter((module) => module.courseId === course.id)
    .sort((a, b) => a.order - b.order);

  const unlockedCount = courseModules.filter(
    (module) => module.unlocked
  ).length;

  const handleOpenModule = (module) => {
    navigate(`/modules/${module.id}`);
  };

  const handleRequestUnlock = (module) => {
    if (role !== "Student") {
      alert(
        `${role} can review module access requests here.`
      );
      return;
    }

    alert(
      `Unlock request sent for "${module.title}".`
    );
  };

  return (
    <div className="course-details-page">

      <button
        className="btn btn-light back-button"
        onClick={() => navigate("/courses")}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to Courses
      </button>

      {/* Course Hero */}
      <div className="course-details-hero">

        <div className="course-details-image">
          <img
            src={course.image}
            alt={course.title}
          />
        </div>

        <div className="course-details-info">

          <span className="course-details-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p>
            {course.description}
          </p>

          <div className="course-details-meta">

            <span>
              <i className="bi bi-person-workspace"></i>
              {course.instructor}
            </span>

            <span>
              <i className="bi bi-bar-chart"></i>
              {course.level}
            </span>

            <span>
              <i className="bi bi-collection"></i>
              {course.modules} Modules
            </span>

          </div>

        </div>

      </div>

      {/* Modules */}
      <div className="modules-section">

        <div className="modules-heading">

          <div>
            <h2>Course Modules</h2>

            <p>
              {unlockedCount} of {courseModules.length} modules
              available
            </p>
          </div>

          <div className="module-progress">

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${
                    courseModules.length > 0
                      ? (unlockedCount /
                          courseModules.length) *
                        100
                      : 0
                  }%`,
                }}
              ></div>
            </div>

          </div>

        </div>

        <div className="modules-list">

          {courseModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onOpen={handleOpenModule}
              onRequestUnlock={handleRequestUnlock}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;