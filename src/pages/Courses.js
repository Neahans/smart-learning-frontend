import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import api from "../services/api";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("courses/");
        setCourses(response.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [courses, search, category]);

  const handleViewCourse = (course) => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <div>
          <h2>
            {currentUser?.role === "Student"
              ? "Explore Courses"
              : "Courses"}
          </h2>

          <p>
            Learn new skills and continue your learning journey.
          </p>
        </div>

        {currentUser?.role === "Admin" && (
          <button className="add-course-btn">
            <i className="bi bi-plus-circle"></i> Add Course
          </button>
        )}
      </div>

      <div className="courses-toolbar">
        <div className="search-box">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="empty-state">
          <p>Loading courses...</p>
        </div>
      )}

      {error && (
        <div className="empty-state">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <p className="course-count">
            {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onView={handleViewCourse}
                />
              ))
            ) : (
              <div className="empty-state">
                <i className="bi bi-search"></i>
                <h4>No courses found</h4>
                <p>Try another search or category.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;